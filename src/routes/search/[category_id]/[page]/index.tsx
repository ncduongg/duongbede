import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Search from '~/components/Search/Search';
import Layout from '~/layouts/Layout';


export default component$(() => {

    return (
        <>
            <Layout>
                <Search />
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
