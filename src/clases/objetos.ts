const estudiante = {
    matricula: 'A01741965',
    nombre: 'Oscar',
    edad: 20,
    direccion: {
        ciudad: 'Monterrey',
        cp: 80199
    }
};

console.log(estudiante);

const estudiante2 = {...estudiante};
estudiante2.nombre = 'Juan';
console.log(estudiante2);