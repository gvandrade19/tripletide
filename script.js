// Declarar e inicializar as variáveis no início do script
let currentLocation = 'seixal';
let currentIndex = 0;
let slideIndex = 0;



// Definição das imagens para cada localização
const images = {
    seixal: ['images/boa_alterada.jpeg', 'images/seixal2.jpeg', 'images/seixal3.jpeg'],
    saovicente: ['images/IMG_2755.jpeg', 'images/IMG_2803.jpeg', 'images/IMG_8376.jpeg'],
    garajau: ['images/IMG_9695.jpeg', 'images/IMG_9717.jpeg', 'images/IMG_9719.jpeg']
};

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var prevScrollpos = window.pageYOffset;

    // Inicia com o cabeçalho oculto
    header.style.top = "-70px"; // Esconde o cabeçalho

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        // Mostra o cabeçalho se o usuário rolar para baixo e esconde se voltar ao topo
        if (currentScrollPos > 0) {
            header.style.top = "0"; // Mostra o cabeçalho
        } else {
            header.style.top = "-70px"; // Esconde o cabeçalho
        }
        prevScrollpos = currentScrollPos;
    }
});
// Função para alternar a visibilidade do sidebar
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.classList.contains('open')) {
        sidenav.classList.remove('open');
        sidenav.style.width = '0';
    } else {
        sidenav.classList.add('open');
        sidenav.style.width = '100%';
    }
}
// Configura o evento de clique para abrir e fechar o sidebar
document.querySelector('.menu-button').onclick = toggleNav;

// Adiciona o comportamento de rolagem suave ao clicar no logo
document.querySelector('.header-logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fecha o sidebar automaticamente ao clicar em um dos links
document.querySelectorAll('.sidenav a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById("mySidenav").classList.remove('open');
        document.getElementById("mySidenav").style.width = '0';
    });
});


function initMap() {
    // Localização da empresa (exemplo: latitude e longitude de São Vicente, Madeira)
    var empresaLocation = { lat: 32.8169, lng: -17.0456 };

    // Criar o mapa e centralizar na localização da empresa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: empresaLocation
    });

    // Adicionar marcador na localização da empresa
    var marker = new google.maps.Marker({
        position: empresaLocation,
        map: map,
        title: 'Nome da Empresa'
    });
}

// Função para exibir as imagens da localização selecionada
function showLocation(locationId) {
    currentLocation = locationId;
    currentIndex = 0;
    updateImage();
    

    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.querySelector(`.tab-button[onclick="showLocation('${locationId}')"]`).classList.add('active');
}

function changeImage(direction) {
    console.log('Current Index before change:', currentIndex);  // Para depuração
    currentIndex += direction;
    console.log('Current Index after change:', currentIndex);  // Para depuração

    if (currentIndex < 0) {
        currentIndex = images[currentLocation].length - 1;
    } else if (currentIndex >= images[currentLocation].length) {
        currentIndex = 0;
    }

    updateImage();
}

function updateImage() {
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[currentLocation][currentIndex];
}

// Inicialização: mostrar a localização inicial e imagem
document.addEventListener('DOMContentLoaded', () => {
    showLocation('seixal');
});


/***************************MERCHANDISE****************************/
function moveSlide(step) {
    const slider = document.querySelector('.merch-slider');
    const images = document.querySelectorAll('.merch-container .image-container2');
    const visibleImages = 3; // Mostrar 2 imagens por vez
    const totalImages = images.length;
    
    // Atualizar o índice do slide
    slideIndex += step;
    
    // Verificar os limites e fazer o loop
    if (slideIndex < 0) {
        slideIndex = totalImages - visibleImages;
    } else if (slideIndex >= totalImages-1) {
        slideIndex = 0;
    }
    
    // Mover o slider
    slider.style.transform = `translateX(-${slideIndex * (100 / visibleImages)}%)`;
}