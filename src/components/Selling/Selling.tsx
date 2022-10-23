import { component$, useStyles$ } from '@builder.io/qwik';
import CustomQuantityInput from '../CustomQuantityInput/CustomQuantityInput';
import CustomSelectOption from '../CustomSelectOption/CustomSelectOption';
import styles from './selling-page.sass'
export default component$(() => {
    useStyles$(styles)
    return (
        <div id="selling-page">
            <div class="selling-inputs">
                <label>
                    <input type="text" placeholder='Thumbnail link' />
                </label>
                <label>
                    <input type="text" placeholder='Product Name' />
                </label>
                <CustomQuantityInput />
            </div>
            <CustomSelectOption />
            <div class="selling-inputs">
                <label>
                    <input type="text" placeholder='Product Price' />
                </label>
                <label>
                    <input type="text" placeholder='Product Sale Price' />
                </label>
            </div>
            <textarea placeholder="Accounts list (1 line / 1 account)">

            </textarea>
            <div id="selling-history">
                <strong>Accounts uploaded</strong>
                <div class="product-uploaded">
                    <div class="product-thumbnail">
                        <img src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Kh%C3%A1c/Divine-Shop-Grammarly-Premium-1-Nam-35103.jpg?hash=1658742859" alt="" />
                    </div>
                    <div class="product-info">
                        <div class="title-duration">
                            <strong class="product-title">Product title</strong>
                            <p class="product-duration">(3 Months)</p>
                        </div>
                        <div class="product-price">
                            <strong class="main-price">100,000 VNĐ</strong>
                            <p class="price-before">200,000 VNĐ</p>
                        </div>
                        <div class="product-quantity">100 Accounts</div>
                    </div>
                </div>
                <div class="product-uploaded">
                    <div class="product-thumbnail">
                        <img src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Kh%C3%A1c/Divine-Shop-Grammarly-Premium-1-Nam-35103.jpg?hash=1658742859" alt="" />
                    </div>
                    <div class="product-info">
                        <div class="title-duration">
                            <strong class="product-title">Product title</strong>
                            <p class="product-duration">(3 Months)</p>
                        </div>
                        <div class="product-price">
                            <strong class="main-price">100,000 VNĐ</strong>
                            <p class="price-before">200,000 VNĐ</p>
                        </div>
                        <div class="product-quantity">100 Accounts</div>
                    </div>
                </div>
            </div>
        </div>
    )
})