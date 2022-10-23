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
    menuItems: []
  });
  
  useClientEffect$(async () => {
    window.addEventListener('scroll', () => {
      store.scrollPosition = window.scrollY
    })

    await publicAPi.getEnabledCategorie().then(body => {
      store.menuItems = body.data;
    });
  }, { eagerness: 'load' });

  const callAuthModal = $(() => {
    const el = document.querySelector('#auth-modal') as HTMLDivElement
    el.classList.add('active')
  })

  return (
    <nav class={store.scrollPosition >= 80 ? 'scrolling' : ''}>
      <div id="nav-content" >
        <Link href="/">Now Space0</Link>
        <div id="menu-list">
          {store.menuItems.map(item => {
            return (
              <Link href={'/search/' + item.cate_id + '/1'} >{item.cate_name}</Link>
            )
          })
          }
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
