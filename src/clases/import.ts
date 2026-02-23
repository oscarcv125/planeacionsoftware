import { bancos } from './Lab1/bancos.ts'

const getBancoId = (id) => bancos.find( (banco) => banco.id === banco.id);


console.log(bancos)
console.log(getBancoId(1));