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



// alert("Seja Bem-vindo(a) a nossa pizzaria")

// var tamanhoDaPizza = prompt("Digite o numero da pizza que você deseja: \n 1 - Pequena 20cm - R$25,00 \n 2 - Media 25cm - R$30,00 \n 3 - Gigante 35cm - R$40,00 \n 4 - Familia 40cm - R$45,00")
// var tipoBorda = prompt("Digite o numero da borda que você deseja: \n 1 - Gorgonzola - R$10,00 \n 2 - Provolone - R$8,00 \n 3 - Catupiry - R$5,00 \n 4 - Cheddar - R$5,00 \n 5 - Sem borda - R$0,00")
// var pedirBebidas = prompt("Digite o numero da bebida que você deseja: \n 1 - Coca Cola - R$12,00 \n 2 - Fanta - R$10,00 \n 3 - Guaraná - R$10,00 \n 4 - H2O - R$8,00 \n 5 - Dell Valle - R$7,00")



// var calctp = calcTamanhoDaPizza(tamanhoDaPizza);
// var calcbe = calcBebidas(pedirBebidas);
// var calcbor = calcBorda(tipoBorda);
// var valorTotal = 
// var escreve = escreverTamanhoDaPizza(tamanhoDaPizza) 

var pedirPizza = parseInt("Digite o tamanho que deseja \n 1- para pequena \n 2- para Media \n 3- para gigante \n 4- para familia")
var pizzas = [
    {id:1, descricao:"Pequena", tamanho: 20, valor: 25.0},
    {id:2, descricao:"Media", tamanho: 25, valor: 30.0},
    {id:3, descricao:"Gigante", tamanho: 35, valor: 40.0},
    {id:4, descricao:"Familia", tamanho: 45, valor: 45.0},

];
var valorTotal = 0;

var bordas = [
    {id: 1, tipo: "Gorgonzola", valor: 10.00},
    {id: 2, tipo: "Provolone", valor: 8.00},
    {id: 3, tipo: "Catupiry", valor: 5.00},
    {id: 4, tipo: "Cheddar", valor: 5.00},
    {id: 5, tipo: "Sem Boda", valor: 0.00}
]


function calcTamanhoDaPizza(valorTotal, tamanho) {

    var indiceTamanho = parseInt(prompt("Digite o numero da pizza que você deseja: \n 1 - Pequena 20cm - R$25,00 \n 2 - Media 25cm - R$30,00 \n 3 - Gigante 35cm - R$40,00 \n 4 - Familia 40cm - R$45,00"))
    if (indiceTamanho == 1) {
        valorTotal = 25.00
        indice = tamanho [0];
        alert(`O tamanho selecionado foi: ${indice}`)
    }else if(indiceTamanho == 2){
        valorTotal = 30.00
        indice = tamanho [1]
        alert(`O tamanho selecionado foi: ${indice}`)
    }else if(indiceTamanho == 3){
       valorTotal = 40
       indice = tamanho [2];
       alert(`O tamanho selecionado foi: ${indice}`)
    }else if (indiceTamanho == 4){
        valorTotal = 45.00
        indice = tamanho [3];
        alert(`O tamanho selecionado foi: ${indice}`)
    } else {
        calcTamanhoDaPizza (valorTotal, tamanho);
    }
};

calcTamanhoDaPizza(valorTotal, tamanho);

var borda = [
    ,

]

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


// function calcBebidas(pedirBebidas) {
//     if (pedirBebidas == 1) {
//         return 12.00
//     }else if(pedirBebidas == 2){
//         return 10.00
//     }else if(pedirBebidas == 3){
//         return 10.00
//     }else if(pedirBebidas == 4){
//         return 8.00
//     }else {
//         return 7.00
//     }
// };
 

/*
Forma de Pagamento
(Cartão - Debito ou Credito)
Pix
PicPay
Dinheiro

 */

// var valorTotal = 78.9;


// formaDePagamento();
// function formaDePagamento() {
//     pagamento = parseInt(
//         prompt(
//             "Digite a forma de pagamento desejada: \n 1 - Cartão de Crédito ou Débito\n 2 - Pix\n 3 - PicPay\n 4 - Dinheiro"
//         )
//     );
//     switch (pagamento) {
//         case 1:
//             alert(
//                 "Ok, a forma de pagamento escolhida foi Cartão de Crédito ou Débito"
//             );
//             break;
//         case 2:
//             alert("Ok, a forma de pagamento escolhida foi Pix");
//             break;
//         case 3:
//             alert("Ok, a forma de pagamento escolhida foi PicPay");
//             break;
//         case 4:
//             alert("Ok, a forma de pagamento escolhida foi Dinheiro");
//             let troco = parseInt(
//                 prompt("O entregador deverá levar troco?\n 1 - Sim\n 2 - Não")
//             );
//             if (troco == 1) {
//                 let valorParaTroco = parseInt(
//                     prompt("Digite o valor que você dará ao entregador: ")
//                 );
//                 valorParaLevar = valorParaTroco - valorTotal;
//             } else {
//                 alert("Ok, o dinheiro está certinho");
//             }
//             break;

//         default:
//             alert("A opção digitada não corresponde com as alternativas");
//             formaDePagamento();
//             break;
//     }
// }
// document.write(`O valor total até agora é ${valorTotal}`);


const saboresPizza = [
    {
      id: 1,
      sabor: 'calabresa',
      descrição: 'Mussarela, Calabresa e cebola',
    },
    {
      id: 2,
      sabor: 'Quatro queijos',
      descrição: 'Mussarela, Cheddar, Parmesão e Prato',
    },
    {
      id: 3,
      sabor: 'Frango com Catupiry',
      descrição: 'Mussarela, Frango e Catupiry',
    },
    {
      id: 4,
      sabor: 'Portuguesa',
      descrição: 'Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola',
    },
    {
      id: 5,
      sabor: 'Camarão',
      descrição: 'Mussarela, Camarão, Salsinha e Cebolinha',
    },
    {
      id: 6,
      sabor: 'Carne Seca',
      descrição: 'Mussarela, Carne seca e cream cheese',
    },
    {
      id: 7,
      sabor: 'Lombo Canadense',
      descrição: 'Mussarela, Lombo Canadense, Tomate, Orégano, Cebola',
    },
    {
      id: 8,
      sabor: 'X-Fritas',
      descrição:
        'Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita',
    },
  ];
  
//   function selecionaSabor() {
//     if (
//       prompt(
//         'Você pode escolher um sabor ou meio a meio? \n Digite 1 para um sabor ou 2 para dois sabores'
//       ) == 2
//     ) {
//       var meioAMeio = true;
//       var indicePizza = parseInt(
//         prompt(
//           'Temos sabores deliciosos! \nInforme seu primeiro sabor: \nCalabresa(digite 1)\n4Queijos(digite 2)\nFrango com Catupiry(digite 3)\nPortuguesa(digite 4)\nCamarão(digite 5)\nCarne Seca(digite 6)\nLombo Canadense(digite 7)\nX-Fritas(digite 8)'
//         )
//       );
//       var indicePizza2 = parseInt(
//         prompt(
//           'Temos sabores deliciosos! \nInforme seu primeiro sabor: \nCalabresa(digite 1)\n4Queijos(digite 2)\nFrango com Catupiry(digite 3)\nPortuguesa(digite 4)\nCamarão(digite 5)\nCarne Seca(digite 6)\nLombo Canadense(digite 7)\nX-Fritas(digite 8)'
//         )
//       );
//       document.write(
//         'O sabor escolhido foi: ' +
//           saboresPizza[indicePizza] +
//           ' e ' +
//           saboresPizza[indicePizza2]
//       );
//     } else {
//       var meioAMeio = false;
//       var indicePizza = parseInt(
//         prompt(
//           'Temos sabores deliciosos! \nInforme seu primeiro sabor: \nCalabresa(digite 1)\n4Queijos(digite 2)\nFrango com Catupiry(digite 3)\nPortuguesa(digite 4)\nCamarão(digite 5)\nCarne Seca(digite 6)\nLombo Canadense(digite 7)\nX-Fritas(digite 8)'
//         )
//       );
//       document.write('O sabor escolhido foi: ' + saboresPizza[indicePizza]);
//     }
//   }
  
//   selecionaSabor();
// var pessoa = {
//     nome:"",
//     celular:""
// }

// var pizzas = [
//     {id:1, descricao:"Pequena", tamanho: 20, valor: 25.0},
//     {id:2, descricao:"media", tamanho: , valor: 20.0},
//     {id:3, descricao:"Famila", tamanho: 35, valor: 25.0}
// ]


// var tamanho =  prompt("Digite o tamanho da pizza.");

// var pedido = {
//     pessoa: pessoa,
//     tamanhoPizza: pizzas.find(pizza => pizza.id == tamanho)

// }

// WEBERSON RODRIGUES DE ARAUJO OLIVEIRA14:17

// var bebidas= [
//     {id:1, descricao:"Coco Cola", tamanho: '2lt', valor: 12.0},
//     {id:2, descricao:"Coco Cola", tamanho: '2lt', valor: 12.0},
//     {id:3, descricao:"Coco Cola", tamanho: '2lt', valor: 12.0},
// ]


// var bordas = [
//     {id:1, descricao:"Gorgonzola", tamanho: '2cm', valor: 8.0},
// ]

// var bordas = [
//     {id:1, descricao:"Credito ou Debito", troco: 0},
//     {id:1, descricao:"Dinheiro", troco: 100},
// ]
  