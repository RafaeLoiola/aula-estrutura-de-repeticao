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
console.log('--------------------')
}
{
// 2) Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado

const numeros = [0,1,2,3,4,5,6,7,8,9,10];



for (let i = 0; i <numeros.length; i++){
 const numero = numeros[i];

  
  if (numero % 2 === 0){
	console.log(numero);
}
}
}
