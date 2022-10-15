import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Cart from '~/components/Cart/Cart';
import Layout from '~/layouts/Layout';


export default component$(() => {

    return (
        <>
            <Layout>
                <Cart />
            </Layout>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Your Cart',
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
