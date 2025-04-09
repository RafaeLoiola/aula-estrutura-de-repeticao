{
//Some todas as notas de um aluno e imprima sua media
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
console.log('nota media de Guilherme é',media.toFixed(2));

console.log('----------------')
}
{
   // 1) Crie um programa que dado um numero imprima a sua tabuada.

const numero = 5 

for (let i = 1; i <= 10; i++){
  console.log(5,'x',i,'=',i*numero)
  
}
}
