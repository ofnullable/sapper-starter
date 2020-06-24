<script>
  export let to;
  export let type;
  export let text;
  export let classes;
  export let onClick;

  const defaultStyles = 'rounded py-1 px-5 mt-2';
</script>

{#if to}
  <a href={to}>
    <button {type} class={[defaultStyles, classes].join(' ')}>{text}</button>
  </a>
{:else}
  <button {type} class={[defaultStyles, classes].join(' ')} on:click={onClick}>{text}</button>
{/if}

<style lang="scss">
  button {
    padding: 0.25rem 0.5rem;
  }
</style>
