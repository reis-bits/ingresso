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
    // Recupera a quantidade de ingressos escrita no HTML
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    // Recupera o tipo do ingersso definido no HTML.
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

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


    //Bloco de código com validações de tipo e quantidade que realiza a compra de fato, selecionando o tipo e customizando o HTML.
    switch(tipo) {
        case 'pista':
        if(qtd > qtdPista || isNaN(qtd) || qtd== 0) {
            alert('Digite uma quantidade válida');
        } else {
            alert('Compra realizada!');
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').innerHTML = qtdPista;
        }
        break;
        case 'superior':
            if(qtd > qtdSuperior || isNaN(qtd) || qtd== 0) {
                alert('Digite uma quantidade válida');
            } else {
                alert('Compra realizada!');
                qtdSuperior = qtdSuperior - qtd;
                document.getElementById('qtd-superior').innerHTML = qtdSuperior;
            }
        break;
        case 'inferior':
            if(qtd > qtdInferior || isNaN(qtd) || qtd== 0) {
                alert('Digite uma quantidade válida');
            } else {
                alert('Compra realizada!');
                qtdInferior = qtdInferior - qtd;
                document.getElementById('qtd-inferior').innerHTML = qtdInferior;
            }
        break;
        default: 
            alert('Selecione um ingresso e digite a quantidade!');        
        }

}