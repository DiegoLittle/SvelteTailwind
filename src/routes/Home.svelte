<script>
  let email = "";
  function handleEmailSubscribe() {
    console.log(email);
  }
</script>

<style>
  .wrapper {
    height: 100vh;
  }
</style>

<main class="wrapper bg-lightBG">
  <div class="container mx-auto px-4 font-karla grid grid-cols-3 gap-4 ">
    <div class="col-span-3 text-center">
      <h5 class="grid-cols-3 text-md text-gray-700 font-semibold">
        Welcome to
      </h5>
    </div>
    <div class="col-span-3 text-center">
      <h1 class="grid-cols-3 text-4xl lg:text-6xl text-darkBlue font-extrabold">
        Astuary
        <br />
        Developments
      </h1>
    </div>
    <div class="col-span-3 text-center">
      <h5 class="grid-cols-3 text-lg text-gray-700 font-semibold">
        Take your ideas to the stars and beyond.
      </h5>
      <div class="px-4 flexbox items-center justify-center">
        <input
          class="bg-white p-2 mt-5 rounded-md shadow-lg"
          type="email"
          bind:value={email}
          placeholder="Enter your email" />
        <button
          on:click={handleEmailSubscribe}
          class="bg-red-600 hover:bg-red-500 text-white font-bold p-2 mx-2 mt-5
          rounded-md shadow-lg">
          Subscribe
        </button>
      </div>
    </div>

  </div>

</main>
