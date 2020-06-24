<script>
  import TextInput from '../components/common/TextInput.svelte';
  import Button from '../components/common/Button.svelte';

  let username = '';
  let password = '';

  const handleSubmit = async (e) => {
    console.log(e);
  };
</script>

<div class="flex flex-1 items-center justify-center">
  <form class="px-4 py-12 lg:px-8 lg:py-24" on:submit|preventDefault={handleSubmit}>
    <TextInput name="username" type="email" label="Username (email)" value={username} required />
    <TextInput name="password" type="password" label="password" value={password} required />

    <Button classes="bg-green-500 hover:bg-green-600 text-white w-full" type="submit" text="LOGIN" />
    <Button classes="bg-gray-100 hover:bg-gray-200 w-full" to="/join" type="button" text="JOIN" />
  </form>
</div>

<style lang="scss">
  form {
    width: 100%;
    margin: 0 auto;
    max-width: 480px;
    border: 1px solid #e4e5e8;
    border-radius: 0.25rem;
    box-shadow: 0 3px 10px 0 rgba(66, 66, 66, 0.05);
  }
</style>
