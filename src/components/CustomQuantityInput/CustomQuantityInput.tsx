import { $, component$, useStore, useStyles$ } from "@builder.io/qwik";
import styles from './custom-quantity-input.sass'
export default component$(() => {
    useStyles$(styles)

    const store = useStore({
        productQuantity: 1
    })

    const add = $(() => {
        store.productQuantity++
    })

    const substract = $(() => {
        store.productQuantity--
    })

    return (

        <div class="custom-quantity-input">
            <button onClick$={substract} class="substract">-</button>
            <input value={store.productQuantity} type="number" class="quantity-input" />
            <button onClick$={add} class="add">+</button>
        </div>
    )
})