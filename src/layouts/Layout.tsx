import { component$, Slot } from '@builder.io/qwik';
import Nav from '~/components/Nav/Nav';

export default component$(() => {
  return (
    <>
      <Nav />
      <div id="content">
        <Slot />
      </div>
    </>
  );
});
