/**
 * Este script gerencia a exibição de slides e a atualização do texto do botão especial.
 * Quando a página é carregada, o script inicializa os slides e configura o botão para navegar entre eles.
 * O botão muda seu texto dependendo do slide atual.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Container dos slides.
     * @type {HTMLElement}
     */
    const slidesContainer = document.querySelector('.slides');

    /**
     * Lista de todos os elementos de slide.
     * @type {NodeListOf<HTMLElement>}
     */
    const slides = document.querySelectorAll('.slide');

    /**
     * Referência ao botão especial que altera o texto e navega entre os slides.
     * @type {HTMLElement}
     */
    const btnEspecial = document.querySelector('.btn-especial');

    /**
     * Índice do slide atual.
     * @type {number}
     */
    let currentIndex = 0;

    /**
     * Função para exibir o slide especificado.
     * Atualiza a transformação do container de slides e o texto do botão com base no índice do slide.
     * @param {number} index - O índice do slide a ser exibido.
     */
    function showSlide(index) {
        const newTransformValue = -index * 100;
        slidesContainer.style.transform = `translateX(${newTransformValue}%)`;

        // Alterar o texto do botão com base no slide atual
        if (index === slides.length - 1) {
            btnEspecial.textContent = 'Voltar';
        } else {
            btnEspecial.textContent = 'Sobre mim';
        }
    }

    /**
     * Adiciona um ouvinte de eventos de clique ao botão especial.
     * Navega para o próximo slide ou volta ao primeiro slide se estiver no último.
     */
    btnEspecial.addEventListener('click', () => {
        if (currentIndex === slides.length - 1) {
            currentIndex = 0; // Voltar ao primeiro slide se estiver no último
        } else {
            currentIndex++;
        }
        showSlide(currentIndex);
    });

    // Mostrar o primeiro slide ao carregar a página
    showSlide(currentIndex);
});
