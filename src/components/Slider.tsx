/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { useEffect, useRef } from 'react';
import { getNumbers } from '../helpers/utils';

type Props = {
  section: string;
  addClass?: string;
  src: string;
  pcs: number;
  alt: string;
};

export const Slider: React.FC<Props> = ({
  section, src, addClass, pcs, alt,
}) => {
  const images = useRef<Array<HTMLImageElement | null>>([]);
  const slider = useRef<HTMLDivElement>(null);
  const sliderLine = useRef<HTMLDivElement>(null);

  let count = 0;
  let width = 0;

  function init() {
    if (slider.current && sliderLine.current) {
      width = slider.current.offsetWidth;
      sliderLine.current.style.width = `${width * images.current.length}px`;
      sliderLine.current.style.transform = 'none';
    }

    images.current.forEach(item => {
      if (item) {
        const i = item;

        i.style.width = `${width}px`;
        i.style.height = 'auto';
      }
    });

    count = 0;
  }

  function rollSlider() {
    if (sliderLine.current) {
      sliderLine.current.style.transform = `translate(-${count * width}px)`;
    }
  }

  function next() {
    count += 1;

    if (count >= images.current.length) {
      count = 0;
    }

    rollSlider();
  }

  function prev() {
    count -= 1;

    if (count < 0) {
      count = images.current.length - 1;
    }

    rollSlider();
  }

  window.addEventListener('resize', init);

  setTimeout(() => next(), 2000);
  setTimeout(() => next(), 9000);
  setTimeout(() => next(), 11000);

  type Position = number | null;

  let xDown: Position = null;
  let yDown: Position = null;

  function getTouches(evt: TouchEvent) {
    return evt.touches;
  }

  function handleTouchStart(evt: TouchEvent) {
    const firstTouch = getTouches(evt)[0];

    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: TouchEvent) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        next();
      } else {
        prev();
      }
    } else if (yDiff > 0) {
      return;
    }

    xDown = null;
    yDown = null;
  }

  useEffect(() => {
    init();
    if (slider.current) {
      slider.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      slider.current.addEventListener('touchmove', handleTouchMove, { passive: true });
    }
  }, []);

  return (
    <div className={`slider ${addClass}`}>
      <div className="slider__container" ref={slider}>
        <div className="slider-line" ref={sliderLine}>
          {getNumbers(1, pcs).map(num => (
            <img
              key={num}
              src={`${src}${num}.jpg`}
              alt={alt}
              ref={(element) => images.current.push(element)}
            />
          ))}
        </div>

        <button
          className="slider__button slider__button--prev"
          type="button"
          aria-label="previous"
          onClick={() => prev()}
        >
          <svg className="slider__button--svg slider__button--svg-prev" viewBox="0 0 8 12">
            <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" />
          </svg>
        </button>

        <button className="slider__button slider__button--next" type="button" aria-label="next" onClick={() => next()}>
          <svg className="slider__button--svg" viewBox="0 0 8 12">
            <path d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z" />
          </svg>
        </button>
      </div>
      {section === 'bento' && (<h3 className="page__section--subtitle">Приклади декорів</h3>)}
      {section === 'cake' && (
        <h3 className="page__section--subtitle cake__slider--subtitle">
          Декор розраховується для кожного клієнта окремо залежно від ваших побажань. Мінімальний входить у вартість
          торту.
          <br />
          Оформлювати замовлення краще заздалегідь, за 5-7 днів.
          <br />
          Також можемо прийняти екстрені замовлення але це залежить від завантаженості.
          <br />
          Наполеон та Медовик можна замовити на "завтра".
          <br />
        </h3>
      )}
    </div>
  );
};
