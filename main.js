var cliente = prompt("Informe seu Nome")
if (cliente !== null && cliente !== "") {   
    var nomeCliente = document.querySelector("#nomeCliente");
    nomeCliente.innerHTML = `${cliente}`
}

var saldo = prompt("Digite o Valor")
if (saldo !== null && saldo !== "") {
    var saldoCliente = document.querySelector("#saldo-valor");
    saldoCliente.innerHTML = `${saldo}`
}

function atualizarSaldo() {
    document.querySelector("#saldo-valor").innerHTML = `R$ ${saldo}`;
}

function gastoComida() {
    const valorComida = 50;
    if (saldo >= valorComida) {
        saldo = saldo - valorComida; // saldo -= valorComida;
        atualizarSaldo();
    } else {
        alert("Ops!!! Tá Liso?");
    }
}

atualizarSaldo();
document.getElementById("comida").addEventListener("click", gastoComida);