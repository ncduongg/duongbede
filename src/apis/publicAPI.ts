//@ts-nocheck
import axiosClients from './axiosClient';
const publicAPi = {
  getCategory(idCategory) {
    return axiosClients.get('/api/public/category/' + idCategory);
  },
  getProduct(idProduct) {
    return axiosClients.get('/api/public/product/' + idProduct);
  },
  getEnabledCategorie() {
    return axiosClients.get('/api/public/categories');
  },
};
export default publicAPi;
//thằng này mới thỉnh thoảng lỗi hơi dị, em follow mấy cái cộng đồng của nó toàn khoe performace :)) stablibity thì như clg v :)))
