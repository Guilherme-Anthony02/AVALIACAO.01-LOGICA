const formulario = document.getElementById("formulario");
const dados = document.getElementById("dadosEmpresa");

const empresas = [];

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const quantidadeRecolhida = document.getElementById("quantidade").value;

    valorTonelada = number(220)

    calculoTotalResiduos = quantidadeRecolhida * valorTonelada








    const empresa = {
    descricao,
    quantidadeRecolhida,
    valorReceber,
    valorPremiacao,
    valorFinal,

    }

    empresas.push(empresa)


    


})
