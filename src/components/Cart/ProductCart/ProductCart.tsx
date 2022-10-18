import { $, component$, useStyles$ } from '@builder.io/qwik';
import CustomQuantityInput from '~/components/CustomQuantityInput/CustomQuantityInput';
import styles from './product-cart.sass'
export default component$(() => {
    useStyles$(styles)


    const removeThis = $((e: Event) => {
        const el = e.target as HTMLButtonElement
        const productWrapper = el.closest('.product') as HTMLDivElement
        productWrapper?.remove()
    })

    return (
        <div class="product-cart">
            <div class="product-thumb">
                <img loading="lazy" src="https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/Divine-Shop-Grammarly-Premium-1-Nam-35103.jpg?hash=1658742859" alt="Tài khoản Grammarly Premium 1 năm" />
            </div>
            <div class="product-info">
                <p class="product-title">Grammarly Premium 1 Year</p>
                <div class="product-price">
                    <div class="main-price">490,000 VNĐ</div>
                    <div class="price-before">1,500,000 VNĐ</div>
                </div>
                <CustomQuantityInput /> 
                <div class="status-action">
                    <p class="status in-stock">In stock</p>
                    <button onClick$={removeThis} class="remove">Delete</button>
                </div>
            </div>
        </div>
    )
})