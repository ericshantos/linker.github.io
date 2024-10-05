let botoes = document.querySelectorAll('.btn-link');
/**
 * Adiciona um ouvinte de eventos de clique a cada botão na lista de botões.
 * Quando um botão é clicado, a função `clicarBotao` é chamada.
 * 
 * @param {NodeListOf<HTMLElement>} botoes - A lista de elementos de botão a serem tratados.
 */
botoes.forEach(function(botao) {
    botao.addEventListener('click', clicarBotao);
});

/**
 * Manipula o evento de clique em um botão, aplicando uma classe CSS por um breve período.
 * 
 * Quando um botão é clicado, a classe 'posicao-inicial' é adicionada ao botão,
 * fazendo uma alteração visual. Após 100 milissegundos, a classe é removida,
 * revertendo a alteração visual.
 * 
 * @param {MouseEvent} event - O objeto de evento do clique, contendo informações sobre o evento.
 */
function clicarBotao(event) {
    const botaoClicado = event.target;

    // Adiciona a classe 'posicao-inicial' ao botão clicado
    botaoClicado.classList.add('posicao-inicial');

    // Remove a classe 'posicao-inicial' após 100 milissegundos
    setTimeout(() => {
        botaoClicado.classList.remove('posicao-inicial');
    }, 100);
}
