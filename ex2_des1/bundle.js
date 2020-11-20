"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idade = usuarios.map(function (us) {
  return us.idade;
});
console.log(idade);
var funcionarioRocket = usuarios.filter(function (us) {
  return us.empresa === 'Rocketseat' && idade > 18;
});
console.log(funcionarioRocket);
var funcionarioGoogle = usuarios.find(function (us) {
  return us.empresa === 'Google';
});
console.log(funcionarioGoogle);
var filtroIdade = usuarios.map(function (us) {
  return {
    nome: us.nome,
    idade: us.idade * 2
  };
}).filter(function (us) {
  return us.idade <= 50;
});
console.log(filtroIdade);
