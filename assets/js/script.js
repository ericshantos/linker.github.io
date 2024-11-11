/**
 * Módulo responsável por criar e renderizar uma lista de botões com base
 * nos dados fornecidos pelo commonButtons.
 * 
 * Dependências:
 * - buttons.js: contém uma lista de objetos representando botões com propriedades textContent e link.
 * - buttonList.js: exporta a classe ButtonList que permite a criação e renderização de botões.
 */

import commonButtons from "./buttons.js";
import ButtonList from "./buttonList.js";

/**
 * Função principal que é executada quando o conteúdo do documento é carregado.
 * Para cada botão definido em `commonButtons`, cria uma instância da classe ButtonList,
 * passando o texto e o link de cada botão, e então renderiza o botão na interface.
 */
document.addEventListener('DOMContentLoaded', function() {
    commonButtons.forEach(btn => {
        const button = new ButtonList(btn.textContent, btn.link);
        button.renderButtons();
    });
});
