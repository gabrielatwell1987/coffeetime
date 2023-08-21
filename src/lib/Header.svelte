<script>
  import { writable } from "svelte/store";
  import { cart, totalprice } from "../stores.js";
  import { getContext } from "svelte";

  export let name = "Gabe";

  const { loggedIn } = getContext("key");

  let loggedInText = "Hi, {name}";
</script>

<!-- <header>
  <div>
    <span>Coffee Time!</span>
  </div>
  <div>
    <div class="basket">
      {#if loggedIn}
        <div>Hi, {name} | Logout</div>
      {:else}
        <div>Hi, Guest | Login</div>
      {/if}

      <span>
        <img src="/images/shoppingcart.svg" width="30" height="30" alt="" />
      </span>
      <span>{$cart.length} items: ${$totalprice}</span>
    </div>
  </div>
</header> -->

<header>
  <div>
    <span><img src="/images/logo.svg" width="30" height="30" alt="" /></span>
    <span>Coffee Time!</span>
  </div>
  <div>
    <div class="basket">
      {#if loggedIn}
        <div>Hi, {name} | Logout</div>
      {:else}
        <div>Hi, Guest | Login</div>
      {/if}
      <div>
        <img src="/images/shoppingcart.svg" width="30" height="30" alt="" />
      </div>
    </div>
    <div class="basketcount">{$cart.length} items: ${$totalprice}</div>
  </div>
</header>

<style>
  header {
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
  }
  header > div {
    min-height: 100px;
    display: flex;
    align-items: center;
  }
  header > div > span:nth-child(2) {
    font-size: 30px;
    padding-left: 10px;
  }
  div.basket {
    display: flex;
  }
  div.basket > div:nth-child(1) {
    margin-right: 10px;
  }
  div.basketcount {
    background-color: #c59747;
    padding: 5px 10px;
    border-radius: 50px;
    margin: 0 0 15px 0px;
  }
</style>
