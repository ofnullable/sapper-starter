<script>
  import { css } from 'emotion';

  export let name;
  export let type = 'text';
  export let label;
  export let value;
  export let required;

  const handleInput = ({ target }) => {
    value = type.match(/^(number|range)$/) ? +target.value : target.value;
  };

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
  <input id={name} {required} {type} class="border border-gray-200 rounded" {value} on:input={handleInput} />
</div>

<style>
  label {
  }
</style>
