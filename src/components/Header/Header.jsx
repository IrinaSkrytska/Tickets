import css from './Header.module.css';
import sprite from '../../images/sprite.svg';

export default function Header() {
  return (
    <>
      <section className={css.hero}>
        <div>
          <div className={css.header}>
            <svg
              width="126px"
              height="30px"
              aria-label="Логотип сервісу"
              className={css.logo}
            >
              <use href={sprite + '#icon-logo'}></use>
            </svg>

            <ul className={css.header__features}>
              <li className={css.header__feature}>$ USD</li>
              <li className={css.header__feature}>Допомога</li>
              <li className={css.header__feature}>UA</li>
              <button type="button" className={css.button__login}>
                <svg
                  width="20px"
                  height="20px"
                  aria-label="Увійти"
                  className={css.login__icon}
                >
                  <use href={sprite + '#icon-login'}></use>
                </svg>
                Увійти
              </button>
            </ul>
          </div>

          <div className={css.ticket__thumb}>
            <ul className={css.direction__images}>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-1'}></use>
                  <use href={sprite + '#icon-cars'}></use>
                </svg>
              </li>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-2'}></use>
                  <use href={sprite + '#icon-flight'}></use>
                </svg>
              </li>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-3'}></use>
                  <use href={sprite + '#icon-railway'}></use>
                </svg>
              </li>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-4'}></use>
                  <use href={sprite + '#icon-bus'}></use>
                </svg>
              </li>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-5'}></use>
                  <use href={sprite + '#icon-shelter'}></use>
                </svg>
              </li>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-5'}></use>
                  <use href={sprite + '#icon-attractions'}></use>
                </svg>
              </li>
              <li>
                <svg
                  width="116px"
                  height="47px"
                  aria-label=""
                  className={css.direction__image}
                >
                  <use href={sprite + '#icon-background-6'}></use>
                  <use href={sprite + '#icon-car'}></use>
                </svg>
              </li>
            </ul>

            <div className={css.ticket}>
              <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Чернівці, Україна"
                className={css.ticket__input__place}
              />
              <span>
                <svg width="24px" height="24px" aria-label="Зміна напрямку">
                  <use href={sprite + '#icon-direction'}></use>
                </svg>
              </span>
              <label>
                <input
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Країна, місто, населений пункт"
                  className={css.ticket__input__place}
                />
              </label>
              <input
                type="date"
                autoComplete="off"
                autoFocus
                placeholder=""
                className={css.ticket__input}
              />
              {/* <label>
              Назад */}
              <input
                type="date"
                autoComplete="off"
                autoFocus
                placeholder=""
                className={css.ticket__input}
              />
              {/* </label> */}
              <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="1 Дорослий"
                className={css.ticket__input}
              />
              <button className={css.ticket__button} type="submit">
                <svg width="30px" height="30px" aria-label="Пошук">
                  <use href={sprite + '#icon-search'}></use>
                </svg>
              </button>
              <label>
                <input type="radio" id="route__check" />
                Складний маршрут
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
