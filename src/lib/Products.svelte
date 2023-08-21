<script>
  import { products, cart } from "../stores.js";
  import Cart from "./Cart.svelte";
  import Button from "./Button.svelte";

  export let location;

  const addToCart = (product) => {
    for (let item of $cart) {
      if (item.id === product.id) {
        product.quantity += 1;
        $cart = $cart;
        return;
      }
    }
    $cart = [...$cart, product];
  };
</script>

<div class="product-list">
  {#each $products as product}
    <div>
      <div class="image" style="background-image: url({product.image})" />
      <h4><a href="product/{product.id}">{product.name}</a></h4>
      <p>${product.price}</p>
      <button on:click={() => addToCart(product)}>Add to Cart</button>
    </div>
  {/each}
</div>

<Cart />

{#await $products}
  <p>...loading</p>
{:then}
  {#each $products as product}
    <div>
      <div class="image" style="background-image: url({product.image})" />
      <h4><a href="product/{product.id}">{product.name}</a></h4>
    </div>
  {/each}
{/await}

<style>
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    grid-row-gap: 20px;
  }

  .product-list > div {
    border: 1px solid #c4c4c4;
    padding: 10px;
  }

  .image {
    height: 150px;
    width: auto;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
