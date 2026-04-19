import { useState, useEffect, useCallback } from "react";
import artworks from "./sketchbook.json";
import "./Sketchbook.css";

/*
  Page model:
  - page 0 = front cover (black, says "Sketchbook")
  - pages 1..N = artwork pages
  currentPage tracks how many pages have been flipped.
  0 = book closed (cover showing), 1 = cover flipped (first art visible), etc.
*/

export default function Sketchbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [showBackCover, setShowBackCover] = useState(false);
  // +1 for the cover page
  const totalFlippable = artworks.length + 1;


  const flipForward = useCallback(() => {
    setCurrentPage((p) => {
      const next = Math.min(p + 1, totalFlippable);
      if (next >= totalFlippable) {
        setShowBackCover(true);
        setLeftVisible(false);
      }
      return next;
    });
  }, [totalFlippable]);

  const flipBackward = useCallback(() => {
    setCurrentPage((p) => {
      const next = Math.max(p - 1, 0);
      if (next < totalFlippable) {
        setShowBackCover(false);
      }
      return next;
    });
  }, [totalFlippable]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        flipForward();
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        flipBackward();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [flipForward, flipBackward]);


  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  // the art index shown on the left side after flipping past the cover
  const leftArtIndex = currentPage >= 2 ? currentPage - 2 : null;

  // track when the left side should be visible (delayed after flip animation)
  const [leftVisible, setLeftVisible] = useState(false);

  useEffect(() => {
    if (currentPage > 0 && currentPage < totalFlippable) {
      const timer = setTimeout(() => setLeftVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      setLeftVisible(false);
    }
  }, [currentPage, totalFlippable]);

  return (
    <div className="sketchbook">
      <div className="sketchbook__scene">
        <div className={`sketchbook__book ${
          currentPage === 0 ? "sketchbook__book--closed" : 
          showBackCover ? "sketchbook__book--back" : "sketchbook__book--open"
        }`}>
          {/* ── left side (appears after flip animation) ── */}
          <div
            className={`sketchbook__cover sketchbook__cover--info ${
              leftVisible && currentPage > 0 && !showBackCover ? "sketchbook__cover--visible" : "sketchbook__cover--hidden"
            }`}
          >
            {currentPage === 1 ? (
              <div className="sketchbook__back-content">
                <span className="sketchbook__back-num" />
              </div>
            ) : (
              leftArtIndex !== null &&
              leftArtIndex < artworks.length && (
                <div className="sketchbook__left-art">
                  <div className="sketchbook__art-wrapper">
                    {!imageErrors.has(leftArtIndex) ? (
                      <img
                        className="sketchbook__art"
                        src={artworks[leftArtIndex].image}
                        alt={artworks[leftArtIndex].title}
                        onError={() => handleImageError(leftArtIndex)}
                      />
                    ) : (
                      <div className="sketchbook__art-placeholder">✎</div>
                    )}
                  </div>
                  <div className="sketchbook__caption">
                    <h3 className="sketchbook__art-title">
                      {artworks[leftArtIndex].title}
                    </h3>
                    <p className="sketchbook__art-detail">
                      {artworks[leftArtIndex].medium} ·{" "}
                      {artworks[leftArtIndex].year}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* spine shadow — only when book is open and not showing back cover alone */}
          <div
            className={`sketchbook__spine ${
              leftVisible && currentPage > 0 && !showBackCover ? "sketchbook__spine--visible" : "sketchbook__spine--hidden"
            }`}
          />

          {/* ── back cover (always present under the pages on the right) ── */}
          <div className="sketchbook__back-cover">
            <span className="sketchbook__cover-text">SUMODHA POKHREL</span>
          </div>

          {/* ── page 0: the front cover ── */}
          <div
            className={`sketchbook__page sketchbook__page--cover ${
              currentPage > 0 ? "flipped" : ""
            } ${showBackCover ? "sketchbook__page--hidden" : ""}`}
            style={{
              zIndex: currentPage > 0 ? 100 : 100 + totalFlippable + 1,
            }}
            onClick={() => {
              if (currentPage > 0) {
                setCurrentPage(0);
              } else {
                flipForward();
              }
            }}
          >
            <div className="sketchbook__face sketchbook__face--cover-front">
              <div className="sketchbook__cover-front-content">
                <h1 className="sketchbook__cover-title">Sketchbook</h1>
                <div className="sketchbook__cover-line" />
                <p className="sketchbook__cover-author">Sumodha Pokhrel</p>
              </div>
            </div>
            <div className="sketchbook__face sketchbook__face--back">
              <div className="sketchbook__back-content">
                <span className="sketchbook__back-num">1</span>
              </div>
            </div>
          </div>

          {/* ── art pages ── */}
          {artworks.map((art, i) => {
            const pageIndex = i + 1;
            const isFlipped = pageIndex < currentPage;
            const zIndex = isFlipped
              ? 100 + pageIndex
              : 100 + (totalFlippable - pageIndex);

            return (
              <div
                key={i}
                className={`sketchbook__page ${isFlipped ? "flipped" : ""} ${showBackCover ? "sketchbook__page--hidden" : ""}`}
                style={{ zIndex }}
                onClick={() => {
                  if (isFlipped) {
                    setCurrentPage(pageIndex);
                  } else {
                    flipForward();
                  }
                }}
              >
                <div className="sketchbook__face sketchbook__face--front">
                  <div className="sketchbook__art-wrapper">
                    {!imageErrors.has(i) ? (
                      <img
                        className="sketchbook__art"
                        src={art.image}
                        alt={art.title}
                        onError={() => handleImageError(i)}
                      />
                    ) : (
                      <div className="sketchbook__art-placeholder">✎</div>
                    )}
                  </div>
                  <div className="sketchbook__caption">
                    <h3 className="sketchbook__art-title">{art.title}</h3>
                    <p className="sketchbook__art-detail">
                      {art.medium} · {art.year}
                    </p>
                  </div>
                </div>
                <div className="sketchbook__face sketchbook__face--back">
                  <div className="sketchbook__back-content">
                    <span className="sketchbook__back-num">
                      {i < artworks.length - 1 ? i + 2 : ""}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`sketchbook__shadow ${
        currentPage === 0 || showBackCover ? "sketchbook__shadow--centered" : ""
      }`} />

      <div className="sketchbook__nav">
        <button
          className="sketchbook__nav-btn"
          onClick={flipBackward}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          ←
        </button>
        <span className="sketchbook__page-indicator">
          {currentPage === 0
            ? "cover"
            : showBackCover
            ? "back"
            : `${currentPage} / ${artworks.length}`}
        </span>
        <button
          className="sketchbook__nav-btn"
          onClick={flipForward}
          disabled={showBackCover}
          aria-label="Next page"
        >
          →
        </button>
      </div>

      <div className="sketchbook__hint">
        <span className="sketchbook__hint-key">←</span>
        <span className="sketchbook__hint-key">→</span>
        {" "}or click pages to flip
      </div>
    </div>
  );
}
