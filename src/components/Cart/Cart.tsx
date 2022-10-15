import { component$, useStore, useStyles$, $ } from "@builder.io/qwik";
import styles from './cart.sass'
import EmptyIcon from "./EmptyIcon";

export default component$(() => {
    useStyles$(styles)

    const store = useStore({
        empty: false,
        productQuantity: 1
    })

    const add = $(() => {
        store.productQuantity++
    })

    const substract = $(() => {
        store.productQuantity--
    })

    const removeThis = $((e: Event) => {
        const el = e.target as HTMLButtonElement
        const productWrapper = el.closest('.product') as HTMLDivElement
        productWrapper?.remove()
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
                        <div class="product">
                            <div class="product-thumb">
                                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/Divine-Shop-Grammarly-Premium-1-Nam-35103.jpg?hash=1658742859" alt="Tài khoản Grammarly Premium 1 năm" />
                            </div>
                            <div class="product-info">
                                <p class="product-title">Grammarly Premium 1 Year</p>
                                <div class="product-price">
                                    <div class="main-price">490,000 VNĐ</div>
                                    <div class="price-before">1,500,000 VNĐ</div>
                                </div>
                                <div class="product-quantity">
                                    <button onClick$={substract} class="substract">-</button>
                                    <input value={store.productQuantity} type="number" class="quantity-input" />
                                    <button onClick$={add} class="add">+</button>
                                </div>
                                <div class="status-action">
                                    <p class="status in-stock">In stock</p>
                                    <button onClick$={removeThis} class="remove">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <div class="product-thumb">
                                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/Divine-Shop-Grammarly-Premium-1-Nam-35103.jpg?hash=1658742859" alt="Tài khoản Grammarly Premium 1 năm" />
                            </div>
                            <div class="product-info">
                                <p class="product-title">Grammarly Premium 1 Year</p>
                                <div class="product-price">
                                    <div class="main-price">490,000 VNĐ</div>
                                    <div class="price-before">1,500,000 VNĐ</div>
                                </div>
                                <div class="product-quantity">
                                    <button onClick$={substract} class="substract">-</button>
                                    <input value={store.productQuantity} type="number" class="quantity-input" />
                                    <button onClick$={add} class="add">+</button>
                                </div>
                                <div class="status-action">
                                    <p class="status in-stock">In stock</p>
                                    <button onClick$={removeThis} class="remove">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})