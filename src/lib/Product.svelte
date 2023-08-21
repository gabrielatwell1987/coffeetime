<script>
  let individualID = document.location.pathname.split("/")[2];
  let individualName;

  import { products, cart } from "../stores.js";

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

<section>
  <a href="/products">{"<< Back to Shop"}</a>

  <div id="productdetails">
    {#each $products as product}
      {#if product.id == individualID}
        <div>
          <p><img src={product.large_image} alt={product.name} /></p>
        </div>
        <div>
          <p>{product.name}</p>
          <p>SKU: {individualID}</p>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button on:click={() => addToCart(product)}>Add to Cart</button>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  #productdetails {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
  }

  #productdetails div:nth-child(2) h2 {
    text-align: right;
  }

  #productdetails div:nth-child(2) p:nth-child(1) {
    font-size: 36px;
    font-weight: bold;
    border-bottom: 1px solid grey;
    margin-bottom: 0;
  }

  #productdetails div:nth-child(2) p:nth-child(2) {
    color: lightgrey;
  }
</style>
