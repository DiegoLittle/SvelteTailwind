<script>
  import Login from "../components/Login.svelte";
  // import * as firebase from "firebase/app";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import {userStore} from '../store.js';
  const dispatch = createEventDispatcher();
  

  // onMount(() => {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       userStore.set(user);
  //       dispatch("pageChange", {
  //         page: "/profile"
  //       });
  //     } else {
  //     }
  //   });
  // });
</script>

<style>
  .wrapper {
    height: 100vh;
    height: 100%;
  }
</style>

<div class="wrapper bg-lightBG">
  <body class="text-gray-800 antialiased">
    <main>
      <Login/>
    </main>
  </body>
</div>
