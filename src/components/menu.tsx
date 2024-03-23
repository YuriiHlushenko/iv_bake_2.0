/* eslint-disable max-len */
import items from '../api/menuList.json';
import { TIgram } from './menu/TIgram';
import { Call } from './menu/call';
import { Location } from './menu/location';
import { Shedule } from './menu/shedule';
import { Viber } from './menu/viber';

type Props = {
  location?: string;
  hideMenu?: () => void;
};

export const Menu: React.FC<Props> = ({ location, hideMenu }) => {
  let ulClass = null;
  let liClass: string | null = null;
  let aClass: string | null = null;

  switch (location) {
    case 'header':
      ulClass = 'header__top--menu';
      break;
    case 'menu':
      liClass = 'menu__item--menu';
      break;
    case 'footer':
      ulClass = 'footer__part footer__list grid__item--tablet-4-6 grid__item--desktop-1-12';
      liClass = 'menu__item--menu';
      aClass = 'footer__link';
      break;
    default: ulClass = null;
  }

  return (
    <ul className={`menu__list ${ulClass}`}>

      {items.map(item => (
        <li className={`menu__item ${liClass}`} key={item.href}>
          <a href={item.href} className={`menu__link ${aClass}`} onClick={hideMenu}>
            <img className="menu__link--img" src={item.imgSrc} alt={item.imgAlt} />
            {item.title}
          </a>
        </li>
      ))}

      {location === 'header' && (
        <li className="menu__item fixed">
          <a className="menu__link menu__link--call" href="tel:+380964523663">
            <Call />

            <div className="menu__link--call-tooltip">
              +380964523663
            </div>
          </a>

          <TIgram />

          <a href="viber://chat?number=380964523663" className="menu__link menu__link--viber">
            <Viber />

            <div className="menu__link--call-tooltip">
              +380964523663
            </div>
          </a>

          <a className="menu__link menu__link--map" href="https://goo.gl/maps/UY4yS4sxDGisTwMP7" target="_blank" rel="noreferrer">
            <Location />

            <div className="menu__link--map-tooltip">
              м. Житомир
              <br />
              вул. Грушевського 98а
            </div>
          </a>
        </li>
      )}

      {location === 'menu' && (
        <>
          <li className="menu__item">
            <div className="menu__item--contacts menu__item--contacts-call">
              <a className="menu__link" href="tel:+380964523663" aria-label="phone number">
                <Call />
              </a>

              <TIgram />

              <a href="viber://chat?number=380964523663" className="menu__link" aria-label="viber">
                <Viber />
              </a>
            </div>
          </li>

          <li className="menu__item">
            <a href="https://goo.gl/maps/UY4yS4sxDGisTwMP7" className="menu__link" target="_blank" rel="noreferrer">
              <Location />
              м. Житомир
              <br />
              вул. Грушевського 98а
              <br />
            </a>
          </li>

          <li className="menu__item">
            <Shedule />
          </li>
        </>
      )}

    </ul>
  );
};
