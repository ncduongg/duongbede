import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './bid-ribbon.sass';
import { BidIcon } from './BidIcon';
import { Link } from '@builder.io/qwik-city';
export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="bid-ribbon">
            <div class="ribbon-icon">
                <BidIcon />
            </div>
            <p class="ribbon-promo-text">Wanna Get Better Accounts w/ Better Quality?</p>
            <Link href="#!" class="to-bid">Go To Bid Palace</Link>
        </div>
    );
});
