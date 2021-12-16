// BANNER ROTATIVO.
let tempo = 3000;
let colecaoDeImagens = 0;
let imagens = document.querySelectorAll(".patrocinios-banner");
let maximoDeImagens = imagens.length; 

function proximaImagem() {

    imagens[colecaoDeImagens].classList.remove("selected-banner")

    colecaoDeImagens++; 
    if(colecaoDeImagens >= maximoDeImagens) {
        colecaoDeImagens = 0;
    }

    imagens[colecaoDeImagens].classList.add("selected-banner");
}


function start() {
    setInterval(() => {
        //troca de imagem
        proximaImagem()
    }, tempo)
}

window.addEventListener("load", start)




// Adaptando o menu para MOBILE
const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
 
}

btnMobile.addEventListener('click', toggleMenu);

// ESCONDE E APARECE CARDAPIO
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









