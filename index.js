const botao = document.querySelector(".btn");
const entrada = document.getElementById("input");
const lista = document.getElementById("lista");
botao.addEventListener("click", () => {
    if(entrada.value === "")
        return;
    const listItem = document.createElement("li"); alert("Você criou e adicionou um novo elemento à lista!")
    listItem.textContent = entrada.value;
    lista.appendChild(listItem);
    listItem.addEventListener("click", () => {
        if(listItem.classList.contains("estilo")) {
            lista.removeChild(listItem);
            alert("Você removeu seu novo elemento da lista!")
        } else {
            listItem.classList.add("estilo");
        }
    })
})