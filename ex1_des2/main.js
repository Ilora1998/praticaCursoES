import ClasseUsuario from './functions';
ClasseUsuario.info();

import { idade } from './functions';
console.log(idade);
document.write(idade);

import defaultUsuario, { idade as IdadeUsuario } from './functions';
ClasseUsuario.info();
console.log(idade); 

