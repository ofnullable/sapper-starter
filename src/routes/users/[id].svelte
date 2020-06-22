<script context="module">
  import { loadUser } from '../../api/users';

  export async function preload(page) {
    const { data } = await loadUser(page.params.id);

    return { user: data };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  export let user;
</script>

<h1>{user.name}</h1>
<p in:fade>
  <span>{user.id}</span>
  <span>{user.email}</span>
  <span>{user.username}</span>
</p>
