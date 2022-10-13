import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import ProductDetails from '~/components/ProductDetails/ProductDetails';
import Layout from '~/layouts/Layout';
export default component$(() => {
    return (
        <>
            <Layout>
                <ProductDetails />
            </Layout>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Product Details',
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
