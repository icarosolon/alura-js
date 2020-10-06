var botao = document.querySelector('#buscar-pacientes');

botao.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();
    var pacientes = [];
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    //abre a conexão

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            resposta = xhr.responseText;
            pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("mensagens-erro")
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});