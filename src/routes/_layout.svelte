<script>
  import { stores } from '@sapper/app';
  const { preloading } = stores();

  import Header from '../layouts/Header';
  import Footer from '../layouts/Footer';

  import '../styles/app.scss';
</script>

{#if $preloading}
  <div class="preload-indicator">
    <p>loading..</p>
  </div>
{/if}

<Header />
<main class="container mx-auto flex flex-col flex-1">
  <slot />
</main>
<Footer />

<style lang="scss">
  .preload-indicator {
    position: absolute;
    display: flex;
    flex: 1 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>
