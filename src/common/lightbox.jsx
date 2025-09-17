import { useState, useEffect, useRef } from "react";
import styles from "../styles/lightbox.module.css";
import { HiX } from "react-icons/hi";
import { createPortal } from "react-dom";

export default function Lightbox({ src, alt }) {
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
    setPosition({ x: 0, y: 0 }); // reset pan on zoom toggle
  };

  // Drag start
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
    // If moved more than a few pixels, consider it a drag
    if (Math.abs(dx - position.x) > 2 || Math.abs(dy - position.y) > 2) {
      dragMoved.current = true;
    }
    setPosition({
      x: dx,
      y: dy,
    });
  };

  const handleMouseUp = () => setDragging(false);

  // Only toggle zoom if not a drag
  const handleImageClick = (e) => {
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

  // Only render portal if document.body is available
  const canUseDOM = typeof window !== "undefined" && !!document.body;
  return (
    <>
      {/* Thumbnail / clickable image */}
      <img
        src={src}
        alt={alt}
        style={{ cursor: "pointer" }}
        onClick={openLightbox}
      />

      {open && canUseDOM && createPortal(
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <button className={styles.lightboxClose} onClick={closeLightbox}>
            <HiX size={28} />
          </button>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            <div
              className={styles.lightboxImageWrapper}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onDoubleClick={toggleZoom} // double click also toggles zoom
            >
              <img
                src={src}
                alt={alt}
                onClick={handleImageClick}
                onDragStart={e => e.preventDefault()}
                className={`${styles.lightboxImage} ${zoomed ? styles.zoomed : ""}`}
                style={{
                  transform: zoomed
                    ? `scale(1.5) translate(${position.x / 1.5}px, ${position.y / 1.5}px)`
                    : "scale(1) translate(0,0)",
                  cursor: zoomed
                    ? dragging
                      ? "grabbing"
                      : "grab"
                    : "zoom-in",
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
