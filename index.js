document.addEventListener("DOMContentLoaded", () => {
const botao = document.querySelector(".btn");
const entrada = document.querySelector(".input")
const lista = document.getElementById("lista");
botao.addEventListener("click", () => {
    if(entrada.value === "")
        return;
    const novoItem = document.createElement("li");
    novoItem.textContent = entrada.value;
    lista.appendChild(novoItem);
    lista.addEventListener("click", (event) => {
        const itemRemovido = event.target.closest("li")
        if(itemRemovido) {
            lista.removeChild(itemRemovido);
        }
    })
})
})