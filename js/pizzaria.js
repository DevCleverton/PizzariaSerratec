/*
Forma de Pagamento
(Cartão - Debito ou Credito)
Pix
PicPay
Dinheiro 
 */

function formaDePagamento() {
    pagamento = parseInt(
        prompt(
            "Digite a forma de pagamento desejada: \n 1 - Cartão de Crédito ou Débito\n 2 - Pix\n 3 - PicPay\n 4 - Dinheiro"
        )
    );
    switch (pagamento) {
        case 1:
            alert(
                "Ok, a forma de pagamento escolhida foi Cartão de Crédito ou Débito"
            );
            break;
        case 2:
            alert("Ok, a forma de pagamento escolhida foi Pix");
            break;
        case 3:
            alert("Ok, a forma de pagamento escolhida foi PicPay");
            break;
        case 4:
            alert("Ok, a forma de pagamento escolhida foi Dinheiro");
            let valorParaTroco = parseInt(
                prompt("Digite o valor para troco: ")
            );
            valorParaLevar = valorParaTroco - valorTotal;
            break;

        default:
            break;
    }
}
