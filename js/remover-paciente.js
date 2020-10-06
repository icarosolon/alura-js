var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function (event) {
    event.target.parentNode.classList.add("fade-out");
    var alvo = event.target; //td clicada
    var paiDoAlvo = event.target.parentNode; //selecionando TR

    setTimeout(function () {
        paiDoAlvo.remove(); //removendo TR
    }, 500);

})