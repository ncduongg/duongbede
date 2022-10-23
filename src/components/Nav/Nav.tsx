//@ts-nocheck
import { component$, useStyles$, useClientEffect$, useStore, $ } from '@builder.io/qwik';
import styles from './nav.sass';
import { Link } from '@builder.io/qwik-city';
import SearchBox from './SearchBox/SearchBox';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';
import publicAPi from '~/apis/publicAPI';

export default component$(() => {

  useStyles$(styles);

  const store = useStore({
    scrollPosition: 0,
  });
  const categories = useStore({
    body:[]
  });
  useClientEffect$(() => {
    (async () => {
      await publicAPi.getEnabledCategorie().then(body => {
        categories.body = body.data;
      });
    })();
  }, []);
  useClientEffect$(() => {
    window.addEventListener('scroll', () => {
      store.scrollPosition = window.scrollY
    })
  })

  const callAuthModal = $(() => {
    const el = document.querySelector('#auth-modal') as HTMLDivElement
    el.classList.add('active')
  })

  return (
    <nav class={store.scrollPosition >= 80 ? 'scrolling' : ''}>
      <div id="nav-content" >
        <Link href="/">Now Space0</Link>
        <div id="menu-list">
          {categories.body.map(category => {
            return (<Link href={'/search/' + category.cate_id + '/1'} >{category.cate_name}</Link>)
          })}
        </div>
        <SearchBox />
        <Link href="/cart" id="your-cart">
          <CartIcon />
          <div class="cart-count">2</div>
        </Link>
        <button onClick$={callAuthModal}>
          <UserIcon />
        </button>
      </div>
    </nav>
  );
});
