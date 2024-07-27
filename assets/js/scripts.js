document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const btnEspecial = document.querySelector('.btn-especial');
    let currentIndex = 0;

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
