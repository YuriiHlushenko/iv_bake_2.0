import { useEffect, useRef } from 'react';
import { CardItem } from '../types/cardItem';

type Props = {
  card: CardItem;
  section: string;
  optonalClass?: string;
};

export const Card: React.FC<Props> = ({ card, section }) => {
  const cardEl = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const touch = useRef<HTMLImageElement>(null);

  function click() {
    if (cardEl.current && img.current) {
      const { src } = img.current;

      if (cardEl.current.classList.contains('card--hover')) {
        cardEl.current.classList.remove('card--hover');

        if (src.includes('2')) {
          img.current.src = `${src.slice(0, src.length - 5)}.jpg`;
        }
      } else {
        cardEl.current.classList.add('card--hover');

        if (!src.includes('2')) {
          img.current.src = `${src.slice(0, src.length - 4)}2.jpg`;
        }
      }
    }
  }

  useEffect(() => {
    if (cardEl.current && img.current) {
      const { src } = img.current;

      cardEl.current.addEventListener('mouseover', () => {
        cardEl.current?.classList.remove('card--hover');
        if (img.current) {
          img.current.src = `${src.slice(0, src.length - 4)}2.jpg`;
        }
      });

      cardEl.current.addEventListener('mouseout', () => {
        cardEl.current?.classList.remove('card--hover');

        if (img.current) {
          img.current.src = `${src.slice(0, src.length - 4)}.jpg`;
        }
      });
    }

    setTimeout(() => {
      if (touch.current) {
        touch.current.style.display = 'none';
      }
    }, 4000);
  }, []);

  // useEffect(() => {
  //   if (cardEl.current) {
  //     cardEl.current.classList.add('card--hover');
  //   }

  //   setTimeout(() => {
  //     if (cardEl.current) {
  //       cardEl.current.classList.remove('card--hover');
  //     }
  //   }, 4000);
  // }, []);

  return (
    <div
      className={`card ${section}__card ${card.optionalClass}`}
      ref={cardEl}
      onMouseDown={() => click()}
      role="button"
      tabIndex={0}
    >
      <div className={`${section}__card--photo${card.id} card__photo`}>
        <img
          className="card__photo--img"
          src={card.src}
          alt={card.alt && card.title}
          ref={img}
        />
        <img
          className="card__photo--touch"
          src="images/svg/touch.svg"
          alt="touch"
          ref={touch}
        />
      </div>

      <div className="card__description card__description--bento">
        <h3 className="card__title">{card.title}</h3>

        <p className="card__about">{card.about}</p>

        <p className="card__subtitle">
          {card.subtitle}
          <span className="bold">{`${card.price}`}</span>
        </p>
      </div>
    </div>
  );
};
