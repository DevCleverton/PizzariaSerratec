/*Bebidas
(Coca Cola  - R$12,00)
(Fanta - R$10,00)
(Guaraná Antarctica  - R$10,00)
(H2O  - R$8,00)
(Del Valle  - R$7,00)
*/

//O tamanho da pizza
//(Pequena 20cm  - R$25,00)
//(Media 25cm  - R$30,00)
//(Gigante 35cm  - R$40,00)
//(Familia 40cm  - R$45,00)

/*Tipo de borda
(Gorgonzola  - R$10,00)
(Provolone  - R$8,00)
(Catupiry  - R$5,00)
(Cheddar - R$5,00)
(Sem borda  - R$0,00)*/



alert("Seja Bem-vindo(a) a nossa pizzaria")

var tamanhoDaPizza = prompt("Digite o numero da pizza que você deseja: \n 1 - Pequena 20cm - R$25,00 \n 2 - Media 25cm - R$30,00 \n 3 - Gigante 35cm - R$40,00 \n 4 - Familia 40cm - R$45,00")
var tipoBorda = prompt("Digite o numero da borda que você deseja: \n 1 - Gorgonzola - R$10,00 \n 2 - Provolone - R$8,00 \n 3 - Catupiry - R$5,00 \n 4 - Cheddar - R$5,00 \n 5 - Sem borda - R$0,00")
var pedirBebidas = prompt("Digite o numero da bebida que você deseja: \n 1 - Coca Cola - R$12,00 \n 2 - Fanta - R$10,00 \n 3 - Guaraná - R$10,00 \n 4 - H2O - R$8,00 \n 5 - Dell Valle - R$7,00")



var calctp = calcTamanhoDaPizza(tamanhoDaPizza);
var calcbe = calcBebidas(pedirBebidas);
var calcbor = calcBorda(tipoBorda);
var valorTotal = calcBorda(tipoBorda) + calcTamanhoDaPizza(tamanhoDaPizza) + calcBebidas(pedirBebidas)
var escreve = escreverTamanhoDaPizza(tamanhoDaPizza) 
 
function calcTamanhoDaPizza(tamanhoDaPizza) {
    if (tamanhoDaPizza == 1) {
       return 25.00
    }else if(tamanhoDaPizza == 2){
        return 30.00
    }else if(tamanhoDaPizza == 3){
        return 40.00
    }else{
        return 45.00
    }
};

function calcBorda(tipoBorda){
    if(tipoBorda == 1){
        return 10.00
    }else if(tipoBorda == 2){
        return 8.00
    }else if(tipoBorda == 3){
        return 5.00
    }else if(tipoBorda == 4){
        return 5.00
    }else{
        0
    }
}


function calcBebidas(pedirBebidas) {
    if (pedirBebidas == 1) {
        return 12.00
    }else if(pedirBebidas == 2){
        return 10.00
    }else if(pedirBebidas == 3){
        return 10.00
    }else if(pedirBebidas == 4){
        return 8.00
    }else {
        return 7.00
    }
};
 