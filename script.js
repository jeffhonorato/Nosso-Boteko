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

// const tabMenu = document.querySelectorAll('.js-tabmenu li');
// const tabContent = document.querySelectorAll('.js-tabcontent section');

// if(tabMenu.length && tabContent.length) {
//   tabContent[0].classList.add('ativo');

//   function activeTab(index) {
//     tabContent.forEach((section) => {
//       section.classList.remove('ativo');
//     });
//     tabContent[index].classList.add('ativo');
//   }

//   tabMenu.forEach((itemMenu, index) => {
//     itemMenu.addEventListener('click', () => {
//       activeTab(index);
//     });
//   });
// }






