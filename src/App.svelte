<script>
import Tailwindcss from './Tailwindcss.svelte';
  import router from "page";
  import {pagePath} from './store.js';

import Navbar from './components/Navbar.svelte';
  // Include our Routes
  import Home from "./routes/Home.svelte";
  import Example from './routes/Example.svelte';
  import Login from './routes/Login.svelte';
  // import Signup from './routes/Signup.svelte';

  // Variables
  let page;
  let params

  // Set up the pages to watch for
  router("/", () => {
    page = Home
    $pagePath = "/";
    });
  router("/example",()=>{
    page=Example
    $pagePath = "/example"
    });
  router("/login",()=>{
    page=Login
    $pagePath = "/login"
    });
// Handler for page change event
  $: {
    router.redirect($pagePath)
  }

  // Set up the router to start and actively watch for changes
  router.start();
</script>
<Tailwindcss></Tailwindcss>
<Navbar></Navbar>
<svelte:component this={page} params={params} />
