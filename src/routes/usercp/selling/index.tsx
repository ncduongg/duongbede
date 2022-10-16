import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import UserCPLayout from '~/layouts/UserCPLayout';
import Selling from '~/components/Selling/Selling'

export default component$(() => {

    return (
        <>
            <UserCPLayout>
                <Selling />
            </UserCPLayout>
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
