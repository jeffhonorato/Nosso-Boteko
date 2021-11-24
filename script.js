const btnCardapio = document.querySelectorAll(".cardapio-itens li");
const modalCardapio = document.querySelectorAll(".js-cardapio section");

if(btnCardapio.length && modalCardapio.length) {
    modalCardapio[0].classList.add('ativo');

    const activeTab = (index) => {
        modalCardapio.forEach(section => {
            section.classList.remove("ativo")
        });
        modalCardapio[index].classList.add("ativo");
    }
  
    btnCardapio.forEach((itemBtn, index) => {
       
        itemBtn.addEventListener('click', () => {
            activeTab(index);
        });
    });
}





