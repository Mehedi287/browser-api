const addCart = () => {
    const nameFlid = document.getElementById('proudct-name');
    const name = nameFlid.value;
    nameFlid.value = '';
    if (!name) {
        return
    }
    displayItem(name);
    addItemToCart(name);
}
const displayItem = (name) => {
    const ui = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerText = name;
    ui.appendChild(li)
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObjact;
    if (cart) {
        cartObjact = JSON.parse(cart)
    }
    else {
        cartObjact = {};
    }
    return cartObjact;
}
const addItemToCart = (name) => {
    const cart = getCart();
    cart[name] = 1;
    console.log(cart);
    const stringify = JSON.stringify(cart);
    localStorage.setItem('cart', stringify)
}