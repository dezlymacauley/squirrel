<script lang="ts">
  import favicon from "#lib/assets/favicon.svg";

  import "#lib/styles/index.css";

  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!--
  NOTE: This is a wrapper div that goes arround the whole application
-->
<div class="app">
  {@render children()}
</div>

<style>
  .app {
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      225deg,
      #abc8de 0%,
      #c7c9d8 16.667%,
      #e5cccf 33.333%,
      #ffd3c7 50%,
      #ffdbc2 66.667%,
      #ffe4c0 83.333%,
      #ffedc3 100%
    );
  }
</style>
