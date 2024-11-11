/**
 * Módulo ElementCreator
 * 
 * Este módulo exporta a classe `ElementCreator`, que oferece um método estático
 * para simplificar a criação de elementos HTML com classes CSS associadas.
 */

class ElementCreator {

    /**
     * Método estático create
     * 
     * Cria um elemento HTML com as classes especificadas.
     * 
     * @static
     * @param {string} tag - O nome da tag do elemento a ser criado (ex.: 'div', 'span').
     * @param {...string} classes - Lista de classes CSS a serem aplicadas ao elemento.
     * @returns {HTMLElement} - O elemento HTML criado com as classes aplicadas.
     * 
     * @example
     * // Cria um elemento <div> com as classes 'container' e 'main'
     * const div = ElementCreator.create('div', 'container', 'main');
     */
    static create(tag, ...classes) {
        const element = document.createElement(tag);
        classes.forEach(className => {
            element.classList.add(className);
        });
        return element;
    }
}

export default ElementCreator;
