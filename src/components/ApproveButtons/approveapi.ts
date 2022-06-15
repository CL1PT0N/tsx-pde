import axios from "axios";
import { API_URL, LOGGED_CONFIG } from "../../utils/constants";

const APPROVE_URL = `${API_URL}/submission/approve/`

export async function approveSub(param:string){
  try{
    const form = {approve:true}
    await axios.put(`${APPROVE_URL}${param}`, form, LOGGED_CONFIG)
    return Promise.resolve({
      status: 'success',
      message: 'Data telah berhasil di approve',
    });
  } catch (error: any) {
    return Promise.resolve({
      status: 'error',
      message: error.response.data.message,
    });
  }
}

export async function declineSub(param:string){
  try{
    const form = {approve:false}
    await axios.put(`${APPROVE_URL}${param}`, form, LOGGED_CONFIG)
    return Promise.resolve({
      status: 'success',
      message: 'Data telah berhasil di decline',
    });
  } catch (error: any) {
    return Promise.resolve({
      status: 'error',
      message: error.response.data.message,
    });
  }
}