"use strict";

let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

let product1Img = document.getElementById("product1");
let product2Img = document.getElementById("product2");
let product3Img = document.getElementById("product3");


function Product(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let product1 = new Product("product1", "./img/product1.jpg");
let product2 = new Product("pet-sweep", "./img/pet-sweep.jpg");
let bag = new Product("bag", "./img/bag.jpg");
let banana = new Product("banana", "./img/banana.jpg");
let bathroom = new Product("bathroom", "./img/bathroom.jpg");
let boots = new Product("boots", "./img/boots.jpg");
let breakfast = new Product("breakfast", "./img/breakfast.jpg");
let bubblegum = new Product("bubblegum", "./img/bubblegum.jpg");
let chair = new Product("chair", "./img/chair.jpg");
let cthulhu = new Product("cthulhu", "./img/cthulhu.jpg");
let dogDuck = new Product("dog-duck", "./img/dog-duck.jpg");
let pen = new Product("pen", "./img/pen.jpg");
let scissors = new Product("scissors", "./img/scissors.jpg");
let shark = new Product("shark", "./img/shark.jpg");
let unicorn = new Product("unicorn", "./img/unicorn.jpg");
let waterCan = new Product("water-can", "./img/water-can.jpg");
let wineGlass = new Product("wine-glass", "./img/wine-glass.jpg");
let product3 = new Product("product3", "./img/product3.jpg");
let sweep = new Product("sweep", "./img/sweep.png");

let productArray = [];

productArray.push(product1);
productArray.push(product2);
productArray.push(bag);
productArray.push(banana);
productArray.push(bathroom);
productArray.push(boots);
productArray.push(breakfast);
productArray.push(bubblegum);
productArray.push(chair);
productArray.push(cthulhu);
productArray.push(dogDuck);
productArray.push(pen);
productArray.push(scissors);
productArray.push(shark);
productArray.push(unicorn);
productArray.push(waterCan);
productArray.push(wineGlass);
productArray.push(product3);
productArray.push(sweep);

function setProductImages(product1, product2, product3) {
  product1.src = product1.imgSrc;
  product1.alt = product1.name;
  product1.title = product1.name;
  product2.src = product2.imgSrc;
  product2.alt = product2.name;
  product2.title = product2.name;
  product3.src = product3.imgSrc;
  product3.alt = product3.name;
  product3.title = product3.name;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setProductImages() {
  let productIndex1 = getRandomInt(productArray);
  let productIndex2 = getRandomInt(productArray);
  let productIndex3 = getRandomInt(productArray);

function setRandomProductImages() {
  let product1 = productArray[productIndex1];
  let product2 = productArray[productIndex2];
  let product3 = productArray[productIndex3];
  while(productIndex1 === productIndex2 === productIndex3) {
    productIndex1 = getRandomInt(productArray.length);
    productIndex2 = getRandomInt(productArray.length);
    productIndex3 = getRandomInt(productArray.length);
  }
  setProductImages(product1, product2, product3);
}

setRandomProductImages();

function handleProductClick(event) {
  console.log("clicked!!");
  event.preventDefault();
  let target = event.target;
  let productName = target.alt;
  console.log(productName);

  let theBestProduct;
  let productViews;
  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i];
    if (product.name === target.alt) {
      theBestProduct = product;
      productViews = product;
    }
  }
  theBestProduct.voteCount++;
  productViews.viewCount++;
  console.log(theBestProduct.voteCount);
  console.log(productViews.viewCount);
  setRandomProductImages();
}

votingArea.addEventListener("click", handleProductClick);

function renderResults() {
  resultsArea.innerHTML = "";
  let productUL = document.createElement("ul");
  for (let i = 0; i < productArray.length; i++) {
    let product = productArray[i];
    let productName = product.name;
    let productVoteCount = product.voteCount;
    let productViews = product.viewCount;
    let report = `${productName} had ${productVoteCount} votes and ${productViews} views.`;
    let productLI = document.createElement("li");
    productLI.textContent = report;
    productUL.appendChild(productLI);
  }
  resultsArea.appendChild(productUL);
}
let showResultsButton = document.getElementById("show-results-button");
showResultsButton.addEventListener("click", renderResults);
