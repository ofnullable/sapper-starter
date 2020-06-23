<script>
  import { css } from 'emotion';

  export let name;
  export let label;
  export let value;

  const inputWrapper = css`
    display: flex;
    flex-direction: column;
    input {
      padding: 0.25rem 0.5rem;
    }

    & + & {
      margin-top: 0.5rem;
    }
  `;
</script>

<div class={[inputWrapper].join(' ')}>
  <label for={name}>{label}</label>
  <input id={name} class="border border-gray-200 rounded" bind:value />
</div>

<style>
  label {
  }
</style>
