/*
Forma de Pagamento
(Cartão - Debito ou Credito)
Pix
PicPay
Dinheiro 
 */
var valorTotal = 78.9;
formaDePagamento();
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
            let troco = parseInt(
                prompt("O entregador deverá levar troco?\n 1 - Sim\n 2 - Não")
            );
            if (troco == 1) {
                let valorParaTroco = parseInt(
                    prompt("Digite o valor que você dará ao entregador: ")
                );
                valorParaLevar = valorParaTroco - valorTotal;
            } else {
                alert("Ok, o dinheiro está certinho");
            }
            break;

        default:
            alert("A opção digitada não corresponde com as alternativas");
            formaDePagamento();
            break;
    }
}
document.write(`O valor total até agora é ${valorTotal}`);
