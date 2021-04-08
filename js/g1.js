
var pizzas = [
    {id:1, descricao:"Pequena", tamanho: 20, valor: 25.0},
    {id:2, descricao:"Media", tamanho: 25, valor: 30.0},
    {id:3, descricao:"Gigante", tamanho: 35, valor: 40.0},
    {id:4, descricao:"Familia", tamanho: 45, valor: 45.0}
];

var bordas = [
    {id: 1, tipo: "Gorgonzola", valor: 10.00},
    {id: 2, tipo: "Provolone", valor: 8.00},
    {id: 3, tipo: "Catupiry", valor: 5.00},
    {id: 4, tipo: "Cheddar", valor: 5.00},
    {id: 5, tipo: "Sem Boda", valor: 0.00}
];

var Bebidas = [
    { id: 1, modelo: "Coca Cola", preço: 12.00 },
    { id: 2, modelo: "Fanta", preço: 10.00 },
    { id: 3, modelo: "Guaraná", preço: 10.00 },
    { id: 4, modelo: "H2O", preço: 8.00 },
    { id: 5, modelo: "Dell Valle", preço: 7.00 }
];

var pagamento = [
    { id: 1, descrição: "Cartão de crédito ou débito" },
    { id: 2, descricao: "Pix" },
    { id: 3, descrição: "PicPay" },
    { id: 4, descrição: "Dinheiro" }
];

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

var entrada = [
    {id: 1, tipo: "Retirada no Balcão", valor: 0.00},
    {id: 2, tipo: "Delivery", valor: 5.00}
];

const cliente = {
    nome: "",
    celular: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    referencia: "",
};

var pedirPizza = parseInt("Digite o tamanho que deseja \n 1- para pequena \n 2- para Media \n 3- para gigante \n 4- para familia")
var pedirBebidas = parseInt("Digite qual bebida você deseja: \n 1 - Coca Cola - R$ 12.00 \n 2 - Fanta - R$ 10.00 \n 3 - Guaraná - R$ 10.00 \n 4 - H2O - R$ 8.00 \n 5 - Dell Valle - R$ 7.00")
var formaDePagamento = parseInt(prompt("Digite qual será a forma de pagamento: \n 1 - Cartão de Crédito ou Débito \n 2 - Pix \n 3 - PicPay \n 4 - Dinheiro"))]
var saborPizza = prompt("Digite o sabor da Pizza que deseja \n 1- Calabresa: Mussarela, Calabresa e cebola \n 2- Quatro queijos: Mussarela, Cheddar, Parmesão e Prato \n 3- Frango com Catupiry: Mussarela, Frango e Catupiry \n 4- Portuguesa: Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n 5- Camarão: Mussarela, Camarão, Salsinha e Cebolinha \n 6- Carne Seca: Mussarela, Carne seca e cream cheese \n 7- Lombo Canadense: ")