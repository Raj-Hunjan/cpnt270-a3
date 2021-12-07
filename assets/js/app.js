"use strict";

// Calling cake picture and caption
const cakes = async () => {
  const response = await fetch('/.netlify/functions/posts') // proxy endpoint
  const data = await response.json()

  const cakeFigure = data.find((item) => item.caption.startsWith('#cake')) // Only finds pictures with this caption

  document.querySelector('.cake').innerHTML = `
    <figure>
      <img src="${cakeFigure.url}" alt="picture of cake" width="400" height="400">
      <figcaption>${cakeFigure.caption}</figcaption>
    </figure>
  `
  console.log(data)
}

// Calling cupcake picture and caption
const cupCakes = async () => {
  const response = await fetch('/.netlify/functions/posts') // proxy endpoint
  const data = await response.json()

  const cupFigure = data.find((item) => item.caption.startsWith('#cupcake')) // Only finds pictures with this caption

  document.querySelector('.cupcake').innerHTML = `
    <figure>
      <img src="${cupFigure.url}" alt="picture of a cupcake" width="400" height="400">
      <figcaption>${cupFigure.caption}</figcaption>
    </figure>
  `
  console.log(data)
}

// Calling donut picture and caption
const donuts = async () => {
  const response = await fetch('/.netlify/functions/posts') // proxy endpoint
  const data = await response.json()

  const donutFigure = data.find((item) => item.caption.startsWith('#donut')) // Only finds pictures with this caption

  document.querySelector('.donut').innerHTML = `
    <figure>
      <img src="${donutFigure.url}" alt="picture of donuts" width="400" height="400">
      <figcaption>${donutFigure.caption}</figcaption>
    </figure>
  `
  console.log(data)
}

cakes()
cupCakes()
donuts()