import css from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <section className={css.footer__background}>
        <p>TriPlanner (c) 2022</p>
        <ul>
          <li>
            <a href="/#">Політика конфеденційності</a>
          </li>
          <li>
            <a href="/#">Умови повернення</a>
          </li>
          <li>
            <a href="/#">Політика Cockie</a>
          </li>
          <li>
            <a href="/#">Згода на обробку даних</a>
          </li>
          <li>
            <a href="/#">Публічна оферта</a>
          </li>
          <li>
            <a href="/#">Контакти</a>
          </li>
          <li>
            <a href="/#">Про нас</a>
          </li>
          <li>
            <a href="/#">Допомога</a>
          </li>
          <li>
            <a href="/#">Співробітництво</a>
          </li>
          <li>
            <a href="/#">Мапа сайту</a>
          </li>
          <li>
            <a href="/#">Мапа COVID-правил</a>
          </li>
        </ul>
      </section>
    </>
  );
}
