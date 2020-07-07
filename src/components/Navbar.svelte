<script>
  let showNav = false;
  let screenSize = screen.width;
  function dropdownToggle() {
    showNav = !showNav;
  }
  $: {
    if (screenSize >= 1024) {
      showNav = true;
    }
  }
</script>

<nav class="flex items-center justify-between flex-wrap bg-lightBG p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
    <a href="/">
      <img
        src="./images/main-logo.png"
        height="100"
        width="200"
        alt="Astuary Logo" />
    </a>
    <!-- <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span> -->
  </div>
  <div on:click={dropdownToggle} class="block lg:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded text-black
      border-gray-600 hover:text-darkBlue hover:border-darkBlue focus:outline-none">
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
  {#if showNav}
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="/example"
          class="block mt-4 lg:inline-block lg:mt-0 text-black
          hover:text-gray-600 mr-4">
          Example
        </a>
        <a
          href="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-black
          hover:text-gray-600 mr-4">
          Another Example
        </a>
      </div>
      <div>
        <a
          href="/login"
          class="inline-block text-sm px-4 py-2 leading-none border rounded
          text-darkBlue border-darkBlue hover:border-transparent hover:text-white hover:bg-darkBlue mt-4 lg:mt-0">
          Login
        </a>
      </div>
    </div>
  {/if}

</nav>
