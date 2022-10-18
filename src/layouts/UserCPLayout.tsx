import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Auth from '~/components/Auth/Auth';
import Nav from '~/components/Nav/Nav';
import { Link } from '@builder.io/qwik-city'
import styles from './usercp-layout.sass'

export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <Nav />
            <div id="content">
                <div id="usercp">
                    <div id="mini-hero">
                        <img src="https://i.imgur.com/tJTTgfT.jpg" />
                        <div id="mini-hero-content">
                            User Control Panel
                        </div>
                    </div>
                    <div id="usercp-wrapper">
                        <div id="usercp-nav">
                            <ul id="usercp-nav-content">
                                <li>
                                    <Link href="/usercp">
                                        <span>Change Password</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/usercp/selling">
                                        <span>Selling A Product</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div id="usercp-content">
                            <Slot />
                        </div>
                    </div>
                </div>
            </div>
            <Auth />
        </>
    );
});
