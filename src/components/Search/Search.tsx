// @ts-nocheck
import { component$, useClientEffect$, useStore, useStyles$, useWatch$} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import publicAPi from '~/apis/publicAPI';
import ProductsList from './ProductsList/ProductsList';
import styles from './search.sass';
import SearchFilter from './SearchFilter/SearchFilter';

export default component$(() => {
    useStyles$(styles)

    const route = useLocation()
    const category = useStore({
        categoryItem: {},
        idCategory: route.params.category_id,
    });

    useWatch$(({ track }) => {
    track(() => route.params.category_id);
    return () => {        
           (async () => {
               const idCategory = route.params.category_id;               
            await publicAPi.getCategory(idCategory).then(body => {
                category.categoryItem = body.data[0];
            })
        })()
       }
  });
    useClientEffect$(() => {
        (async () => {
            const idCategory = route.params.category_id;
            await publicAPi.getCategory(idCategory).then(body => {
                category.categoryItem = body.data[0];
            })
        })()
    },{eagerness:'idle'});
    useClientEffect$(() => {
        document.title = `Searching ${category.categoryItem.cate_name} on Now Space0`
    })

    return (
        <div id="search-page">
            <div id="finding">
                <img src="https://wallpaperaccess.com/full/128744.jpg" />
                <div id="finding-keyword">
                    Your're searching <span id="keyword">"{category.categoryItem.cate_name}"</span> on <span>Now Space0</span>
                </div>
            </div>
            <input type="text" /> 
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