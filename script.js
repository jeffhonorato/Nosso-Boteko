const btnCardapio = document.querySelectorAll(".menu-cardapio li");
const modalCardapio = document.querySelectorAll(".modal-cardapio .js-cardapio");

// console.log(btnCardapio)
// console.log(btnCardapio)

const activeTab = (index) => {
    modalCardapio.forEach(section => {
        section.classList.remove("ativo")
    });
    modalCardapio[index].classList.add("ativo");
    
}


btnCardapio.forEach((itemBtn, index) => {
    // btnCardapio.preventDefault;
    itemBtn.addEventListener('click', () => {
        activeTab(index)
    });
})






