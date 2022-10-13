import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './home-hero.sass';
export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="home-hero">
            <img src="https://i.imgur.com/nTQ3IR8.jpg" alt="" id="hero-bg"/>
            <div id="home-hero-content">
                <img src='https://i.imgur.com/2AIY0wi.png' alt="" id="home-logo" />
                <h1>Now Space0</h1>
                <h3>Now Space0 - Phần mềm bản quyền</h3>
                <h6>Coded by <strong>DuongNC Bê Đê</strong></h6>
            </div>
        </div>
    );
});
