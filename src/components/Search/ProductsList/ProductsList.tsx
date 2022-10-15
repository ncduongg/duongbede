import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from './products-list.sass'
export default component$(() => {
    useStylesScoped$(styles)
    return (
        <div id="products-list">
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
            <Link href="/product/1">
                <div class="product">
                    <div class="product-thumb">
                        <div class="sale-percent">-70%</div>
                        <img src="https://i.imgur.com/TUkITyi.png" alt="" />
                        <div class="product-price">
                            <div class="price-before">260K</div>
                            <div class="main-price">80K</div>
                        </div>
                        <button class="action">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                    <g fill="#fff">
                                        <circle cx="18" cy="56" r="6"></circle>
                                        <circle cx="55" cy="56" r="6"></circle>
                                        <path fill="#fff" d="M51,28c-7.732,0-14-6.268-14-14c0-0.338,0.027-0.668,0.05-1H13.373l-1.395-9.297C11.831,2.724,10.99,2,10,2 H1v4h7.278l5.744,38.297C14.169,45.276,15.01,46,16,46h40c0.974,0,1.806-0.701,1.971-1.66l3.664-21.249 C59.067,26.092,55.259,28,51,28z"></path> <path d="M51,2c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S57.627,2,51,2z M56,15h-4v4 c0,0.552-0.448,1-1,1s-1-0.448-1-1v-4h-4c-0.552,0-1-0.448-1-1s0.448-1,1-1h4V9c0-0.552,0.448-1,1-1s1,0.448,1,1v4h4 c0.552,0,1,0.448,1,1S56.552,15,56,15z"></path>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <p class="product-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </Link>
           
        </div>
    )
})