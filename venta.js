const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
//previus and next gallery.

let imgIndex = 1;

nextGalleryBtn.addEventListener('click',()=>{
    changeNextImage(imageContainer );
})

previusGalleryBtn.addEventListener('click',()=>{
    changepreviusImage(imageContainer );
})

//see modal gallery.
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click',()=>{
    imagesModal.style.display = 'grid';
})

closeModalBtn.addEventListener('click',()=>{
    imagesModal.style.display = 'none';
})

//change principal image  for thumnails

let thumbnails = document.querySelectorAll('.gallery__thumbnail')
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('./images/image-venta-${event.target.id}.jpg')`
    });
});

//chage principal image modal gallery

let modalthumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('./images/image-venta-${event.target.id.slice(-1)}.jpg')`
    });
});

// Mostrar el navbar cuando presiono el menu de hamburgesa

const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});


//funciones.

function changeNextImage(imgcontainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('./images/image-venta-${imgIndex}.jpg')`
}

function changepreviusImage(imgcontainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('./images/image-venta-${imgIndex}.jpg')`
}
