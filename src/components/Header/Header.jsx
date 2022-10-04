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
              type="datetime-local"
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
              <input type="radio" class="route__radio" id="route__check" />
              Складний маршрут
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
