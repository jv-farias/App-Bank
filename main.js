var cliente = prompt("Informe seu Nome")
if (cliente !== null && cliente !== ""){
    var nomeCliente = document.querySelector("#nomeCliente");
    nomeCliente.textContent = `${cliente}`
}

var saldo = prompt("Digite o Valor")
var saldoReal = saldo;
//var recebe = parseFloat(saldo.replace("R$",""))
if (saldo !== null && saldo !== ""){
    var saldoCliente = document.querySelector("#saldo-valor");
    saldoCliente.textContent = ` ${saldo}`
}

function gastos(){


function atualizarSaldo() {
    document.querySelector("saldo-valor").textContent = saldo;
}

// Função para lidar com o gasto de comida
function gastoComida() {
    const valorComida = 1;
    
    if (saldoReal >= valorComida) {
        saldoReal = saldoReal - valorComida;
        atualizarSaldo();
    } else {
        alert("Ops!!! Tá Liso?");
    }
}
atualizarSaldo();
// Adicione ouvintes de eventos aos botões de gastos
document.getElementById("comida").addEventListener("click", gastoComida);



}
