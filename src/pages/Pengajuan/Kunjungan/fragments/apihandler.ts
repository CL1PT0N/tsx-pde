import axios from 'axios'
import { API_URL, LOGGED_CONFIG } from '../../../../utils/constants'

const IND_URL = `${API_URL}/submission/industrial-visit`

export async function fetchInd() {
  try {
    const inddata = await axios.get(IND_URL, LOGGED_CONFIG);
    const res = inddata.data.data;
    // console.log(res)

    return Promise.resolve(res);
  } catch (error: any) {
    console.log(error);
    return Promise.resolve([]);
  }
}

export async function postInd(payload:any) {
  try{
    await axios.post(IND_URL,payload,LOGGED_CONFIG)
    return Promise.resolve({
      status: 'success',
      message: 'Data telah berhasil ditambah',
    });
  } catch (error: any) {
    return Promise.resolve({
      status: 'error',
      message: error.response.data.message,
    });
  }
}

export async function putInd(params:string, payload:any) {
  try{
    await axios.put(`${IND_URL}/${params}`,payload,LOGGED_CONFIG)
    return Promise.resolve({
      status: 'success',
      message: 'Data telah berhasil ditambah',
    });
  } catch (error: any) {
    return Promise.resolve({
      status: 'error',
      message: error.response.data.message,
    });
  }
}

export async function deleteInd(param: string) {
  // console.log(`${JOBS_URL}/${param}`)
  try {
    await axios.delete(`${API_URL}/submission/${param}`, LOGGED_CONFIG);
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
