/**
 * ProjectCarousel - MDX Component for image carousels
 * Features: circular navigation, next-image peek, touch swipe, keyboard nav, a11y
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './ProjectCarousel.module.css';

function ProjectCarousel({
  images,
  defaultIndex = 0,
  showThumbnails = true,
  showArrows = true,
  className = '',
  height,
  defaultScale = 1,
}) {  
  // Parse images - handle various MDX serialization formats
  let validImages = [];
  try {
    if (Array.isArray(images)) {
      validImages = images;
    } else if (typeof images === 'string') {
      const parsed = JSON.parse(images);
      validImages = Array.isArray(parsed) ? parsed : [];
    } else if (images && typeof images === 'object') {
      validImages = Object.values(images).filter(v => v && typeof v === 'object');
    }
  } catch (e) {
    console.warn('ProjectCarousel: Failed to parse images prop', e);
    validImages = [];
  }

  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [touchStart, setTouchStart] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const trackRef = useRef(null);
  const carouselRef = useRef(null);
  const animationTimeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const imageCount = validImages.length;
  const nextIndex = (currentIndex + 1) % imageCount;

  useEffect(() => {
    setAnnouncement(`Image ${currentIndex + 1} of ${imageCount}`);
  }, [currentIndex, imageCount]);

  const goTo = useCallback((index) => {
    if (imageCount === 0 || isAnimatingRef.current) return;
    const clamped = ((index % imageCount) + imageCount) % imageCount;
    setCurrentIndex(clamped);
    isAnimatingRef.current = true;
    setIsAnimating(true);
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => { 
      isAnimatingRef.current = false; 
      setIsAnimating(false); 
    }, 400);
  }, [imageCount]);

  const goNext = useCallback(() => {
    if (imageCount === 0 || isAnimatingRef.current) return;
    setCurrentIndex(prev => {
      const next = (prev + 1) % imageCount;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = setTimeout(() => { 
        isAnimatingRef.current = false; 
        setIsAnimating(false); 
      }, 400);
      return next;
    });
  }, [imageCount]);

  const goPrev = useCallback(() => {
    if (imageCount === 0 || isAnimatingRef.current) return;
    setCurrentIndex(prev => {
      const prevIdx = (prev - 1 + imageCount) % imageCount;
      isAnimatingRef.current = true;
      setIsAnimating(true);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = setTimeout(() => { 
        isAnimatingRef.current = false; 
        setIsAnimating(false); 
      }, 400);
      return prevIdx;
    });
  }, [imageCount]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!carouselRef.current?.contains(document.activeElement) && e.target !== carouselRef.current) return;
      if (imageCount === 0) return;
      switch (e.key) {
        case 'ArrowRight': e.preventDefault(); goNext(); break;
        case 'ArrowLeft': e.preventDefault(); goPrev(); break;
        case 'Home': e.preventDefault(); goTo(0); break;
        case 'End': e.preventDefault(); goTo(imageCount - 1); break;
        default: return;
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, goTo, imageCount]);

  const handleTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, time: Date.now() });
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const dx = e.touches[0].clientX - touchStart.x;
    if (Math.abs(dx) > 30) e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const dx = e.changedTouches[0].clientX - touchStart.x;
    const dt = Date.now() - touchStart.time;
    const velocity = Math.abs(dx) / dt;
    if (Math.abs(dx) > 50 || velocity > 0.3) {
      dx > 0 ? goPrev() : goNext();
    }
    setTouchStart(null);
  };

  const getPlaceholder = (i) => {
    const alt = validImages[i]?.alt || 'No description';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450"><rect fill="#1a2335" width="800" height="450"/><rect x="100" y="150" width="600" height="150" fill="#23304a" rx="8"/><text x="400" y="250" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="#22d3ee">Image ${i + 1}</text><text x="400" y="290" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="14" fill="#94a3b8">${alt}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  const nextImage = validImages[nextIndex];

  const trackTransform = `translateX(-${currentIndex * 100}%)`;

  return (
    <div
      ref={carouselRef}
      className={`${styles.carousel} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.liveRegion} aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: trackTransform }}
          role="list"
        >
          {validImages.map((img, i) => (
            <div
              key={img.src || i}
              className={styles.slide}
              role="listitem"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${imageCount}`}
            >
              <div 
                style={{
                  height,
                }}
                className={styles.slideImageWrapper}
              >
                <img
                  style={createImgStyle(img, defaultScale)}
                  src={img.src || getPlaceholder(i)}
                  alt={img.alt}
                  className={styles.slideImage}
                  loading={i === currentIndex || i === nextIndex ? 'eager' : 'lazy'}
                />
              </div>
              {img.caption && (
                <p className={styles.slideCaption}>{img.caption}</p>
              )}
            </div>
          ))}
        </div>

        {imageCount > 1 && (
          <div className={styles.nextPeek} aria-hidden="true">
            <img
              src={nextImage.src || getPlaceholder(nextIndex)}
              alt=""
              className={styles.nextPeekImage}
              loading="lazy"
            />
          </div>
        )}
      </div>

      {showArrows && imageCount > 1 && (
        <>
          <button
            className={`${styles.navArrow} ${styles.navArrowPrev}`}
            onClick={goPrev}
            aria-label="Previous image"
            disabled={isAnimating}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={`${styles.navArrow} ${styles.navArrowNext}`}
            onClick={goNext}
            aria-label="Next image"
            disabled={isAnimating}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {showThumbnails && (
        <div className={styles.dotsContainer} role="tablist" aria-label="Image navigation">
          {validImages.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function createImgStyle(img, defaultScale) {
  const zoom = img.scale ?? defaultScale;
  const objectFit = img.fit ?? !!img.scale ? "contain" : "cover";

  return {
      zoom,
      objectFit,
    }
}

export default ProjectCarousel;
