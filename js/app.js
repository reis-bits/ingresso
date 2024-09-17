function navegacaoTeclado() {
    const inputQtd = document.getElementById('qtd')

    inputQtd.addEventListener('keydown', (event) =>{
        if(event.key == 'Enter') {
            event.preventDefault();
            comprar();
        }
    })
}

window.onload = navegacaoTeclado;

// Função que realiza a compra do ingresso pelo tipo.
function comprar() {
    // Recupera o tipo do ingersso definido no HTML.
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    // Recupera a quantidade de ingressos escrita no HTML
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    // Define como comprar e alterar o valor pelo tipo do ingresso.
    if (tipoIngresso == 'pista') {
        // Padrão repetitivo que chama a função comprarPorTipo e executa com dois parâmetros, um com a variável de quantidade e outro com a de tipo.
        comprarPorTipo(quantidadeIngresso, tipoIngresso);
    }

    if (tipoIngresso == 'superior') {
        comprarPorTipo(quantidadeIngresso, tipoIngresso);
    }

    if (tipoIngresso == 'inferior') {
        comprarPorTipo(quantidadeIngresso, tipoIngresso);
    }
}

// Função comprarPorTipo definida com dois parâmetros, qtd e tipo, substituídas pela quantidade e tipo do ingresso. 
function comprarPorTipo(qtd, tipo) {
    // Variáveis com a quantidade dos ingressos e seus tipos.
    let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

    // Bloco de código porco que eu deveria usar uma função auxiliar ou um switch pra ficar mais limpo, mas funciona, é isso que importa.
    if (tipo === 'pista' && qtd > qtdPista) {
        // Padrão repetitivo que diz: se o tipo do ingresso for x, e a quantidade for maior que a que tem desse ingresso, diga que a quantidade  é insuficiente e não faça nada.
        alert('Quantidade insuficiente');
    } else if (tipo === 'pista' && qtd <= qtdPista) {
        // Do contrário, tira a quantidade definida desse tipo de ingresso e ajuste o HTML.
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