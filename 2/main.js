"use strict";

class ProductsList {
  constructor(container = '.goods-list') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
  }
  _fetchProducts() {
    this.goods = [
      { title: 'T-Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
  totalSum() {
    return this.allProducts
      .reduce((prevValue, currentValue) => prevValue += currentValue.price, 0);
  }
}

class ProductItem {
  constructor(product, img = 'img/t-shirt.jpg"') {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }
  render() {
    return `
      <div class="goods-item" data-id="${this.id}">
        <img src="${this.img} alt="t-shirt" class="goods-item-img">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button>Купить</button>
      </div>`;
  }
}

let list = new ProductsList();
list.render();
console.log(list.totalSum());

class Cart {
  constructor() {

  }
  checkAll() { }
  cartSum() { }
  makeOrder() { }
}

class CartEl {
  constructor(product) {
    this.product = product;
  }
  productCount() { }
  productSum() { }
  delete() { }
}