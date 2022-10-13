import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Layout from '../layouts/Layout';
import Home from '~/components/Home/Home';
export default component$(() => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Now Space0 - Phần mềm bản quyền',
  links: [
    {
      href: "jokerdarkknight",
    },
    {
      prefetch: "Hello"
    }
  ],
  meta: [{
    name: "content",
    content: "content",
    property: "property",
    httpEquiv: "hello",
    
  }]
};
