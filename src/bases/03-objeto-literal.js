const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        long: 34.52645,
    }
};

// console.table({persona : persona })

const persona2 = {...persona};
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);