var frase = $('.frase').text()
numPalavras = frase.split(' ').length
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numPalavras)

var campo = $(".campo-digitacao")
campo.on('click', function (){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(' ').length
    var contadorPalavras = $('#contador-palavras')
    contadorPalavras.text(qtdPalavras)
})