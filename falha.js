// Apaga o elemento q fica por cima de tudo
jQuery('body > span:first').remove()

// recupera o scroll do body
jQuery('body').attr('style', '');

// Limpa os Intervals que ficam dando scroll pro topo da pagina
var highestTimeoutId = setTimeout(";");
for (var i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
