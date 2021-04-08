var resposta = false;
while (resposta == false) {

    var pizzas = [
        {},
        { id: 1, descricao: "Pequena", tamanho: 20, valor: 25.0 },
        { id: 2, descricao: "Media", tamanho: 25, valor: 30.0 },
        { id: 3, descricao: "Gigante", tamanho: 35, valor: 40.0 },
        { id: 4, descricao: "Familia", tamanho: 45, valor: 45.0 }
    ];


    var bordas = [
        {},
        { id: 1, tipo: "Gorgonzola", valor: 10.00 },
        { id: 2, tipo: "Provolone", valor: 8.00 },
        { id: 3, tipo: "Catupiry", valor: 5.00 },
        { id: 4, tipo: "Cheddar", valor: 5.00 },
        { id: 5, tipo: "Sem Borda", valor: 0.00 }
    ];

    var bebidas = [
        {},
        { id: 1, modelo: "Coca Cola", valor: 12.00 },
        { id: 2, modelo: "Fanta", valor: 10.00 },
        { id: 3, modelo: "Guaraná", valor: 10.00 },
        { id: 4, modelo: "H2O", valor: 8.00 },
        { id: 5, modelo: "Dell Valle", valor: 7.00 }
    ];

    var pagamento = [
        {},
        { id: 1, descricao: "Cartão de crédito ou débito" },
        { id: 2, descricao: "Pix" },
        { id: 3, descricao: "PicPay" },
        { id: 4, descricao: "Dinheiro" }
    ];

    const saboresPizza = [
        {},
        {
            id: 1,
            sabor: 'calabresa',
            descricao: 'Mussarela, Calabresa e cebola',
        },
        {
            id: 2,
            sabor: 'Quatro queijos',
            descricao: 'Mussarela, Cheddar, Parmesão e Prato',
        },
        {
            id: 3,
            sabor: 'Frango com Catupiry',
            descricao: 'Mussarela, Frango e Catupiry',
        },
        {
            id: 4,
            sabor: 'Portuguesa',
            descricao: 'Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola',
        },
        {
            id: 5,
            sabor: 'Camarão',
            descricao: 'Mussarela, Camarão, Salsinha e Cebolinha',
        },
        {
            id: 6,
            sabor: 'Carne Seca',
            descricao: 'Mussarela, Carne seca e cream cheese',
        },
        {
            id: 7,
            sabor: 'Lombo Canadense',
            descricao: 'Mussarela, Lombo Canadense, Tomate, Orégano, Cebola',
        },
        {
            id: 8,
            sabor: 'X-Fritas',
            descricao:
                'Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita',
        },
    ];

    var entrega = [
        {},
        { id: 1, tipo: "Retirada no Balcão", valor: 0.00 },
        { id: 2, tipo: "Delivery", valor: 5.00 }
    ];

    var resposta = false;
    while (resposta == false) {

        var cliente = {
            nome: "",
            celular: "",
            rua: "",
            numero: "",
            complemento: "",
            bairro: "",
            referencia: "",
        };
        cliente.nome = prompt("Digite seu nome: ");
        cliente.celular = prompt(`${cliente.nome}, digite seu celular: `);

        cliente.rua = prompt(`${cliente.nome},digite sua rua: `);
        cliente.numero = prompt(`${cliente.nome}, digite o seu número: `);
        cliente.complemento = prompt(`${cliente.nome}, digite o complemento do seu endereço: `);
        cliente.bairro = prompt(`${cliente.nome}, digite seu bairro: `);
        cliente.referencia = prompt(`${cliente.nome}, digite uma referência: `);


        var numeroPedido = Math.floor(Math.random() * 100);

        var pedirEntrega = parseInt(prompt("Digite 1 se você deseja retirar no balcão \nDigite 2 para receber em casa (Delivery)"))

        var pedirPizza = parseInt(prompt("Digite o tamanho da pizza que você deseja: \n 1- para pequena(20cm), R$25 \n 2- para Media(25cm), R$30 \n 3- para gigante(35cm), R$40 \n 4- para familia(45cm), R$45"))

        var dominos = parseInt(prompt("Você pode escolher um sabor ou meio a meio? \n Digite 1 para um sabor ou 2 para dois sabores"))

        if (dominos == 1) {
            var saborPizza = parseInt(
                prompt(
                    `${cliente.nome}, temos sabores deliciosos!\nInforme seu sabor:\n(digite 1) Calabresa\n(digite 2) 4Queijos\n(digite 3) Frango com Catupiry\n(digite 4) Portuguesa\n(digite 5) Camarão\n(digite 6) Carne Seca\n(digite 7) Lombo Canadense\n(digite 8) X-Fritas `
                )
            );
        } else {
            var saborPizza = parseInt(
                prompt(
                    `${cliente.nome}, temos sabores deliciosos!\nInforme seu primeiro sabor:\n(digite 1) Calabresa\n(digite 2) 4Queijos\n(digite 3) Frango com Catupiry\n(digite 4) Portuguesa\n(digite 5) Camarão\n(digite 6) Carne Seca\n(digite 7) Lombo Canadense\ndigite 8) X-Fritas`
                )
            );
            var saborPizza2 = parseInt(
                prompt(
                    `${cliente.nome}, temos sabores deliciosos!\nInforme seu segundo sabor:\n(digite 1) Calabresa\n(digite 2) 4Queijos\n(digite 3) Frango com Catupiry\n(digite 4) Portuguesa\n(digite 5) Camarão\n(digite 6) Carne Seca\n(digite 7) Lombo Canadense\n(digite 8) X-Fritas`));

        }


        

        var pedirBordas = parseInt(prompt(`${cliente.nome}, digite o sabor da borda que deseja: \n 1- Gorgonzola - R$10,00\n 2 - Provolone - R$8.00 \n 3 - Catupiry - R$5.00\n 4 - Cheddar - R$5.00\n 5 - Sem Borda`))

        var pedirBebidas = parseInt(prompt(`${cliente.nome}, digite qual bebida você deseja: \n 1 - Coca Cola - R$ 12.00 \n 2 - Fanta - R$ 10.00 \n 3 - Guaraná - R$ 10.00 \n 4 - H2O - R$ 8.00 \n 5 - Dell Valle - R$ 7.00`))

        var formaDePagamento = parseInt(prompt(`${cliente.nome}igite qual será a forma de pagamento: \n 1 - Cartão de Crédito ou Débito \n 2 - Pix \n 3 - PicPay \n 4 - Dinheiro"))

        var somatorio = pizzas[pedirPizza].valor + bordas[pedirBordas].valor + bebidas[pedirBebidas].valor + entrega[pedirEntrega].valor

        if (dominos == 1) {
            var resposta = confirm(`Resumo do seu Pedido:\nNumero do Pedido: ${numeroPedido}\nPizza: ${saboresPizza[saborPizza].sabor}\nTamanho: ${pizzas[pedirPizza].descricao}\nBorda: ${bordas[pedirBordas].tipo}\nBebida: ${bebidas[pedirBebidas].modelo}\nDados do pagamento: ${pagamento[formaDePagamento].descricao}\nEntrega: ${entrega[pedirEntrega].tipo}\n Valor Total: R$${somatorio},00 \n Tempo Estimado de até 90 min.`)
        } else {
            var resposta = confirm(`Resumo do seu Pedido:\nNumero do Pedido: ${numeroPedido}\nPizza: ${saboresPizza[saborPizza].sabor} e ${saboresPizza[saborPizza2].sabor}\nTamanho: ${pizzas[pedirPizza].descricao}\nBorda: ${bordas[pedirBordas].tipo}\nBebida: ${bebidas[pedirBebidas].modelo}\nDados do pagamento: ${pagamento[formaDePagamento].descricao}\nEntrega: ${entrega[pedirEntrega].tipo}\nValor Total: R$${somatorio},00\nTempo Estimado de até 90 min.`)

        }
    }


    var precisaDeTroco = prompt("Precisa de Troco\n 1 - Sim\n 2 - Não")


    if (formaDePagamento == "4") {
        if (precisaDeTroco == "1") {
            var troco = parseFloat(prompt("Precisa de troco para quanto:"))
            total = troco - somatorio
        }
    }

}
alert(`Agradecemos sua preferência senhor(a) ${cliente.nome}`)

document.write(
  `<center><div style="background-color: orange; width: 60%";><h1 style="color: black";>Tamanho: ${pizzas[pedirPizza].descricao} <br> Borda: ${bordas[pedirBordas].tipo} <br> Bebida:${bebidas[pedirBebidas].modelo} <br> Dados do pagamento: ${pagamento[formaDePagamento].descricao} <br> ${entrega[pedirEntrega].tipo}<br> Valor Total: R$${somatorio},00 <br> Tempo Estimado de até 90 min.</h1></div></center>`
);