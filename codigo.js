//Classificador de nivel de heroi
//Exercicio para treinar estruturas de condição, operações e variaveis.

let nomeHeroi = 'Cristian'
let xpHeroi = 10001
let nivel

if (xpHeroi < 1000) {
    nivel = 'Ferro'
} else if(xpHeroi > 1000 & xpHeroi < 2001){
    nivel = 'Bronze'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else if(xpHeroi > 2000 & xpHeroi < 5001){
    nivel = 'Prata'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else if(xpHeroi > 5000 & xpHeroi < 7001){
    nivel = 'Ouro'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else if(xpHeroi > 7000 & xpHeroi < 8001){
    nivel = 'Platina'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else if(xpHeroi > 8000 & xpHeroi < 9001){
    nivel = 'Ascendente'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else if(xpHeroi > 9000 & xpHeroi < 10001){
    nivel = 'Imortal'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else if(xpHeroi >= 10001){
    nivel = 'Radiante'
    console.log('O Herói de nome ' + nomeHeroi + ' está no nível de ' + nivel)
}else {
    console.log('Usuario digitou um valor invalido')
}


