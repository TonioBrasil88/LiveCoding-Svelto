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

let scroller = document.querySelector('#scroller');

let scroller2 = document.querySelector('#scroller2');

//catturo i loghi della navbar

let logoWhite = document.querySelector('#logoWhite');

let logoCelest = document.querySelector('#logoCelest');


window.addEventListener('scroll', () => {

    if (window.scrollY > 0) {

        mainNavbar.classList.add('bg-main');
        mainNavbar.style.padding = '210px 20px';


        logoWhite.classList.remove('d-none');
        logoCelest.classList.add('d-none');

        scroller.classList.remove('d-none');
      

    } else

        mainNavbar.classList.remove('bg-main');
        mainNavbar.style.padding = '0px 0px';

        logoCelest.classList.remove('d-none');
        logoWhite.classList.add('d-none');

        scroller.classList.add('d-none');
      

});



/* animate on scroll + set interval + interserction observer */

function createInterval(finalNumber, element) {

    let counter = 0;

    let interval = setInterval(() => {


        //vogliamo che il counter si blocchi a 100


        if (counter < finalNumber) {
            counter++
            element.innerHTML = counter

        } else {

            clearInterval(interval);
        }

    }, 1);

}


//catturo gli span per poter incrementare i numeri negli span, grazie al setInterval che ho creato


let firstSpan = document.querySelector('#firstSpan');

let secondSpan = document.querySelector('#secondSpan');

let thirdSpan = document.querySelector('#thirdSpan');

let numeriIntersection = document.querySelector('#numeriIntersection');

// variabile d'appoggio per bloccare incremento numeri
let intersectionInterval = true;

let observer = new IntersectionObserver(

    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting && intersectionInterval == true) {
                createInterval(920, firstSpan);
                createInterval(1657, secondSpan);
                createInterval(357, thirdSpan);
                intersectionInterval = false;
            }
        })

    }
)


//vado a lanciare la funzione che ho creato che si chiama observer

observer.observe(numeriIntersection);


// mouse enter e mouse leave


let trucks = document.querySelectorAll('.fa-truck-fast');

let columns = document.querySelectorAll('.col-custom');

columns.forEach((colonna, i) => {

    let columnsConfirm = false;

    colonna.addEventListener('mouseenter', () => {

        if (columnsConfirm == false) {
            trucks[i].classList.remove('text-sec');
            trucks[i].classList.add('text-main');

        } else {

            trucks[i].classList.remove('text-main');
            trucks[i].classList.add('text-acc');

        }

    })

    colonna.addEventListener('mouseleave', () => {

        if (columnsConfirm == false) {

            trucks[i].classList.remove('text-whiteCus');
            trucks[i].classList.add('text-acc2');
            columnsConfirm = true;

        } else {

            trucks[i].classList.remove('text-acc2');
            trucks[i].classList.add('text-sec');
            columnsConfirm = false;

        }

    })

});

/* Ultimi annunci*/

let annonucementsWrapper = document.querySelector('#announcementsWrapper');

let  announcements = [

    { name: 'Il libro delle bestemmie con calendario di Santi', category: 'Libri', price: 40, descripition: 'Libro da colorare'},
    { name: 'Peluche di Peppa Pig', category: 'Giocattoli', price: 32, descripition: 'Simpatico peluche per bambini'},
    { name: 'Corso Sviluppo Web Aulab', category: 'Corsi', price: 2000000000, descripition: 'Corso di sviluppo web'},
    { name: 'Album Elio e le storie tese', category: 'Musica', price: 15, descripition: 'Album Cicciput di Elio'},

]

announcements.forEach((annuncio, i)=>{

    let div = document.createElement('div');

    div.classList.add('col-12' , 'col-md-3' , 'my-5' , 'd-flex', 'justify-content-center');

    div.innerHTML = `
    
         <div class="card bg-main" style="width: 18rem;">
            <img src="https://picsum.photos/${300 + i}" class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title text-whiteCus fs-4 text-truncate" title="${annuncio.name}">${annuncio.name}</h1>
              <p class="card-text text-center text-acc2">${annuncio.price} €</p>
              <p class="card-text text-whiteCus">${annuncio.descripition}</p>

              <a href="#" class="btn btnCus text-whiteCus">Compralo Ora</a> 
              <i class="ms-5 fa-regular fa-heart fa-beat fa-2x heartCus text-danger"></i>
            </div>
          </div>
    
    
    `;

    announcementsWrapper.appendChild(div);

})

    let heartCus = document.querySelectorAll('.heartCus');


    heartCus.forEach((cuore)=>{
    
        let checkHeart = true;
    
        cuore.addEventListener('click', ()=>{
    
    
            if(checkHeart == true){
    
                cuore.classList.remove('fa-regular' ,'text-danger');
                cuore.classList.add('fa-solid', 'text-danger');
                checkHeart = false;
    
            } else {
    
                cuore.classList.add('fa-regular');
                cuore.classList.remove('fa-solid', 'text-danger');
                checkHeart = true;
    
            }
    
        })
    
    
    })



// dark mode

let btnMode = document.querySelector('#btnMode');

let iconBulbEmpty = document.querySelector('#iconBulbEmpty');
let iconBulbFull = document.querySelector('#iconBulbFull');


let isClicked = true;

btnMode.addEventListener('click', ()=>{

    if(isClicked == true){

        localStorage.setItem("mode", "light");

        document.documentElement.style.setProperty('--blackCus', 'rgb(2, 0, 36)');

        iconBulbEmpty.classList.add('d-none');
        iconBulbFull.classList.remove('d-none');

        isClicked = false;

    } else {

        localStorage.setItem("mode", "dark");
        
        document.documentElement.style.setProperty('--whiteCus', 'rgb(206, 216,218)');

        iconBulbEmpty.classList.remove('d-none');
        iconBulbFull.classList.add('d-none');

        isClicked = true;

    }

})

// Salvare la Dark Mode nello storage


let storage = localStorage.getItem('mode');

if(storage == 'dark'){

    
    localStorage.setItem("mode", "dark"); 

    document.documentElement.style.setProperty('--blackCus', 'rgb(2, 0, 36)');

    iconBulbEmpty.classList.add('d-none');
    iconBulbEmpty.classList.remove('d-none');

    isClicked = false;

} else {

    localStorage.setItem("mode", "light");

    document.documentElement.style.setProperty('--whiteCus', 'rgb(206, 216,218)');

    
    iconBulbEmpty.classList.remove('d-none');
    iconBulbEmpty.classList.add('d-none');

    isClicked = true;


}
