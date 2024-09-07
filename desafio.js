//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

const scan = require('prompt-sync')();

var nivel = " ";
var saldoVitorias = 0;
var vitorias = scan("Quantidade de Vitórias: ")
var derrotas = scan("Quantidade de Derrotas: ")

retornarSaldo(vitorias, derrotas)

function retornarSaldo(vitorias, derrotas){
    retornarNivel(vitorias)
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function retornarNivel(){
    if(vitorias<10){
        return nivel = "Ferro"
    } else if(vitorias>=11 && vitorias<=20){
        return nivel = "Bronze"
    } else if(vitorias>=21 && vitorias<=50){
        return nivel = "Prata"
    } else if(vitorias>=51 &&  vitorias<=80){
        return nivel = "Ouro"
    } else if(vitorias>=81 && vitorias<=90){
        return nivel = "Diamante"
    } else if(vitorias>=91 && vitorias<=100){
        return nivel = "Lendário"
    } else if(vitorias>=101){
        return nivel = "Imortal"
    }
}

// Saída

let mensagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
console.log(mensagem)