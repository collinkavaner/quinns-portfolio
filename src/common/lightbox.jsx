import { useState, useEffect, useRef } from "react";
import styles from "../styles/lightbox.module.css";
import { HiX } from "react-icons/hi";
import { createPortal } from "react-dom";

export default function Lightbox({ src, alt, style }) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const dragMoved = useRef(false);

  const openLightbox = () => {
    setOpen(true);
    setZoomed(false);
    setPosition({ x: 0, y: 0 });
  };

  const closeLightbox = () => setOpen(false);

  const toggleZoom = () => {
    setZoomed((prev) => !prev);
    setPosition({ x: 0, y: 0 }); // reset pan
  };

  // ----- Mouse handlers -----
  const handleMouseDown = (e) => {
    if (!zoomed) return;
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    dragMoved.current = false;
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;

    if (Math.abs(dx - position.x) > 2 || Math.abs(dy - position.y) > 2) {
      dragMoved.current = true;
    }

    setPosition({ x: dx, y: dy });
  };

  const handleMouseUp = () => setDragging(false);

  // ----- Touch handlers -----
  const handleTouchStart = (e) => {
    if (!zoomed) return;
    const touch = e.touches[0];
    setDragging(true);
    setStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    dragMoved.current = false;
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    if (Math.abs(dx - position.x) > 2 || Math.abs(dy - position.y) > 2) {
      dragMoved.current = true;
    }

    setPosition({ x: dx, y: dy });
    e.preventDefault(); // 🚫 stop background scroll while dragging
  };

  const handleTouchEnd = () => setDragging(false);

  // Only toggle zoom if not a drag
  const handleImageClick = () => {
    if (dragMoved.current) {
      dragMoved.current = false;
      return;
    }
    toggleZoom();
  };

  // ESC key closes
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const canUseDOM = typeof window !== "undefined" && !!document.body;

  // Determine zoom scale based on device
  const isMobile = canUseDOM && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const zoomScale = isMobile ? 3 : 1.5;

  return (
    <>
      {/* Thumbnail */}
      <img
        src={src}
        alt={alt}
        style={{ cursor: "pointer" }}
        onClick={openLightbox}
        className={style}
      />

      {open &&
        canUseDOM &&
        createPortal(
          <div
            className={styles.lightboxOverlay}
            onClick={closeLightbox}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <HiX size={28} />
            </button>

            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={styles.lightboxImageWrapper}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onDoubleClick={toggleZoom}
              >
                <img
                  src={src}
                  alt={alt}
                  onClick={handleImageClick}
                  onDragStart={(e) => e.preventDefault()}
                  className={`${styles.lightboxImage} ${
                    zoomed ? styles.zoomed : ""
                  }`}
                  style={{
                    transform: zoomed
                      ? `scale(${zoomScale}) translate(${position.x / zoomScale}px, ${position.y / zoomScale}px)`
                      : "scale(1) translate(0,0)",
                    cursor: zoomed
                      ? dragging
                        ? "grabbing"
                        : "grab"
                      : "zoom-in",
                    touchAction: zoomed ? "none" : "auto", // prevent scroll interference
                  }}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
