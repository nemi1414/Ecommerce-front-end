const collections = [
  {
    container: "ContainerTrajesH-id",
    category: "Traje",
    products: [
      { price: 1500, image: "images/traje1.jpeg" },
      { price: 1600, image: "images/traje2.jpeg" },
      { price: 1650, image: "images/traje3.jpeg" },
      { price: 1700, image: "images/traje4.jpeg" },
    ],
  },
  {
    container: "ContainerRelojes-id",
    category: "Reloj",
    products: [
      { price: 300, image: "images/reloj1.jpeg" },
      { price: 320, image: "images/reloj2.jpeg" },
      { price: 350, image: "images/reloj3.jpeg" },
      { price: 400, image: "images/reloj4.jpeg" },
      { price: 420, image: "images/reloj5.jpeg" },
      { price: 450, image: "images/reloj6.jpeg" },
    ],
  },
  {
    container: "ContainerAnteojos-id",
    category: "Anteojos",
    products: [
      { price: 300, image: "images/anteojos1.jpeg" },
      { price: 320, image: "images/anteojos2.jpeg" },
    ],
  },
  {
    container: "ContainerDijes-id",
    category: "Dije",
    products: [
      { price: 150, image: "images/dije1.jpeg" },
      { price: 150, image: "images/dije2.jpeg" },
    ],
  },
  {
    container: "ContainerTrajesM-id",
    category: "Traje",
    products: [
      { price: 1700, image: "images/trajesm1.jpeg" },
      { price: 1750, image: "images/trajesm2.jpeg" },
      { price: 1800, image: "images/trajesm3.jpeg" },
      { price: 1900, image: "images/trajesm4.jpeg" },
    ],
  },
  {
    container: "ContainerCarteras-id",
    category: "Cartera",
    products: [
      { price: 700, image: "images/cartera1.jpeg" },
      { price: 750, image: "images/cartera2.jpeg" },
      { price: 800, image: "images/cartera3.jpeg" },
      { price: 900, image: "images/cartera4.jpeg" },
    ],
  },
  {
    container: "ContainerColgantes-id",
    category: "Colgante",
    products: [
      { price: 100, image: "images/colgante1.jpeg" },
      { price: 150, image: "images/colgante2.jpeg" },
      { price: 200, image: "images/colgante3.jpeg" },
      { price: 200, image: "images/colgante4.jpeg" },
    ],
  },
  {
    container: "ContainerPerfumes-id",
    category: "Perfume",
    products: [
      { price: 100, image: "images/perfume1.jpeg" },
      { price: 150, image: "images/perfume2.jpeg" },
      { price: 200, image: "images/perfume3.jpeg" },
      { price: 300, image: "images/perfume4.jpeg" },
    ],
  },
];

const bagCount = document.getElementById("bag-count");
const toast = document.getElementById("toast");
let itemCount = 0;
let toastTimeout;

function formatPrice(price) {
  return `$ ${price.toLocaleString("es-AR")}`;
}

function addToBag(productName) {
  itemCount += 1;
  bagCount.textContent = itemCount;
  toast.textContent = `${productName} agregado a tu bolsa`;
  toast.classList.add("is-visible");

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function renderProduct(product, category, index) {
  const card = document.createElement("article");
  card.className = "product-card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-image-wrap";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = `${category} ${index + 1}`;
  image.loading = "lazy";
  imageWrap.appendChild(image);

  const info = document.createElement("div");
  info.className = "product-info";

  const details = document.createElement("div");
  const name = document.createElement("p");
  name.className = "product-name";
  name.textContent = `${category} ${String(index + 1).padStart(2, "0")}`;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = formatPrice(product.price);
  details.append(name, price);

  const button = document.createElement("button");
  button.className = "add-to-bag";
  button.type = "button";
  button.textContent = "Agregar +";
  button.setAttribute("aria-label", `Agregar ${name.textContent} a la bolsa`);
  button.addEventListener("click", () => addToBag(name.textContent));

  info.append(details, button);
  card.append(imageWrap, info);
  return card;
}

collections.forEach((collection) => {
  const container = document.getElementById(collection.container);
  collection.products.forEach((product, index) => {
    container.appendChild(renderProduct(product, collection.category, index));
  });
});
