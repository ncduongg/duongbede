import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Layout from '~/layouts/Layout';


export default component$(() => {

    return (
        <>
            <Layout>
            </Layout>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Selling Your Product',
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
