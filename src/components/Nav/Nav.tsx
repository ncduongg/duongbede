import { component$, useStyles$, useClientEffect$, useStore } from '@builder.io/qwik';
import styles from './nav.sass';
import { Link } from '@builder.io/qwik-city';
import SearchBox from './SearchBox/SearchBox';

export default component$(() => {

  useStyles$(styles);

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
        <SearchBox />
        <div>Login</div>
      </div>
    </nav>
  );
});
