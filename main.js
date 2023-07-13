function calcularTotalCabañas(){
    let numPersonas = parseInt(prompt('Ingrese la cantidad de personas que habitaran las cabañas:'))

    if (numPersonas > 0 && numPersonas <= 7){
        let opcion = prompt('Elige una opcion:\n1. Promo Invierno\n2. Finde Largo\n3. Promo Verano')

        if (opcion === '1'){
            let noches = parseInt(prompt('Ingrese el numero de noches que desea hospedarse en Invierno'))

            let costoBase = 5000
            let costoPorPersona = 2000
            let total = (costoBase + (costoPorPersona * (numPersonas - 1))) * noches;
            
            alert('El total a pagar es: $' + total + ' pesos. Muchas gracias.')
        }else if (opcion === '2'){
            let noches = parseInt(prompt('Ingrese el numero de noches que desea hospedarse en el Finde Largo'))

            let costoBase = 4000
            let costoPorPersona = 2000
            let total = (costoBase + (costoPorPersona * (numPersonas - 1))) * noches

            alert('El total a pagar es: $' + total + ' pesos. Muchas gracias')
        }else if (opcion === '3'){
            let noches = parseInt(prompt('Ingrese el numero de noches que desea hospedarse en el Verano'))

            let costoBase = 7500
            let costoPorPersona = 2000
            let total = (costoBase + (costoPorPersona * (numPersonas - 1))) * noches

            alert('El total a pagar es: $' + total + ' pesos. Muchas gracias.')
        }
        else{
            alert('Opcion invalida. Por favor, ingrese una opcion valida')
        }
    } else{
        alert('La cantidad de personas debeser entre 1 y 7 personas. Por favor, ingrese una opcion valida')
    }
}

for (let i = 0; i < 2; i ++){
    calcularTotalCabañas()
}
