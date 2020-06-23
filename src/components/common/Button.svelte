<script>
  export let to;
  export let type;
  export let text;
  export let onClick;
</script>

{#if to}
  <a href={to}>
    <button {type}>{text}</button>
  </a>
{:else}
  <button {type} on:click={onClick}>{text}</button>
{/if}

<style lang="scss">
  button {
    padding: 0.25rem 0.5rem;
  }
</style>
