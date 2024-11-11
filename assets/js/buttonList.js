/**
 * Módulo ButtonList
 * 
 * Este módulo define a classe ButtonList, que é responsável por criar e renderizar
 * uma lista de botões com links. Cada instância de ButtonList representa um botão
 * com um texto e um link.
 * 
 * Dependências:
 * - elementCreator.js: fornece a função de criação de elementos `ElementCreator.create`.
 */

import ElementCreator from "./elementCreator.js";

/**
 * Classe ButtonList
 * 
 * @class
 * A classe ButtonList permite a criação de botões vinculados a um elemento de lista (`<li>`),
 * que são renderizados em um contêiner de lista de links.
 */
class ButtonList {
    /**
     * Cria uma instância de ButtonList.
     * 
     * @constructor
     * @param {string} textContent - O texto a ser exibido no botão.
     * @param {string} link - O URL para o qual o botão deve redirecionar ao ser clicado.
     */
    constructor(textContent, link) {
        this.textContent = textContent;
        this.link = link;
    }

    /**
     * renderButtons
     * 
     * Método que renderiza o botão dentro do elemento com id `link-list`.
     * Ele cria um elemento de lista (`<li>`) para o botão e o anexa ao contêiner.
     */
    renderButtons() {
        const linkList = document.getElementById('link-list');
        const listItem = this._createButtonElement();
        linkList.appendChild(listItem);
    }

    /**
     * _createButtonElement
     * 
     * Método privado que cria e estrutura o elemento do botão.
     * 
     * @private
     * @returns {HTMLElement} - O elemento de lista (`<li>`) contendo o botão e o link.
     */
    _createButtonElement() {
        const li = ElementCreator.create('li', 'link');

        const a = ElementCreator.create('a');
        a.href = this.link;

        const button = ElementCreator.create('button', 'link-button');
        button.textContent = this.textContent;

        a.appendChild(button);
        li.appendChild(a);
        return li;
    }
}

export default ButtonList;
