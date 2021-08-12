// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

const { nombre, clave, edad } = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    // console.log( nombre , edad , rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14,
            lng: -12
        }
    }
}

const avenger = useContext( persona )

const {nombreClave, anios, latlng:{ lat, lng } } = avenger

console.log(nombreClave, anios)
console.log(lat , lng)
