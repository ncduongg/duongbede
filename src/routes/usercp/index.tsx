import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import UserCP from '~/components/UserCP/UserCP';
import Layout from '~/layouts/Layout';


export default component$(() => {

    return (
        <>
            <Layout>
                <UserCP />
            </Layout>
        </>
    );
});

export const head: DocumentHead = {
    title: 'User Contron Panel',
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
