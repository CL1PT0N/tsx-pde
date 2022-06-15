import axios from 'axios';
import {
  API_URL,
  BLOG_CONFIG,
  LOCAL_STORAGE_USER,
  LOGGED_CONFIG,
} from '../../../utils/constants';
import FormData from 'form-data';
import {
  getCurrentDate,
  getCurrentTime,
} from '../../../utils/helpers/getCurrentDate';
import { getLocalStorage } from '../../../utils/helpers/localstorage';

const BLOG_URL = `${API_URL}/blogs`;
const CURRENT_USER = getLocalStorage(LOCAL_STORAGE_USER);

export async function fetchBlogs() {
  try {
    const blogsData = await axios.get(BLOG_URL, LOGGED_CONFIG);
    const res = blogsData.data.data;
    return Promise.resolve(res);
  } catch (error: any) {
    return Promise.resolve([]);
  }
}


export async function postBlog(payload: any) {
  let user = [
    {"userId":CURRENT_USER.userId, "name":CURRENT_USER.name}
  ]

  let form = new FormData();
  form.append('newsTitle', payload.newsTitle);
  form.append('description', payload.description);
  form.append('blogImage', payload.image);

  form.append('time', getCurrentTime());
  form.append('date', getCurrentDate());
  form.append('user', JSON.stringify(user));

  // form.append('userId', CURRENT_USER.userId);
  // form.append('name', CURRENT_USER.name);

  console.log(form);

  try {
    await axios.post(BLOG_URL, form, BLOG_CONFIG);
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
