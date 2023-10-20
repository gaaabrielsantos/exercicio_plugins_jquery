
$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00 000-000')

    //validação de formulario
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: false
            },
            telefone: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu e-mail',
            endereco: 'Por favor, insira o seu endereço'
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    })