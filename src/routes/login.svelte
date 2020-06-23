<script>
  import TextInput from '../components/common/TextInput.svelte';
  import Button from '../components/common/Button.svelte';

  let username = '';
  let password = '';

  const handleSubmit = async () => {};
</script>

<div class="flex flex-1 items-center justify-center">
  <form on:submit|preventDefault={handleSubmit}>
    <TextInput name="username" label="Username (email)" value={username} />
    <TextInput name="password" label="password" value={password} />

    <button class="rounded bg-green-500 hover:bg-green-600 text-white py-1 px-5 mt-2 w-full">submit</button>
    <Button type="button" text="LOGIN" />
    <Button to="/join" type="button" text="JOIN" />
  </form>
</div>

<style lang="scss">
  form {
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
  }
</style>
