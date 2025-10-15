let trajesh = [
    { nombre: "$1500", imagen: "images/traje1.jpeg" },
    { nombre: "$1600", imagen: "images/traje2.jpeg" },
    { nombre: "$1650", imagen: "images/traje3.jpeg" },
    { nombre: "$1700", imagen: "images/traje4.jpeg" },
  ];
  
  function cargarTrajesH() { 
    var container = document.getElementById("ContainerTrajesH-id");
      
    trajesh.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Traje</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  let relojes = [
    { nombre: "$300", imagen: "images/reloj1.jpeg" },
    { nombre: "$320", imagen: "images/reloj2.jpeg" },
    { nombre: "$350", imagen: "images/reloj3.jpeg" },
    { nombre: "$400", imagen: "images/reloj4.jpeg" },
    { nombre: "$420", imagen: "images/reloj5.jpeg" },
    { nombre: "$450", imagen: "images/reloj6.jpeg" },
  ];
  
  function cargarRelojes() { 
    var container = document.getElementById("ContainerRelojes-id");
      
    relojes.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Reloj</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
  };


  let anteojos = [
    { nombre: "$300", imagen: "images/anteojos1.jpeg" },
    { nombre: "$320", imagen: "images/anteojos2.jpeg" },
  ];
  
  function cargarAnteojos() { 
    var container = document.getElementById("ContainerAnteojos-id");
      
    anteojos.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Anteojos</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
    cargarAnteojos();
  };


  let dijes = [
    { nombre: "$150", imagen: "images/dije1.jpeg" },
    { nombre: "$150", imagen: "images/dije2.jpeg" },
  ];
  
  function cargarDijes() { 
    var container = document.getElementById("ContainerDijes-id");
      
    dijes.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Dije</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
    cargarAnteojos();
    cargarDijes();
  };



  let trajesm = [
    { nombre: "$1700", imagen: "images/trajesm1.jpeg" },
    { nombre: "$1750", imagen: "images/trajesm2.jpeg" },
    { nombre: "$1800", imagen: "images/trajesm3.jpeg" },
    { nombre: "$1900", imagen: "images/trajesm4.jpeg" },
  ];
  
  function cargarTrajesM() { 
    var container = document.getElementById("ContainerTrajesM-id");
      
    trajesm.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Traje</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
    cargarAnteojos();
    cargarDijes();
    cargarTrajesM();
  };


  let carteras = [
    { nombre: "$700", imagen: "images/cartera1.jpeg" },
    { nombre: "$750", imagen: "images/cartera2.jpeg" },
    { nombre: "$800", imagen: "images/cartera3.jpeg" },
    { nombre: "$900", imagen: "images/cartera4.jpeg" },
  ];
  
  function cargarCarteras() { 
    var container = document.getElementById("ContainerCarteras-id");
      
    carteras.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Cartera</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
    cargarAnteojos();
    cargarDijes();
    cargarTrajesM();
    cargarCarteras();
  };


  let colgantes = [
    { nombre: "$100", imagen: "images/colgante1.jpeg" },
    { nombre: "$150", imagen: "images/colgante2.jpeg" },
    { nombre: "$200", imagen: "images/colgante3.jpeg" },
    { nombre: "$200", imagen: "images/colgante4.jpeg" },
  ];
  
  function cargarColgantes() { 
    var container = document.getElementById("ContainerColgantes-id");
      
    colgantes.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Colgante</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
    cargarAnteojos();
    cargarDijes();
    cargarTrajesM();
    cargarCarteras();
    cargarColgantes();
  };


  let perfumes = [
    { nombre: "$100", imagen: "images/perfume1.jpeg" },
    { nombre: "$150", imagen: "images/perfume2.jpeg" },
    { nombre: "$200", imagen: "images/perfume3.jpeg" },
    { nombre: "$300", imagen: "images/perfume4.jpeg" },
  ];
  
  function cargarPerfumes() { 
    var container = document.getElementById("ContainerPerfumes-id");
      
    perfumes.forEach(function(producto) {
      var productoElement = document.createElement("div");
      productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <button onclick="agregarAlCarrito('${producto.nombre}', '${producto.nombre}')">Comprar Perfume</button>
      `;
      container.appendChild(productoElement);
    });
  }
  
  window.onload = function() {
    cargarTrajesH();
    cargarRelojes();
    cargarAnteojos();
    cargarDijes();
    cargarTrajesM();
    cargarCarteras();
    cargarColgantes();
    cargarPerfumes();
  };