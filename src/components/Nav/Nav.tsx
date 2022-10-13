import { component$, useStylesScoped$, useClientEffect$, useStore } from '@builder.io/qwik';
import styles from './nav.sass';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  useStylesScoped$(styles);

  const store = useStore({
    scrollPosition: 0,
  });

  useClientEffect$(() => {
    window.addEventListener('scroll', () => {
      store.scrollPosition = window.scrollY
    })
  }, { eagerness: 'load' })



  return (
    <nav class={store.scrollPosition >= 80 ? 'scrolling' : ''}>
      <div id="nav-content" >
        <Link href="/">Now Space0</Link>
      </div>
    </nav>
  );
});
