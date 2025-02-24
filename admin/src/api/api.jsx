import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getProduct = (token) => api.get('/product',{
  headers:{
    Authorization:`Bearer ${token}`
}});
// export const getProductById = (id,token) => api.get(`/product/${id}`,{
//   headers:{
//     Authorization:`Bearer ${token}`
// }});;
export const createProduct = (data, token) => api.post('/product', data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
export const updateProduct = (id, data,token) => api.put(`/product/${id}`, data,{
  headers:{
    Authorization:`Bearer ${token}`
  }
});
export const deleteProduct= (id,token) => api.delete(`/product/${id}`,{
  headers:{
    Authorization:`Bearer ${token}`
  }
});
export const adminLogin = data => api.post('/auth/login/admin', data)
export const adminProfile = token => api.get('/auth/profile/admin', {
  headers:{
    Authorization:`Bearer ${token}`
  }
})
export default api;