const cakes = async () => {
  const response = await fetch('/.netlify/functions/cake');
  const data = await response.json();

  const cakeFigure = data.find((item) => item.caption.startsWith('#cake'));

  document.querySelector('.cake').innerHTML = `
    <figure>
      <img src="${cakeFigure.url}" alt="picture of cake">
      <figcaption>${cakeFigure.caption}</figcaption>
    </figure>
  `
  console.log(data);
}

cakes();
