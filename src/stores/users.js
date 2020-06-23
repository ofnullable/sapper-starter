import { writable } from 'svelte/store';
import { loadUsers } from '../api/users';

function createUsersStore() {
  const { subscribe, set, update } = writable({
    data: [],
    isLoading: false,
    error: '',
  });

  return {
    subscribe,
    request() {
      update((prev) => ({
        ...prev,
        isLoading: true,
        error: '',
      }));
    },
    success(data) {
      update((prev) => ({
        ...prev,
        data,
        isLoading: false,
      }));
    },
    failure(error) {
      update((prev) => ({
        ...prev,
        error,
        isLoading: false,
      }));
    },
    async loadUsers() {
      this.request();
      try {
        const { data } = await loadUsers();
        this.success(data);
        return data;
      } catch (e) {
        console.error(e);
        this.failure(e);
      }
    },
  };
}

export const users = createUsersStore();
