document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".mostrarDescricao").forEach(botao => {
        botao.addEventListener("click", () => {
            const resumo = botao.closest(".resumo");
            const completa = resumo.nextElementSibling;

            if (completa.style.display === "none") {
                completa.style.display = "block";
                botao.textContent = "[Esconder descrição]";
            } else {
                completa.style.display = "none";
                botao.textContent = "[Mostrar descrição]";
            }
        });
    });
});
