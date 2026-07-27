document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".skill-node");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalContent = document.getElementById("modal-content");
    const closeBtn = document.getElementById("close-btn");

    // Adiciona evento de clique em todos os pontos da árvore
    nodes.forEach(node => {
        node.addEventListener("click", () => {
            // Pega todo o HTML (Rich Text) de dentro da .skill-description daquele nó específico
            const descriptionHTML = node.querySelector(".skill-description").innerHTML;
            
            // Joga esse HTML para dentro da janela do Modal
            modalContent.innerHTML = descriptionHTML;
            
            // Ativa a tela escura
            modalOverlay.classList.add("active");
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.classList.remove("active");
    };

    // Fecha ao clicar no botão "X"
    closeBtn.addEventListener("click", closeModal);

    // Fecha ao clicar fora da caixa do modal (no fundo escuro)
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
});
