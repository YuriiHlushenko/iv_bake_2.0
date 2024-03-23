/* eslint-disable max-len */
import './App.scss';
import { useEffect, useRef } from 'react';
import { Slider } from './components/Slider';
import { Menu } from './components/menu';
import bentoItems from './api/bentoCards.json';
import cakeItems from './api/cakeCards.json';
import dessertItems from './api/dessertsCards.json';
import { Card } from './components/card';
import { Shedule } from './components/menu/shedule';
import { Location } from './components/menu/location';
import { Call } from './components/menu/call';
import { TIgram } from './components/menu/TIgram';
import { Viber } from './components/menu/viber';
import { Loader } from './components/Loader';

export const App = () => {
  const menu = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    if (menu.current) {
      menu.current.style.transform = 'translateX(0)';
    }
  };

  const hideMenu = () => {
    if (menu.current) {
      menu.current.style.transform = 'translateX(-100%)';
    }
  };

  useEffect(() => {
    const loader: HTMLDivElement | null = document.querySelector('.Loader');

    setTimeout(() => {
      if (loader) {
        loader.style.display = 'none';
      }
    }, 800);
  }, []);

  const goTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Loader />
      <header className="header" id="home">
        <h1 className="page__body--h1">
          кондитерська житомир, торти на замовлення, замовити паску, паска, крафтовий зефір,
          десерти, букет з зефіру ,макарони, меренговий рулет, тарти
        </h1>

        <div className="header__top">
          <a className="header__logo" href="#cake">
            <img className="header__logo--img" src="images/logo.svg" alt="івбейк" />
          </a>

          <Menu location="header" />

          <a className="header__call" href="tel:+380964523663" aria-label="phone">
            <svg
              className="header__menu--svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z"
              />
            </svg>
          </a>

          <button type="button" className="header__menu" aria-label="menu" onClick={showMenu}>
            <svg className="header__menu--svg" width="18" height="12" viewBox="0 0 18 12">
              <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" />
            </svg>
          </button>
        </div>
      </header>

      <nav className="menu" id="menu" ref={menu}>
        <div className="header__top">
          <a href="#cake" className="header__logo menu__logo">
            <img className="menu__logo--img" src="images/logo.svg" alt="iv_bake ivbake" />
          </a>

          <a className="header__call" href="tel:+380964523663" aria-label="phone">
            <svg
              className="header__menu--svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z"
              />
            </svg>
          </a>

          <button type="button" className="menu__cross" aria-label="close" onClick={hideMenu}>
            <svg className="menu__cross--svg" width="18" height="18" viewBox="0 0 14 14">
              <path
                d="M7.00023 5.58599L11.9502 0.635986L13.3642 2.04999L8.41423 6.99999L13.3642 11.95L11.9502 13.364L7.00023 8.41399L2.05023 13.364L0.63623 11.95L5.58623 6.99999L0.63623 2.04999L2.05023 0.635986L7.00023 5.58599Z"
              />
            </svg>
          </button>
        </div>

        <Menu location="menu" hideMenu={hideMenu} />
      </nav>

      <section className="bento page__section" id="bento">
        <div className="page__container">

          <h2 className="page__section--title">
            <img className="menu__link--img" src="images/bento.svg" alt="бенто торт житомир" />
            Бенто
          </h2>

          <div className="bento__flex">
            <div className="bento__flex--cards">

              {bentoItems.map(card => (
                <Card card={card} section="bento" key={card.id} />
              ))}

              <h3 className="page__section--subtitle bento__subtitle">
                Бенто тортик можна замовити &quotна завтра&quot.
                <br />
                Бенто XL бажано замовляти за 2-3 дні.
              </h3>
            </div>

            <Slider
              section="bento"
              addClass="bento__slider"
              src="images/bento/decors/decor"
              pcs={6}
              alt="Бенто торти замовити житомир"
            />

          </div>
        </div>
      </section>

      <section className="cake page__section" id="cake">
        <div className="page__container">
          <h2 className="page__section--title">
            <img className="menu__link--img" src="images/cake.svg" alt="бісквітні торти житомир" />
            Торти на замовлення
          </h2>

          <p className="page__section--text page__section--text-info">
            Для оформлення замовлення ознайомтесь з асортиментом та цінами, мінінмальна вага вказана під кожним тортиком,
            пошукайте дизайн який вам до вподоби (на просторах
            <a href="https://www.pinterest.ca/" className="page__section--link" target="_blank" rel="noreferrer">
              Pinrerest
            </a>
            наприклад) і пишіть нам на
            <a href="https://t.me/IvannaHavryliuk" className="page__section--link">телеграм</a>
            ,
            <a href="https://instagram.com/iv_bake?igshid=YmMyMTA2M2Y=" className="page__section--link">
              інстаграм
            </a>
            ,
            чи
            <a href="viber://chat?number=380964523663" className="page__section--link">
              вайбер
            </a>
            .
          </p>

          <div className="grid cake__grid">
            {cakeItems.map(card => (
              <Card card={card} section="cake" key={card.id} />
            ))}

            <Slider
              section="cake"
              addClass="slider--cake
              grid__item--tablet-1-6
              grid__item--desktop-7-12"
              src="images/cake/dekors/dekor"
              pcs={16}
              alt="торти замовити житомир"
            />
          </div>
        </div>
      </section>

      <section className="candy page__section" id="candy">
        <div className="candy__top">
          <div className="page__container">
            <h2 className="page__section--title candy__top--title">
              <img className="menu__link--img" src="images/corp.svg" alt="Корпоративні замовлення десертів, набори житомир" />
              Candy Bar
            </h2>

            <p className="page__section--text page__section--text-info candy__top--text">
              Плануєте велике свято? Потрібно привітати колег? Чи зробити подарунки для друзів?
              <br />
              Придумаємо різні варіанти десертів, тістечок та тортів на ваші великі і маленькі святкування💞
            </p>
          </div>
        </div>

        <div className="page__container candy__padding">
          <div className="candy__section">
            <div className="candy__container">
              <div className="candy__container--flex">
                {[5, 2, 3, 4, 6].map(n => (
                  <div className="card" key={n}>
                    <div className="card__photo">
                      <img
                        className="card__photo--img candy__photo--img"
                        src={`images/candy/sets/set${n}.jpg`}
                        alt="набір десертів, кендібар в житомир"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="zephyr page__section" id="zephyr">
        <div className="page__container">
          <h2 className="page__section--title">
            <img className="menu__link--img" src="images/tulip.png" alt="Зефірні букети житомир" />
            Зефірні квіти
          </h2>

          <p className="page__section--text page__section--text-info">
            Яблучний зефір - це натуральний продукт з яблучного пюре.
            <br />
            Наші букети з зефіра - це оригінальний та ефектний подарунок 🌺 для будь-якої особливої нагоди або просто для
            підняття настрою у важкий день.
            <br />
            Ви здивуєте іменинницю таким букетом.
            <br />
            Кількість квітів завжди різна так як це ручна робота кожного.
          </p>

          <div className="zephyr__flex">
            <Card
              card={{
                id: '2',
                title: 'Букет',
                optionalClass: 'grid__item--tablet-1-3 grid__item--desktop-1-3',
                alt: 'букет з зефіру зефірні тюльпани в житомирі розмір м',
                src: 'images/zephyr/bouquetM/bouquetM.jpg',
                subtitle: 'Діаметр підложки 20см',
                price: '950 ₴',
              }}
              section="zephyr"
              key="2"
            />
          </div>
        </div>
      </section>

      <section className="desserts page__section" id="desserts">
        <div className="page__container">
          <h2 className="page__section--title">
            <img className="menu__link--img" src="images/dessert.svg" alt="десерти" />
            Десерти
          </h2>

          <div className="desserts__flex">
            {dessertItems.map(card => (
              <Card card={card} section="desserts" key={card.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="feedback page__section" id="feedback">
        <div className="page__container">

          <h2 className="page__section--title">
            <img className="menu__link--img" src="images/feedback.svg" alt="відгуки" />
            Відгуки
          </h2>

          <div className="feedback__flex">
            {[1, 2, 3].map(n => (
              <div className="card feedback__card" key={n}>
                <div className="feedback__photo">
                  <img
                    className="card__photo--img card__photo--img-feedback"
                    src={`images/feedback/${n}.jpg`}
                    alt="відгуки"
                  />
                </div>
              </div>
            ))}

            <Slider
              addClass="feedback__slider"
              section="feedback"
              src="images/feedback/"
              alt="відгук"
              pcs={6}
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container page__container">
          <nav className="footer__menu">
            <div className="footer__info
            grid__item--tablet-1-6
            grid__item--desktop-1-12"
            >
              <div className="footer__info--container">
                <Shedule
                  addClass="footer__link footer__part"
                  iconClass="footer__icon--map footer__icon"
                />

                <a
                  className="menu__link footer__link footer__part footer__adress"
                  href="https://goo.gl/maps/UY4yS4sxDGisTwMP7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Location iconClass="footer__icon--map footer__icon" />
                  м. Житомир
                  вул. Грушевського 98а
                </a>
              </div>
              <div className="footer__info--line" />
            </div>

            <Menu location="footer" />

            <div className="menu__item--contacts footer__part grid__item--tablet-1-3 footer__contacts">
              <Call addClass="footer__icon" />
              <TIgram addClass="footer__icon" />
              <Viber iconClass="footer__icon" />
              <a href="#home" className="footer__link--gotop-static" aria-label="home">
                <svg className="footer__link--gotop-svg menu__icon" viewBox="0 0 512 512">
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 302.6l-103.1 103.1C270.7 414.6 260.9 416 256 416c-4.881 0-14.65-1.391-22.65-9.398L129.4 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0S395.1 290.1 382.6 302.6z"
                  />
                </svg>
              </a>

            </div>
            <div className="footer__gotop">
              <button onClick={goTop} className="footer__link--gotop" aria-label="go top" type="button">
                <svg className="footer__link--gotop-svg menu__icon" viewBox="0 0 512 512">
                  <path
                    d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 302.6l-103.1 103.1C270.7 414.6 260.9 416 256 416c-4.881 0-14.65-1.391-22.65-9.398L129.4 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0S395.1 290.1 382.6 302.6z"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
};
