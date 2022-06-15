import { LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_USER } from '../constants';
import { clearLocalStorage, getLocalStorage } from './localstorage';

function isLogged() {
  const storage = getLocalStorage(LOCAL_STORAGE_USER);
  const token = getLocalStorage(LOCAL_STORAGE_TOKEN);

  if (!storage && !token) {
    return false;
  }
  
  const tokenExpired = isExpired();

  return storage && token && tokenExpired;
}

function isExpired() {
  const user = getLocalStorage(LOCAL_STORAGE_USER);

  const tokenDuration = user.expiresIn;

  const startDate = user.startIn;
  const endDate = startDate + tokenDuration;

  const currentDate = new Date().getTime() / 1000;

  if (currentDate > endDate) {
    alert('token expired!');
    clearLocalStorage();
  }

  return endDate > currentDate;
}

export { isLogged };
