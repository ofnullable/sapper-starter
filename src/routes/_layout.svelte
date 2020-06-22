<script context="module">
  export async function preload() {
    // load auth
  }
</script>

<script>
  import Header from '../layouts/Header';
  import Footer from '../layouts/Footer';

  import '../styles/app.scss';
</script>

<Header />
<main class="container mx-auto flex flex-col flex-1">
  <slot />
</main>
<Footer />
