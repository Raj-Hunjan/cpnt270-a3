const cake = async () => {
  const response = await fetch('/.netlify/functions/cake');
  const data = await response.json();

  const cakeFigure = data.find((item) => item.caption.startsWith('#cake'));

  document.querySelector('.cake').innerHTML = `
    <figure>
      <img src="${cakeFigure.url}" alt="Tony's image">
      <figcaption>${cakeFigure.caption}</figcaption>
    </figure>
  `
  console.log(data);
}

let websiteIndex
let address
let cap
let hashIndex


const cupCake = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const cupFigure = await data.find((item) => item.caption.includes('#cupcake'));

  websiteIndex = cupFigure.caption.search('http')
  hashIndex = cupFigure.caption.search('#')
  address = cupFigure.caption.slice(websiteIndex)
  cap = cupFigure.caption.slice(0, hashIndex)

  document.querySelector('.cupcake').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${cupFigure.url}" alt="" width="400">
    </a>
    
    <figcaption><a href="${address}">${cap}</a></figcaption>
    
  </figure>
  `

  console.log(data);
}

const donut = async () => {
  const response = await fetch('/.netlify/functions/event');
  const data = await response.json();

  const donutFigure = await data.find((item) => item.caption.includes('#blog'));

  websiteIndex = donutFigure.caption.search('http')
  hashIndex = donutFigure.caption.search('#')
  address = donutFigure.caption.slice(websiteIndex)
  cap = donutFigure.caption.slice(0, hashIndex)

  document.querySelector('.donut').innerHTML = `
  <figure>
    <a href="${address}">
      <img src="${donutFigure.url}" alt="" width="400">
    </a>
    <figcaption><a href="${address}">${cap}</a></figcaption>
  </figure>
  `

  console.log(data);
}

cake();
cupCake();
donut();