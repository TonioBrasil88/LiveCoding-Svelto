//catttura del busta shop nella navbar

let navIcon = document.querySelector('#navIcon');

//variabile d'appoggio//

let confirm = false;

navIcon.addEventListener('click', () => {

    if (confirm == false) {

        navIcon.style.transform = 'rotate(360deg)';
        confirm = true;

    } else {
        navIcon.style.transform = 'rotate(0deg)';
        confirm = false;
    }


});

//cattura della navbar

let mainNavbar = document.querySelector('#mainNavbar');

//catturo i loghi della navbar

let logoWhite = document.querySelector('#logoWhite');

let logoCelest = document.querySelector('#logoCelest');


window.addEventListener('scroll', () => {

    if (window.scrollY > 0) {

        mainNavbar.classList.add('bg-main');
        mainNavbar.style.padding = '0px 20px';

        logoWhite.classList.remove('d-none');
        logoCelest.classList.add('d-none');

        scroller.classList.remove('d-none');

    } else

        mainNavbar.classList.remove('bg-main');
        mainNavbar.style.padding = '20px 0px';

        logoCelest.classList.remove('d-none');
        logoWhite.classList.add('d-none');

        scroller.classList.add('d-none');


})

//bottoncino del play

let opener = document.querySelector('.opener');

let moveDivs = document.querySelectorAll('.moved');

let cardsWrapper = document.querySelector('#cardsWrapper');

let circle = document.querySelector('.circle');

let containerCircle = document.querySelector('#containerCircle');

console.log(containerCircle);

let conferma = false;

let teachers = [

    { name: 'Brasile', languages: 'HTMML, Calcio, Battute', url: '/media/Brasile.jpg'},
    { name: 'Antonio', languages: 'Bootstrap, Js, Dom', url: './media/Antonio.jpg'},
    { name: 'LupinThePlayer', languages: 'PHP, Videogiochi, Anime, Manga', url: './media/Lupin.jpg'},
    { name: 'Joker', languages: 'React, Batman obsessed, Pshico', url: './media/Joker.jpg'},

]

opener.addEventListener('click', () => {


    if (conferma == false) {

        conferma = true;

        moveDivs.forEach((moved, i) => {

            moved.style.backgroundImage = `url('${teachers[i].url}')`;


            moved.addEventListener('click', () => {

                cardsWrapper.innerHTML = '';

                let div = document.createElement('div');

                div.classList.add('teacher-card', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-between',);

                div.innerHTML = `

                            <p class="h3">${teachers.name}</p>
                            <p>${teachers[i].languages}</p>
        
                `

                cardsWrapper.appendChild(div);

                let card = document.querySelector('.teacher-card');

                card.style.backgroundImage = `url('${teachers[i].url}')`;



            })

            circle.style.transform = 'translateX(-20px)';

            containerCircle.classList.add('col-md-6');

            let angle = (360 * i) / moveDivs.length;

            moved.style.transitionDelay = `${0.5 * i}s`;

            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;


        })

    } else {

        circle.style.transform = 'translateX(0px)';
        containerCircle.classList.remove('col-md-6');


        moveDivs.forEach((moved) => {

            cardsWrapper.innerHTML = '';

            moved.style.transform = `rotate(0deg) translate(0px)`;

            conferma = false;


        })


    }



})



// dark mode

let btnMode = document.querySelector('#btnMode');

let iconBulbEmpty = document.querySelector('#inconBulbEmpty');
let inconBulbFull = document.querySelector('#IconBulbFull');

let isClicked = true;

btnMode.addEventListener('click', () => {

    if (isClicked == true) {

        localStorage.setItem("mode", "dark");

        document.documentElement.style.setProperty('--sec', 'rgb(38, 38, 38)');
        document.documentElement.style.setProperty('--acc', 'rgb(206, 216, 218)');

        iconBulbEmpty.classList.add('d-none');
        iconBulbEmpty.classList.remove('d-none');

        isClicked = false;

    } else {

        localStorage.setItem("mode", "light");

        document.documentElement.style.setProperty('--sec', 'rgb(206, 216, 218)');
        document.documentElement.style.setProperty('--acc', 'rgb(38, 38, 38');

        iconBulbEmpty.classList.remove('d-none');
        iconBulbEmpty.classList.add('d-none');

        isClicked = true;

    }

})

// Salvare la Dark Mode nello storage


let storage = localStorage.getItem('mode');


if (Storage == 'dark') {

    localStorage.setItem("mode", "dark");

    document.documentElement.style.setProperty('--sec', 'rgb(38, 38, 38)');
    document.documentElement.style.setProperty('--acc', 'rgb(206, 216, 218)');

    iconBulbEmpty.classList.add('d-none');
    inconBulbFull.classList.remove('d-none');

    isClicked = false;

} else {

    localStorage.setItem("mode", "light");

    document.documentElement.style.setProperty('--sec', 'rgb(206, 216, 218)');
    document.documentElement.style.setProperty('--acc', 'rgb(38, 38, 38');

    iconBulbEmpty.classList.remove('d-none');
    inconBulbFull.classList.add('d-none');

    isClicked = true;
}