//1- Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.

const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]


// let i = 0
// let j = 1;

// while (i < frutas.length){
//     const fruta = document.getElementById("fruta-" + j)
//     fruta.innerHTML = fruta.innerHTML + frutas[i]
//     console.log(i)
//     i ++
//     j ++
// }

// 2- Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
// Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
// Cole o comando aqui:

let novaFruta = document.getElementById("nomeDaFruta4")/*entra como variável global*/

function imprimirTextoDigitado(){
    // let novaFruta = document.getElementById("nomeDaFruta4")/*se eu criar essa variável aqui, ela só funcionará nesse escopo, ou seja, para usá-la em outra função eu terei que declarar novamente na outra função, ou declarar ela como global*/
    console.log(novaFruta.value)
}

// 3- Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.

function adicionarFrutaNaLista(){
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = novaFruta.value
}



