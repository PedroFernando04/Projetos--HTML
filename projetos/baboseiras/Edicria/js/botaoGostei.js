document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".articles_style").forEach((artigo) => {
        const botaoGostei = document.createElement("button");
        botaoGostei.textContent = "Gostei 👍";
        botaoGostei.style.marginTop = "10px";

        botaoGostei.addEventListener("click", () => {
            botaoGostei.disabled = true;
            botaoGostei.textContent = "Obrigado! 😊";
        });

        artigo.appendChild(botaoGostei);
    });
});
