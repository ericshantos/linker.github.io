/**
 * Módulo commonButtons
 * 
 * Este módulo exporta um array de objetos, onde cada objeto representa um botão
 * com propriedades de `textContent` e `link`. Esse array pode ser utilizado
 * para gerar uma lista de botões com links para perfis sociais ou outras URLs.
 */

let commonButtons = [
    {
        /**
         * Objeto botão padrão para o LinkedIn
         * 
         * @property {string} textContent - O texto a ser exibido no botão.
         * @property {string} link - O URL para o perfil do LinkedIn.
         */
        textContent: "LinkedIn",
        link: "https://www.linkedin.com/in/eric-sh"
    },
    {
        /**
         * Objeto botão padrão para o GitHub
         * 
         * @property {string} textContent - O texto a ser exibido no botão.
         * @property {string} link - O URL para o perfil do GitHub.
         */
        textContent: "GitHub",
        link: "https://www.github.com/ericshantos"
    }
];

export default commonButtons;