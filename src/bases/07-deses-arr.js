
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, ,p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC0', 123];
}

const [letras, numberos] = retornaArreglo();

console.log(letras, numberos);


//Tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNo,bre

const useState = ( valor ) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState( 'Goku' );

console.log( nombre );
setNombre();