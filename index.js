
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let index = 0; index < notas.length; index++){
   const nota = notas[index];
   soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);
