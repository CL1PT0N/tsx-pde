import axios from "axios";
import { API_URL, LOGGED_CONFIG } from "../../../utils/constants";

const LMS_URL = `${API_URL}/LMS/class`

export async function fetchCoursesId(params:string) {
  // console.log(`${LMS_URL}/${params}`)
  try{
    const currentClass = await axios.get(`${LMS_URL}/${params}`,LOGGED_CONFIG)
    const res = currentClass.data.data
    return Promise.resolve(res)
  } catch(error:any) {
    return Promise.resolve({})
  }
}