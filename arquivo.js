// let numeroAlunos = 10;

// for(let contador = 0; contador < numeroAlunos; contador++){
//     console.log(contador);
// }
// let numeroAlunos = 10

// for(let contador = 0; contador < numeroAlunos;contador++) {
//     if(contador % 2 == 0) {
//         console.log (`O numero ${contador} é par`)
//     }
// }
// let numeroAlunos = 10

// for (let contador = 0; contador< numeroAlunos;contador++){
//     if(contador % 2 == 1){
//         console.log (`O numero ${contador } é impar`)
//     }
// }
let numeroAlunos = 10;

for(let contador = 0; contador <  numeroAlunos; contador++) {
    
    if (contador == 0) {
        console.log("O número é zero")
    } else if (contador % 2 == 0) {
        console.log('O numero ' + contador + ' é par')
        
    }  else if(contador % 2 == 1) {
        console.log(`O numero ${contador} é impar`)
    }
}