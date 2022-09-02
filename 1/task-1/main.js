"use strict";

const goods = [
  { title: 'T-Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (good) => {
  return `
  <div class="goods-item">
    <img class="goods-item-img" src="img/t-shirt.jpg"
    <h3>${good.title}</h3>
    <p>${good.price}</p>
    <button>Купить</button>
  </div>`;
};
const renderGoodsList = (list) => {
  let goodsList = list
    .map(item => renderGoodsItem(item)).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
};
renderGoodsList(goods);