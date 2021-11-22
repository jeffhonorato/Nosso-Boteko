const btnCardapio = document.querySelectorAll(".lista-cardapio a");
const modalCardapio = document.querySelectorAll(".js-cardapio");

console.log(btnCardapio)

const activeTab = (index) => {
    // btnCardapio.prevent.preventDefault();

    modalCardapio.forEach(section => {
        section.classList.remove("ativo")
    });

    modalCardapio[index].classList.add("ativo");
}

btnCardapio.forEach((itemBtn, index) => {
    itemBtn.addEventListener('click', () => {
        activeTab(index)
    });
})






