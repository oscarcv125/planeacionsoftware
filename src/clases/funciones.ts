function saludar(nombre: string) {
    return 'Hola ' + nombre;
}

const saludarFlecha = (nombre: string) => {
    return 'Hola ' + nombre;
};

console.log(saludar('Oscar'));
console.log(saludarFlecha('Oscar'));