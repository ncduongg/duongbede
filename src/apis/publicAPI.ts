//@ts-nocheck
//dùng cái dòng này thì không check strict nữa :)) đỡ báo error nếu a thấy khó chịu
import axiosClients from "./axiosClient";
const publicAPi = () => {
    getCategory = (idCategory) => {
        axiosClients.get('/api/public/category/' + idCategory).then().catch();
    }
    getProduct = (idProduct) => {
        axiosClients.get('/api/public/product/' + idProduct).then().catch();
    }
}
export default publicAPi;