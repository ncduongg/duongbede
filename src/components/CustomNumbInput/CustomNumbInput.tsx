import { component$, useStylesScoped$, useStore} from '@builder.io/qwik';
import styles from './custom-numb-input.sass'
export default component$(() => {
    useStylesScoped$(styles)
    const store = useStore({
        quantity: 1 as string | number
    })
    return (
        <>
            <input type="number" value={store.quantity} class="custom-numb-input" min="1" />
        </>
    );
})