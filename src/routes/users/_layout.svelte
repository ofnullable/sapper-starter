<script context="module">
  import { users } from '../../stores/users';

  export async function preload() {
    const data = await users.loadUsers();
    return { data };
  }
</script>

<script>
  import { fade } from 'svelte/transition';
  export let data;
</script>

<svelte:head>
  <title>users</title>
</svelte:head>

<h1 class="text-5xl">users page</h1>
<ul in:fade>
  {#each data as user}
    <li>
      <a href="/users/{user.id}">
        <p>{user.name}</p>
      </a>
    </li>
  {/each}
</ul>

<slot />

<style lang="scss">
  ul {
    list-style: none;
    p {
      padding: 0.5rem 0;
    }
  }
</style>
