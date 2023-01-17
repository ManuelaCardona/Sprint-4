const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


//INICIO PRODUCTOS

const productos = [
    {
        id: 1,
        nombre: "Bimbo Pan Blanco Grande",
        precio: 5300,
        img: "https://exitocol.vtexassets.com/arquivos/ids/10240472/Pan-Tajado-Blanco-600-gr-377509_a.jpg?v=637683836144170000",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Fruco Mayonesa 600g",
        precio: 5000,
        img: "https://cdn.shopify.com/s/files/1/0492/2458/1274/products/supermercados_la_vaquita_supervaquita_mayonesa_fruco_600gr_salsas_1024x1024.jpg?v=1620493642",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Huevo AA x30 unidades",
        precio: 14000,
        img: "https://katherinemunoz.viveshops.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBME5BVnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--390d207bf2c98e00b4ade7df6a832e9a6d3699d5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/90100111710108.jpg?locale=es",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Crema Dental Colgate Menta x 60ml",
        precio: 3050,
        img: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBejlJa1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--340323d11853e4c92ca20ca0c9a43ee00cea8dc1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/1ad781ac-b25a-4e81-bb72-1f9eae8e2445.jpg?locale=es ",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Aceite Riquisimo x 3 Lt",
        precio: 12450,
        img: "https://mercasmart.com/wp-content/uploads/2020/06/Riquisimo-3000_ALTA-5-1.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Sal Refisal 500g",
        precio: 2000,
        img: "https://www.mercave.com.co/wp-content/uploads/erp/productos/02015/rzd_sal_refisal_500g.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "Arroz Roa",
        precio: 3800,
        img: "https://www.mercave.com.co/wp-content/uploads/erp/productos/02035/rzd_arrozroa3000gr.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "Papel Higienico Familiar Megarrollo x 12 Unidades",
        precio: 24200,
        img: "https://supermercadosla80.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBejlIanc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6ce0d59dfa5b11d30b5f6d9df1bb94d9a15e2f05/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/FAMILIA%20MEGAROLLO%20X%2012%20UNIDADES.png?locale=es",
        cantidad: 1,
    },
    {
        id: 9,
        nombre: "Azúcar Manuelita Alta Pureza 500g",
        precio: 12450,
        img: "https://olimpica.vtexassets.com/arquivos/ids/613663/7702406001188.jpg?v=637626517851500000",
        cantidad: 1,
    },
    {
        id: 10,
        nombre: "Salsa De Tomate Fruco 43gr",
        precio: 500,
        img: "https://katherinemunoz.viveshops.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM1JCVnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--41cd3ba5d35bb4feeea879716f7533a7111e9306/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/7702047038727.jpg?locale=es",
        cantidad: 1,
    },
    {
        id: 11,
        nombre: "Mortadela Rica 27 Tajadas",
        precio: 6950,
        img: "https://supermercadoahorramas.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNmZjSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5af0771c9fbcfd0b08f192dfa224bcad6df3e24d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/7702398001449.jpg?locale=es",
        cantidad: 1,
    },
    {
        id: 12,
        nombre: "Refresco Hit Mango Caja 1 Litro",
        precio: 3600,
        img: "https://www.mercave.com.co/wp-content/uploads/erp/productos/11007/rzd_jugo_hit_mango_caja_1_litro.jpg",
        cantidad: 1,
    },
];

//FIN PRODUCTOS

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);



    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar); //que se agregue a cada uno 

    comprar.addEventListener("click", () => {

    //para buscar un producto repetido
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id); //some me devuelve un valor booleano (true, false) 
    if (repeat){ //si esta solo se sobreentiende que es verdadero
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++; //poner un doble + es lo mismo que decir +1
            };
        });
    } else{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
          });
          carritoCounter();
          saveLocal();
    }
    });
});

//INICIO CARRITO


// verCarrito.addEventListener("click", () => {
const pintarCarrito = () => {

    //para limpiar el carrito
    modalContainer.innerHTML = "";

    //para que se muestre el carrito
    modalContainer.style.display = "flex"; //tambien puede ser block
  
    //Le agregamos el Header
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader); //enchufarle


    //creamos un botón para cerrar la modal y lo enchufamos al header
    const modalButton = document.createElement("h1");
    modalButton.innerText = "cerrar";
    modalButton.className = "modal-header-button";

    //para que funcione
    modalButton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);


    //recorre el carrito
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}$</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${product.cantidad * product.precio} $</p>
            <span class="delete-product"> eliminar </span>
        `;

        modalContainer.append(carritoContent);


        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1){
                product.cantidad--; //-- es lo mismo que -1
            }
            
          pintarCarrito(); 
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () => {
          product.cantidad++;
          saveLocal();
          pintarCarrito();
        });

        //botón de eliminar producto

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", () => {
          eliminarProducto(product.id);
        });

        // let eliminar = document.createElement("span");

        // eliminar.innerText = "Eliminar";
        // eliminar.className = "delete-product";
        // carritoContent.append(eliminar);

        // eliminar.addEventListener("click", eliminarProducto);
    });

    //total
    const total = carrito.reduce((acomulador, valor_acomulador) => acomulador + valor_acomulador.precio * valor_acomulador.cantidad, 0);

    //modal footer
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
// });

};

verCarrito.addEventListener("click", pintarCarrito);


const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);  //este método (find) me va a ayudar a buscar el id del producto que el usuario desea eliminar. //el valor de foundId es un número que es igual al id que me encontro al apretar el botón y que esta asociado al producto que el usuario quiere eliminar

  carrito = carrito.filter((carritoId) => { //el metodo filter método es para agarrar y filtrar todos los productos que no tengan ese id
    return carritoId !== foundId;
  }); //aquí filtro todo el carrito, recorro todos los productos y le pido que me retorne todos los productos distintos al que seleccioné anteriormente

  //asi se vuelve a pintar el carrito como estaba antes pero sin el producto anteriormente eliminado.
  carritoCounter();
  saveLocal();
  pintarCarrito();
};

// contador de articulos seleccionados

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength")); //contar
};

carritoCounter();

//el setItem es para enviar información al localStorage y con el metodo get obtenemos eso que guardamos

//setItem
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito)); //al localStorage solamente se le puede mandar string 
};

//get Item
JSON.parse(localStorage.getItem("carrito"));