const MENU = document.querySelector('#menu');
const phone1 = document.querySelector('.phone-button1');
const phone2 = document.querySelector('.phone-button2');
const phone3 = document.querySelector('.phone-button3');
const offscreen1 = document.querySelector(".offscreen1");
const offscreen2 = document.querySelector(".offscreen2");
const offscreen3 = document.querySelector(".offscreen3");
let screen1 = false;
let screen2 = false;
let screen3 = false;
const slider = document.querySelector('.slider');
let slideBlue = false;
const portfolioNav = document.querySelector('.portfolio-navigate');
const portfolioImg = document.querySelector('.img-block');
const imgPortfolio = document.querySelectorAll('.img-portfolio');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

phone1.addEventListener('click', () => {
    screen1 = !screen1;
    screen1 ? offscreen1.style.display = "" : offscreen1.style.display = "none";
});

phone2.addEventListener('click', () => {
    screen2 = !screen2;
    screen2 ? offscreen2.style.display = "" : offscreen2.style.display = "none";
});

phone3.addEventListener('click', () => {
    screen3 = !screen3;
    screen3 ? offscreen3.style.display = "" : offscreen3.style.display = "none";
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
    slideBlue = !slideBlue;
    slideBlue ? slider.style.background = "#648bf0" : slider.style.background = "#f06c64";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-content");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    for (i=0; i< slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

function delLastItem() {
    portfolioImg.querySelectorAll('.img-portfolio').forEach(el => el.classList.remove('last-item'));
}

portfolioNav.addEventListener('click', (event) => {
    portfolioNav.querySelectorAll('input').forEach(el => el.classList.remove('bt-active'));
    event.target.classList.add('bt-active');
    if (event.target.classList[1] == 'bt1') {
        delLastItem();
    };
    if (event.target.classList[1] == 'bt2') {
        delLastItem();
        imgPortfolio[11].classList.add('last-item');
    };
    if (event.target.classList[1] == 'bt3') {
        delLastItem();
        imgPortfolio[11].classList.add('last-item');
        imgPortfolio[10].classList.add('last-item');
    };
    if (event.target.classList[1] == 'bt4') {
        delLastItem();
        imgPortfolio[11].classList.add('last-item');
        imgPortfolio[10].classList.add('last-item');
        imgPortfolio[9].classList.add('last-item');
    };
});


portfolioImg.addEventListener('click', (event) => {
    portfolioImg.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


var button = document.querySelector('#submit-form');
button.addEventListener('click', function (e) {
    var text = 'Письмо отправлено \n';
        name = document.querySelector('.name_user').value,
        email = document.querySelector('.email_adres').value,
        subject = document.querySelector('.subject').value,
        describe = document.querySelector('.detail').value;

    if (name == "") {
        alert("Please fill in the field name");
        e.preventDefault();
        return;
    }
    if (!validateEmail(email)) {
        alert("Please fill in the field email");
        e.preventDefault();
        return;
    }
    if (subject == "") {
        text += 'Без темы \n';
    } else {
        text += 'Тема: ' + subject + '\n';
    }

    if (describe == "") {
        text += 'Без описания\n';
    } else {
        text += 'Описание: ' + describe + '\n';
    }

    alert(text);
    e.preventDefault();
});

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}




