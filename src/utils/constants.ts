import { getLocalStorage } from './helpers/localstorage';

const ANIM_TRANSITION = {
  transition: { duration: 0.4, type: 'spring' },
};

const LOCAL_STORAGE_TOKEN = 'telkompde/token';
const LOCAL_STORAGE_USER = 'telkompde/user';

const ROLES = [
  { value: '1', label: 'Headmaster' },
  // { value: '2', label: 'Teacher' },
  // { value: '3', label: 'Student' },
  { value: '4', label: 'Vocation Net' },
  { value: '5', label: 'Telkom group' },
  { value: '6', label: 'Ministry' },
  { value: '7', label: 'Superadmin' },
  { value: '99', label: 'Misc' },
];

const API_URL = 'https://portal.kandangkomunal.com/api/v1/pde';

const HEADER_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==',
  },
};

const LOGGED_CONFIG = {
  headers: {
    Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
  },
};

const MARKETPLACE_CONFIG = {
  'Content-type':'multipart/form-data',
  headers: {
    Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
  },
}

const BLOG_CONFIG = {
  'Content-type':'multipart/form-data',
  headers: {
    Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
  },
}

export {
  API_URL,
  HEADER_CONFIG,
  LOGGED_CONFIG,
  MARKETPLACE_CONFIG,
  BLOG_CONFIG,
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USER,
  ANIM_TRANSITION,
  ROLES,
};
