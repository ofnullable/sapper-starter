<script>
  import { registerUser } from '../api/users';
  import Button from '../components/common/Button.svelte';
  import TextInput from '../components/common/TextInput.svelte';

  let name = '';
  let username = '';
  let password = '';
  let passwordCheck = '';

  $: loading = false;

  const handleSubmit = async () => {
    loading = true;
    const res = await registerUser({ name, username, password });

    // TODO: redirect referrer page or index page

    loading = false;
  };
</script>

{#if loading}
  <div class="loading">wait...</div>
{/if}

<div class="flex flex-1 items-center justify-center">
  <form class="px-4 py-12 lg:px-8 lg:py-24" on:submit|preventDefault={handleSubmit}>
    <TextInput name="name" label="Name" value={name} required />
    <TextInput name="username" type="email" label="Username (email)" value={username} required />
    <TextInput name="password" type="password" label="Password" value={password} required />
    <TextInput name="passwordCheck" type="password" label="Password check" value={passwordCheck} required />

    <Button classes="bg-green-500 hover:bg-green-600 text-white w-full" type="submit" text="JOIN" />
    <Button classes="bg-gray-100 hover:bg-gray-200 w-full" to="/login" type="button" text="Already have an ID?" />
  </form>
</div>

<style lang="scss">
  .loading {
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form {
    width: 100%;
    margin: 0 auto;
    max-width: 480px;
    border: 1px solid #e4e5e8;
    border-radius: 0.25rem;
    box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);
  }
</style>
