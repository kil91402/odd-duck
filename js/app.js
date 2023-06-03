"use strict";

let votingArea = document.getElementById("voting-area");
let resultsArea = document.getElementById("results-area");

let dragonImg = document.getElementById("product1");
let petSweepImg = document.getElementById("product2");
let tauntaunImg = document.getElementById("product3");

function Product(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let dragon = new Product("dragon", "./img/dragon.jpg");
let petSweep = new Product("pet-sweep", "./img/pet-sweep.jpg");
let tauntaun = new Product("tauntaun", "./img/tauntaun.jpg");

let productArray = [];

productArray.push(dragon);
productArray.push(petSweep);
productArray.push(tauntaun);

function setProductImages(dragon, petSweep, tauntaun) {
  dragonImg.src = dragon.imgSrc;
  dragonImg.alt = dragon.name;
  dragonImg.title = dragon.name;
  petSweepImg.src = petSweep.imgSrc;
  petSweepImg.alt = petSweep.name;
  petSweepImg.title = petSweep.name;
  tauntaunImg.src = tauntaun.imgSrc;
  tauntaunImg.alt = tauntaun.name;
  tauntaunImg.title = tauntaun.name;
}

setProductImages(productArray[0], productArray[1], productArray[2]);

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
