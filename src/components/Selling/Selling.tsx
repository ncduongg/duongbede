import { component$, useStyles$ } from '@builder.io/qwik';
import CustomQuantityInput from '../CustomQuantityInput/CustomQuantityInput';
import CustomSelectOption from '../CustomSelectOption/CustomSelectOption';
import styles from './selling-page.sass'
export default component$(() => {
    useStyles$(styles)
    return (
        <div id="selling-page">
            <div id="selling-inputs">
                <label>
                    <input type="text" placeholder='Thumbnail link' />
                </label>
                <label>
                    <input type="text" placeholder='Product Name' />
                </label>
                <CustomQuantityInput />
            </div>
            <CustomSelectOption />
            <textarea placeholder="Accounts list (1 line / 1 account)">

            </textarea>
        </div>
    )
})