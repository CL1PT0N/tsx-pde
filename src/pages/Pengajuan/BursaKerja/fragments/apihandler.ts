import axios from 'axios';
import { API_URL, LOGGED_CONFIG } from '../../../../utils/constants';

const JOBS_URL = `${API_URL}/submission/job`;

export async function fetchJobs() {
  // console.log(LOGGED_CONFIG)
  try {
    const jobsdata = await axios.get(JOBS_URL, LOGGED_CONFIG);
    const res = jobsdata.data.data;
    // console.log(res)

    return Promise.resolve(res);
  } catch (error: any) {
    console.log(error);
    return Promise.resolve([]);
  }
}

export async function postJobs(payload: any) {
  try {
    await axios.post(JOBS_URL, payload, LOGGED_CONFIG);
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

export async function putJobs(param: string, payload: any) {
  try {
    await axios.put(`${JOBS_URL}/${param}`, payload, LOGGED_CONFIG);
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

export async function deleteJobs(param: string) {
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
