import { component$, useStore, useStyles$} from "@builder.io/qwik";
import styles from './cart.sass'
import EmptyIcon from "./EmptyIcon";
import ProductCart from "./ProductCart/ProductCart";

export default component$(() => {
    useStyles$(styles)

    const store = useStore({
        empty: false,
    })


    return (
        <div id="cart-page">
            <div id="mini-hero">
                <img src="https://i.imgur.com/tJTTgfT.jpg" />
                <div id="mini-hero-content">
                    Your Cart
                </div>
            </div>
            <div id="cart-content">
                <div id="empty" class={store.empty ? 'block' : 'hidden'}>
                    <p>Your cart is empty!</p>
                    <EmptyIcon />
                </div>
                <div id="not-empty" class={!store.empty ? 'block' : 'hidden'}>
                    <p id="product-count">You have 2 product(s)</p>

                    <div id="products-list">
                        <ProductCart />
                        <ProductCart />
                    </div>
                </div>
            </div>
        </div>
    )
})