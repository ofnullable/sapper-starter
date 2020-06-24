import api from './config';

export const registerUser = (details) => {
  return api.post('/users', details);
};

export function loadUsers() {
  return api.get('/users');
}

export function loadUser(id) {
  return api.get(`/users/${id}`);
}
