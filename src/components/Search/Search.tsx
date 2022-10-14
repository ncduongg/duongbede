import { component$, useClientEffect$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import ProductsList from './ProductsList/ProductsList';
import styles from './search.sass';
import SearchFilter from './SearchFilter/SearchFilter';

export default component$(() => {
    useStyles$(styles)

    const route = useLocation()

    useClientEffect$(() => {
        document.title = `Searching ${route.params.keyword} on Now Space0`
    })

    return (
        <div id="search-page">
            <div id="finding">
                <img src="https://wallpaperaccess.com/full/128744.jpg" />
                <div id="finding-keyword">
                    Bạn đang tìm kiếm <span id="keyword">"{route.params.keyword}"</span> trên <span>Now Space0</span>
                </div>
            </div>
            <div id="search-content">
                <div id="search-filter">
                    <SearchFilter />
                    <SearchFilter />
                    <SearchFilter />
                </div>
                <ProductsList />
            </div>
        </div>
    )
})