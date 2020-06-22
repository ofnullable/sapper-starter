import api from './config';

export function loadUsers() {
  return api.get('/users');
}

export function loadUser(id) {
  return api.get(`/users/${id}`);
}

export function getMember() {}
