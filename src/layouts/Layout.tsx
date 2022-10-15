import { component$, Slot } from '@builder.io/qwik';
import Auth from '~/components/Auth/Auth';
import Nav from '~/components/Nav/Nav';
export default component$(() => {

  return (
    <>
      <Nav />
      <div id="content">
        <Slot />
      </div>
      <Auth />
    </>
  );
});
