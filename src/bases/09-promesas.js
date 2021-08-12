import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // import el  getHeroeById
//         const p1 = getHeroeById(2);
//         resolve(p1)
//         // reject( ' No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.war( err ) );

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // import el  getHeroeById
      const p1 = getHeroeById(id);
      p1 !== undefined ? resolve(p1) : reject( ' No se pudo encontrar el heroe');
      // reject( ' No se pudo encontrar el heroe');
    }, 2000);
  });
};

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn );
