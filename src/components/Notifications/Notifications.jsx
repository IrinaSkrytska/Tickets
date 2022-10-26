import Header from 'components/Header';
import css from './Notifications.module.css';
import sprite from '../../images/sprite.svg';
import { Link, useLocation } from 'react-router-dom';
import settingsWhite from '../../images/settingsWhite.svg';
import transport_blue from '../../images/transport_blue.svg';
import bell_white from '../../images/bell_white.svg';
import flixbus from '../../images/flixbus.svg';

export default function Notifications() {
  return (
    <>
      <section className={css.hero}>
        <Header />{' '}
        <div>
          <div>
            <ul className={css.ticket__options}>
              <li className={css.option}>
                <img
                  src={settingsWhite}
                  alt=""
                  width="32px"
                  height="32px"
                  className={css.option__icon}
                />
              </li>

              <li className={css.option__transport}>
                <img
                  src={transport_blue}
                  alt=""
                  width="40px"
                  height="40px"
                  className={css.option__icon__transport}
                />
              </li>

              <li className={css.option__notification}>
                <img
                  src={bell_white}
                  alt=""
                  width="28px"
                  height="28px"
                  className={css.option__icon__bell}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
