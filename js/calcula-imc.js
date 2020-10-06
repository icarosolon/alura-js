var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(paciente => {

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    tdImc = paciente.querySelector('.info-imc');
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

    if (!pesoValido) {
        console.log('peso inválido');
        tdPeso.textContent = tdPeso.textContent + '(Peso Inválido!)';
        paciente.classList.add('paciente-invalido');
    }
    if (!alturaValida) {
        console.log('altura inválida');
        tdAltura.textContent = tdAltura.textContent + '(Altura Inválida!)';
        paciente.classList.add('paciente-invalido');
    }

});

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPaciente(paciente) {
    var erros = validaCamposVazios(paciente);

    if (!validaPeso(paciente.peso))
        erros.push("O peso é inválido!");


    if (!validaAltura(paciente.altura))
        erros.push("A altura é inválida!");

    return erros;
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function validaCamposVazios(paciente) {
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ficar em branco!");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ficar em branco!");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ficar em branco!");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ficar em branco!");
    }
    return erros;
}