const cakes = async () => {
  const response = await fetch('/.netlify/functions/posts')
  const data = await response.json()

  const cakeFigure = data.find((item) => item.caption.startsWith('#cake'))

  document.querySelector('.cake').innerHTML = `
    <figure>
      <img src="${cakeFigure.url}" alt="picture of cake">
      <figcaption>${cakeFigure.caption}</figcaption>
    </figure>
  `
  console.log(data)
}

const cupCakes = async () => {
  const response = await fetch('/.netlify/functions/posts')
  const data = await response.json()

  const cupFigure = data.find((item) => item.caption.startsWith('#cupcake'))

  document.querySelector('.cupcake').innerHTML = `
    <figure>
      <img src="${cupFigure.url}" alt="picture of a cupcake">
      <figcaption>${cupFigure.caption}</figcaption>
    </figure>
  `
  console.log(data)
}

const donuts = async () => {
  const response = await fetch('/.netlify/functions/posts')
  const data = await response.json()

  const donutFigure = data.find((item) => item.caption.startsWith('#donut'))

  document.querySelector('.donut').innerHTML = `
    <figure>
      <img src="${donutFigure.url}" alt="picture of donuts">
      <figcaption>${donutFigure.caption}</figcaption>
    </figure>
  `
  console.log(data)
}

cakes()
cupCakes()
donuts()