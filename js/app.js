function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPorTipo(quantidadeIngresso, tipoIngresso);
    }

    if (tipoIngresso == 'superior') {
        comprarPorTipo(quantidadeIngresso, tipoIngresso);
    }

    if (tipoIngresso == 'inferior') {
        comprarPorTipo(quantidadeIngresso, tipoIngresso);
    }
}

function comprarPorTipo(qtd, tipo) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

    if (tipo === 'pista' && qtd > qtdPista) {
        alert('Quantidade insuficiente');
    } else if (tipo === 'pista' && qtd <= qtdPista) {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').innerHTML = qtdPista;
        alert('Compra realizada!');
    } else if (tipo === 'superior' && qtd > qtdSuperior) {
        alert('Quantidade insuficiente');
    } else if (tipo === 'superior' && qtd <= qtdSuperior) {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
        alert('Compra realizada!');
    } else if (tipo === 'inferior' && qtd > qtdInferior) {
        alert('Quantidade insuficiente');
    } else if (tipo === 'inferior' && qtd <= qtdInferior) {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
        alert('Compra realizada!');
    }
}