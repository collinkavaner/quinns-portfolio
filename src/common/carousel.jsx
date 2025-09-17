import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../styles/carousel.module.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Lightbox from "./lightbox";

function Carousel({ slides, width }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

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

  return (
    <div className={styles.carousel}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide, index) => (
            <div className={styles.emblaSlide} key={index}>
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
