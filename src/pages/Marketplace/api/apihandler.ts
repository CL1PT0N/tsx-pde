import axios from 'axios';
import FormData from 'form-data'
import {API_URL, LOGGED_CONFIG, MARKETPLACE_CONFIG} from '../../../utils/constants'

const MARKETPLACE_URL = `${API_URL}/products`

export async function fetchProducts(){
  try{
    const productsData = await axios.get(MARKETPLACE_URL, LOGGED_CONFIG);
    const res = productsData.data.data
    return Promise.resolve(res)
  }catch(error:any){
    return Promise.resolve([])
  }
}

export async function postProducts(payload:any) {
  let form = new FormData();
  form.append('image',payload.image)
  form.append('name', payload.name)
  form.append('price', payload.price)
  form.append('description', payload.description)
  form.append('status', payload.status)
  
  // console.log(form)

  try{
    await axios.post(MARKETPLACE_URL, form, MARKETPLACE_CONFIG)
    return Promise.resolve({
      status: 'success',
      message: 'Data telah berhasil ditambah',
    });
  } catch (error: any) {
    return Promise.resolve({
      status: 'failed',
      message: error.response.data.message,
    });
  }
}

export async function putProducts(param:string, payload:any) {
  let form = new FormData();
  form.append('image',payload.image)
  form.append('name', payload.name)
  form.append('price', payload.price)
  form.append('description', payload.description)
  form.append('status', payload.status)
  
  // console.log(form)
  console.log(payload)

  try{
    await axios.put(`${MARKETPLACE_URL}/${param}`, form, MARKETPLACE_CONFIG)
    return Promise.resolve({
      status: 'success',
      message: 'Data telah berhasil ditambah',
    });
  } catch (error: any) {
    return Promise.resolve({
      status: 'failed',
      message: error.response.data.message,
    });
  }
}

export async function deleteProducts(param: string) {
  console.log(param)
  try {
    await axios.delete(`${MARKETPLACE_URL}/${param}`, LOGGED_CONFIG);
    return Promise.resolve({
      status: 'success',
      message: 'Data telah dihapus',
    });
  } catch (error: any) {
    console.log(error)
    return Promise.resolve({
      status: 'error',
      message: error.response.data.message,
    });
  }
}
