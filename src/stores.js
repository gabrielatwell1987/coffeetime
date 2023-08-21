import {readable, writable, derived} from 'svelte/store';

export let products = readable([{
    id: 1,
    name: 'Italian House Blend'
}])

export let cart = writable([]);

export let totalprice = derived(cart, ($cart) => {
    let price = 0;
    $cart.forEach(e => price = price + e.price);
    return price;
});