import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/carousel.module.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Lightbox from "./lightbox";


function Carousel({ slides, slidesInView = 1 }) {
  // Clamp slidesInView between 1 and 4
  const maxSlides = Math.max(1, Math.min(slidesInView, 4));
  const GAP = 15;

  // Responsive breakpoints for slidesInView
  const getSlidesToShow = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return Math.min(2, maxSlides);
    if (window.innerWidth < 1200) return Math.min(3, maxSlides);
    return maxSlides;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxSlides]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect(); // set initial index
  }, [emblaApi, onSelect]);

  // Calculate slide width percentage
  const slideWidth = `calc((100% - ${(slidesToShow - 1) * GAP}px) / ${slidesToShow})`;

  return (
    <div className={styles.carousel}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide, index) => (
            <div
              className={styles.emblaSlide}
              key={index}
              style={{
                flex: `0 0 ${slideWidth}`,
                minWidth: slideWidth,
              }}
            >
              <Lightbox
                src={slide}
                alt={`Slide ${index + 1}`}
                className={styles.emblaImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <div className={styles.navigation}>
        <button className={styles.prevButton} onClick={scrollPrev}>
          <HiChevronLeft />
        </button>
        {/* Dot navigation */}
        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`${styles.dot} ${
                index === selectedIndex ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>
        <button className={styles.nextButton} onClick={scrollNext}>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
