<script>
  import router from "page";

  // Include our Routes
  import Home from "./routes/Home.svelte";
  import Chat from './routes/Chat.svelte';
  // Variables
  let page;
  let params

  // Set up the pages to watch for
  router("/", () => (page = Home));
  router("/chat",()=>(page=Chat));
  // Set up the router to start and actively watch for changes
  router.start();
</script>

<svelte:component this={page} params={params} />
