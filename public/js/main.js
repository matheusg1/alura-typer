var frase = $('.frase').text()
numPalavras = frase.split(' ').length
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numPalavras)

var campo = $(".campo-digitacao")
campo.on('input', function () {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1

    var contadorPalavras = $('#contador-palavras')
    contadorPalavras.text(qtdPalavras)

    var qtdCaracteres = conteudo.length
    $('#contador-caracteres').text(qtdCaracteres)
})

var tempoRestante = $('#tempo-digitacao').text()

campo.one('focus', function () {
    var cronometroId = setInterval(() => {
        tempoRestante--
        $('#tempo-digitacao').text(tempoRestante)

        if (tempoRestante < 1) {
            campo.attr("disabled", true)
            clearInterval(cronometroId)
        }
    }, 1000);
})