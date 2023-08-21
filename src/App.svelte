<script>
  import Products from "./lib/Products.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import Product from "./lib/Product.svelte";
  import Cart from "./lib/Cart.svelte";
  import About from "./lib/About.svelte";
  import Home from "./lib/Home.svelte";
  import Coffee from "./lib/Coffee.svelte";
  import Contact from "./lib/Contact.svelte";
  import Disclaimer from "./lib/Disclaimer.svelte";
  import { Router, Route } from "svelte-routing";
  import { products, cart } from "./stores.js";
  import { setContext } from "svelte";

  export let url = "";
  export let name;

  let loggedIn;

  if (name == "") {
    loggedIn = false;
  } else {
    loggedIn = true;
  }
  setContext("key", { loggedIn });
</script>

<svelte:head>
  <title>Coffee Time!</title>
</svelte:head>

<Header {name} />
<Router {url}>
  <nav>
    <a href="/">Home</a>
    <a href="/products">Shop</a>
    <a href="/about">Our Story</a>
    <a href="/coffee">Our Coffee</a>
    <a href="/contact">Contact</a>
  </nav>

  <Disclaimer />

  <main>
    <Route path="/"><Home /></Route>
    <Route let:location path="products"><Products location={Home} /></Route>
    <Route path="about"><About /></Route>
    <Route let:location path="coffee"><Coffee location={Coffee} /></Route>
    <Route path="contact"><Contact /></Route>
    <Route path="/product/:id"><Product /></Route>
  </main>
</Router>
<Footer />

<style>
  a {
    margin-right: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: #ff0000;
  }
</style>
