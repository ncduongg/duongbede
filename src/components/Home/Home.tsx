import { component$, useStylesScoped$ } from '@builder.io/qwik';
import BidRibbon from './BidRibbon/BidRibbon';
import styles from './home.sass';
import HomeCategory from './HomeCategory/HomeCategory';
import HomeHero from './HomeHero/HomeHero';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="home">
            <HomeHero />
            <div id="home-content">
                <HomeCategory title={'Education Accounts'} useBg={false} categoryBg="" />
                <BidRibbon />
                <HomeCategory title={'Games Accounts'} useBg={true} categoryBg={'https://i.imgur.com/kWPtY1u.png'} />
            </div>
        </div>
    );
});
