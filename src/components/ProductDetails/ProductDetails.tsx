import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './product-details.sass';
import CustomSelectOption from '../CustomSelectOption/CustomSelectOption'; //ok fixed vl
import CustomNumbInput from '../CustomNumbInput/CustomNumbInput';
import Note from './Note/Note';
import { CartIcon } from './CartIcon';

export default component$(() => {

    useStylesScoped$(styles);
    return (
        <div id="product-page">
            <div id="product-cover">
                <img src="https://i.imgur.com/JlgwUWS.png" alt="" />
            </div>
            <div id="product-details-wrapper">
                <div id="main-details">
                    <div id="product-thumb">
                        <img src="https://i.imgur.com/kfrk0V9.png" alt="" />
                    </div>

                    <div id="purchase-panel">
                        <h1 id="product-title">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </h1>
                        <div id="sub-info">
                            <p id="status" class="in-stock">In Stock</p>
                            <p>1 User</p>
                            <p>Streaming</p>
                            <p>Entertainment</p>
                        </div>
                        <div id="purchase-options">
                            <CustomSelectOption />
                            <CustomNumbInput />
                        </div>
                        <div id="product-price">
                            <p id="price-before">260,000 VNĐ</p>
                            <p id="sale-percent">-70%</p>
                            <p id="main-price">80,000 VNĐ</p>
                        </div>
                        <div id="purchase-buttons">
                            <button>
                                <CartIcon />
                            </button>
                            <button>
                                Buy Now
                            </button>
                        </div>
                    </div>


                    <div id="product-description">
                        <Note />

                        <div id="description">
                            <strong>Product Description</strong>
                            <div id="description-grid">
                                <div id="text-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque harum impedit,
                                    eaque non iste neque optio accusamus, magnam placeat quasi vero, voluptatibus accusantium fuga molestias fugiat.
                                    Dolorem eaque iusto aliquid reprehenderit dolor dolorum ipsam.
                                    Omnis minima natus quam voluptatum odit aspernatur molestias esse optio?
                                </div>
                                <div id="specs">
                                    <p>Account Type</p>
                                    <i>Netflix - 1 User</i>
                                    <p>Subscription</p>
                                    <i>Premium</i>
                                    <p>Number of Devices</p>
                                    <i>1</i>
                                    <p>Warranty Duration</p>
                                    <i>30 days</i>
                                </div>
                            </div>
                            <div id="demo-images">
                                <strong>Demo Images for Product</strong>
                                <div id="images-list" class="expand">
                                    <img src="https://i.imgur.com/WS5Pbnw.png" alt="" />
                                    <img src="https://i.imgur.com/vKWI67Y.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
