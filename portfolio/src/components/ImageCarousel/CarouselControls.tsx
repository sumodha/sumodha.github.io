import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './CarouselControls.css';

export type CarouselNavigation = 'overlay' | 'progress';

type CarouselControlsProps = {
  count: number;
  activeIndex: number;
  navigation: CarouselNavigation;
  onSelect: (index: number) => void;
};

export default function CarouselControls({ count, activeIndex, navigation, onSelect }: CarouselControlsProps) {
  if (count < 2) return null;
  const PreviousIcon = navigation === 'progress' ? FiArrowLeft : FiChevronLeft;
  const NextIcon = navigation === 'progress' ? FiArrowRight : FiChevronRight;

  return (
    <fieldset className={`carousel-controls carousel-controls--${navigation}`}>
      <legend className="sr-only">Browse photos</legend>
      <button type="button" className="carousel-arrow carousel-arrow--left" onClick={() => onSelect(activeIndex - 1)} aria-label="Previous photo">
        <PreviousIcon aria-hidden="true" />
      </button>
      <ol className="carousel-indicators" aria-label="Choose a photo" role="list">
        {Array.from({ length: count }, (_, index) => (
          <li key={index}>
            <button type="button" onClick={() => onSelect(index)} aria-label={`Go to photo ${index + 1}`} aria-current={index === activeIndex ? 'true' : undefined}>
              <span />
            </button>
          </li>
        ))}
      </ol>
      <button type="button" className="carousel-arrow carousel-arrow--right" onClick={() => onSelect(activeIndex + 1)} aria-label="Next photo">
        <NextIcon aria-hidden="true" />
      </button>
      <span className="sr-only" aria-live="polite" aria-atomic="true">photo {activeIndex + 1} of {count}</span>
    </fieldset>
  );
}
