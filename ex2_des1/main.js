const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

const idade = usuarios.map(us => us.idade);
console.log(idade);

const funcionarioRocket = usuarios.filter(us => us.empresa === 'Rocketseat' && idade > 18);
console.log(funcionarioRocket);

const funcionarioGoogle = usuarios.find(us =>us.empresa === 'Google');
console.log(funcionarioGoogle);

const filtroIdade = usuarios.map(us => ({nome : us.nome, idade : us.idade * 2})).filter(us => us.idade <= 50);
console.log(filtroIdade);