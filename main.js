const OPCION_SALIR = 4
const OPCION_SALIRR = 5
const IVA = 1.21
let totalDeProducto = 1000

const productosCargados = [
    {
        id:1,
        nombre:'KYDREX FCPC V5 Carrier',
        precio:480,
        categoria:'plate'
    },
    {
        id:2,
        nombre:'KRYDEX Slim Plate Carrier',
        precio:125,
        categoria:'plate'
    },
    {
        id:3,
        nombre:'KRYDEX MK3 MK4 Micro Fight Chassis Modular Chest Rig',
        precio:160,
        categoria:'chest'
    },
    {
        id:4,
        nombre:'KRYDEX Tactical D3CR Chest Rig',
        precio:110,
        categoria:'chest'
    },
    {
        id:5,
        nombre:'KRYDEX Tactical MED1 Medical Pouch',
        precio:60,
        categoria:'pouch'
    },
    {
        id:6,
        nombre:'Krydex Tactical 9MM Pistol Magazine Pouch Double Stack',
        precio:40,
        categoria:'pouch'
    },
    {
        id:7,
        nombre:'KRYDEX Zipper Insert Pocket',
        precio:25,
        categoria:'pouch'
    },
    {
        id:8,
        nombre:'KRYDEX Elastic QUAD SMG Submachine Gun',
        precio:25,
        categoria:'pouch'
    },
    {
        id:9,
        nombre:'KRYDEX Tactical Mini Dangler Drop Dump Pouch',
        precio:35,
        categoria:'pouch'
    },
    {
        id:10,
        nombre:'KRYDEX 7.62 Double Magazine Insert Pouch',
        precio:25,
        categoria:'pouch'
    },
    {
        id:11,
        nombre:'Krydex Tactical MOLLE Belt Low Profile Battle Cobra Belt',
        precio:200,
        categoria:'belts'
    },
    {
        id:12,
        nombre:'The Bison Belt™ de Ferro Concepts',
        precio:430,
        categoria:'belts'
    }
]

const carrito = []
const historial = []

const verCarriers = () => {
    let mensaje = 'Lista de producto: \n'
    productosCargados.forEach(el =>{
        if(el.categoria === 'plate'){
            mensaje = mensaje + `${el.id}-${el.nombre}-$${el.precio} \n`
        }
    })

    const opcion = parseInt(prompt(mensaje))

    const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
    carrito.push(productoSeleccionado)
    alert('Agregado al carrito con exito!')
}

const verChests = () => {
    let mensaje = 'Lista de producto: \n'
    productosCargados.forEach(el =>{
        if(el.categoria === 'chest'){
            mensaje = mensaje + `${el.id}-${el.nombre}-$${el.precio} \n`
        }
    })

    const opcion = parseInt(prompt(mensaje))

    const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
    carrito.push(productoSeleccionado)
    alert('Agregado al carrito con exito!')
}

const verPouchs = () => {
    let mensaje = 'Lista de producto: \n'
    productosCargados.forEach(el =>{
        if(el.categoria === 'pouch'){
            mensaje = mensaje + `${el.id}-${el.nombre}-$${el.precio} \n`
        }
    })

    const opcion = parseInt(prompt(mensaje))

    const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
    carrito.push(productoSeleccionado)
    alert('Agregado al carrito con exito!')
}

const verBelts = () => {
    let mensaje = 'Lista de producto: \n'
    productosCargados.forEach(el =>{
        if(el.categoria === 'belts'){
            mensaje = mensaje + `${el.id}-${el.nombre}-$${el.precio} \n`
        }
    })

    const opcion = parseInt(prompt(mensaje))

    const productoSeleccionado = productosCargados.find(producto => producto.id === opcion)
    carrito.push(productoSeleccionado)
    alert('Agregado al carrito con exito!')
}

const mostrarDetalle = () => {
    carrito.forEach(el =>
        alert('Primer producto: ' + el.nombre + ', precio: ' + el.precio))
}

const verProductos = () => {
    let opcion
    opcion = parseInt(prompt('Elige la operacion que deseas, \n 1) Plate Carriers \n 2) Chests Rig \n 3) Pouchs \n 4) Belts \n 5) Volver atras '))
    while(opcion != OPCION_SALIRR){
        switch(opcion){
            case 1:
                verCarriers()
                break
            case 2:
                verChests()
                break
            case 3:
                verPouchs()
                break
            case 4:
                verBelts()
                break
            default:
                alert('Ingreso una opcion invalida.')
                break
        }
        opcion = parseInt(prompt('Elige la  operacion  que deseas, \n 1) Plate Carriers \n 2) Chests Rig \n 3) Pouchs \n 4) Belts \n 5) Volver atras '))
    }
}


const calcularIVA = (total) => {
    const resultado = IVA * total;
    alert("El total con IVA: $" + resultado + "\n El total es: $" + total);
}

const verCarrito = () => {
    let mensaje = 'Carrito: \n';
    const numeroCompra = Math.round(Math.random() * 10000000 + 100000);

    carrito.forEach(el => {
        mensaje = mensaje + `${el.id}-${el.nombre}  $${el.precio} \n`;
    });
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    const totalConIVA = IVA * total; // Calculamos el total con IVA
    mensaje += `TOTAL                  $${totalConIVA}`; // Usamos totalConIVA en lugar de total
    mensaje += `¿Desea realizar la compra? (si/no)`;
    const respuesta = prompt(mensaje);
    if (respuesta.toLowerCase() === 'si') {
        historial.push({
            numero: numeroCompra,
            nombre: prompt('Ingrese su nombre'),
            direccion: prompt('Ingrese la dirección a donde llegará el producto')
        });
        alert('Felicitaciones, tu compra fue realizada con éxito! \n Nº ' + numeroCompra + '\n guarda el número para recibir el producto');
        carrito.splice(0, carrito.length); // Limpiamos el carrito después de la compra
    }
}

let opcion = parseInt(prompt('Elige la operación que deseas, \n 1) Ver Productos \n 2) Ver Carrito \n 3) Calcular IVA \n 4) Salir '));

while (opcion !== OPCION_SALIR) {
    switch (opcion) {
        case 1:
            verProductos();
            break;
        case 2:
            verCarrito();
            break;
        case 3:
            const totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
            calcularIVA(totalCarrito)
            break;
        default:
            alert('Ingresaste una opción inválida.');
            break;
    }

    opcion = parseInt(prompt('Elige la operación que deseas, \n 1) Ver Productos \n 2) Ver Carrito \n 3) Calcular IVA \n 4) Salir '));
}

alert('Gracias, vuelve pronto');