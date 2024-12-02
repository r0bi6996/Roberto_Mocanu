
const monitorizareResurse = document.getElementById('monitorizare-resurse');
const slideImage = document.getElementById('slideImage');


const images = [
    'cpu.png',
    'memorie.png',
    'servicii.png'
];


function startSlideshow() {
    let index = 0;
    const interval = setInterval(() => {
        slideImage.src = images[index];  
        index = (index + 1) % images.length;
    }, 3000);
}


monitorizareResurse.addEventListener('dblclick', startSlideshow);
