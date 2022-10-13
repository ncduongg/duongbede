import { component$, useClientEffect$ } from '@builder.io/qwik';
import { DocumentHead, useDocumentHead } from '@builder.io/qwik-city';
import Layout from '~/layouts/Layout';


export default component$(() => {
    useClientEffect$(() => {

    })
    return (
        <>
            <Layout>
                Search page
            </Layout>
        </>
    );
});

export const head: DocumentHead = {
    title: 'Searching',
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
