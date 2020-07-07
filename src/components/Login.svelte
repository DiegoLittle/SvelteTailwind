<script>
  // import * as firebase from "firebase/app";
  // import { fire, fireAuth } from "../plugins/auth.js";
  import { userStore,pagePath } from "../store.js";

  let email = "";
  let password = "";
  let showLoader = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function handleLogin() {
    showLoader = true;
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        userStore.set(res.user);
        $pagePath = "/profile"
        console.log({ $userStore });
      })
      .catch(e => console.log(e.message));
  }
  function googleLogin() {
    // First, we perform the signInWithRedirect.
    // Creates the provider object.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        console.log(token)
        // The signed-in user info.
        var user = result.user;
        console.log(user)
      });
  }
</script>

<style>
  .loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="container mx-auto px-4 h-full">

  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-4/12 px-4">

      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg
        rounded-lg bg-gray-600 border-0"
        class:items-center={showLoader}>
        {#if showLoader}
          <div
            class="loader ease-linear rounded-full border-8 border-t-8
            border-gray-200 h-64 w-42 " />
        {:else}
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-200 text-sm font-bold">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal
                px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1
                uppercase shadow hover:shadow-md inline-flex items-center
                font-bold text-xs"
                type="button"
                style="transition: all 0.15s ease 0s;">
                <img alt="..." class="w-5 mr-1" src="images/github.svg" />
                Github
              </button>
              <button
                on:click={googleLogin}
                class="bg-white active:bg-gray-100 text-gray-800 font-normal
                px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1
                uppercase shadow hover:shadow-md inline-flex items-center
                font-bold text-xs"
                type="button"
                style="transition: all 0.15s ease 0s;">
                <img alt="..." class="w-5 mr-1" src="images/google.svg" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-200 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-200 text-xs font-bold mb-2"
                  for="grid-password">
                  Email
                </label>
                <input
                  autocomplete="username"
                  bind:value={email}
                  type="email"
                  class="px-3 py-3 placeholder-gray-600 text-gray-700 bg-white
                  rounded text-sm shadow focus:outline-none focus:shadow-outline
                  w-full"
                  placeholder="Email"
                  style="transition: all 0.15s ease 0s;" />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-200 text-xs font-bold mb-2"
                  for="grid-password">
                  Password
                </label>
                <input
                  autocomplete="current-password"
                  bind:value={password}
                  type="password"
                  class="px-3 py-3 placeholder-gray-600 text-gray-700 bg-white
                  rounded text-sm shadow focus:outline-none focus:shadow-outline
                  w-full"
                  placeholder="Password"
                  style="transition: all 0.15s ease 0s;" />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5"
                    style="transition: all 0.15s ease 0s;" />
                  <span class="ml-2 text-sm font-semibold text-gray-200">
                    Remember me
                  </span>
                </label>
              </div>
              <div class="text-center mt-6">
                <button
                  on:click={handleLogin}
                  class="bg-gray-800 text-white hover:bg-gray-700 text-sm
                  font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
                  outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="button"
                  style="transition: all 0.15s ease 0s;">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        {/if}
      </div>
      <div class="flex flex-wrap mt-6">
        <div class="w-1/2">
          <a href="#pablo" class="text-gray-300">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="w-1/2 text-right">
          <a href="#pablo" class="text-gray-300">
            <small>Create new account</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
