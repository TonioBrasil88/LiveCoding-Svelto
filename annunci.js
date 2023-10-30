// cattura del ditino nella navbar

let navIcon = document.querySelector('#navIcon');

// variabile d'appoggio per il ditino nella navbar

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
        mainNavbar.style.padding = '20px 0px';


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


fetch('./annunci.json').then((response)=> response.json()).then((data)=>{


    let categoryWrapper = document.querySelector('#categoryWrapper');

    let cardsWrapper = document.querySelector('#cardsWrapper');

    // funzione setta la categoria per creare i radio buttons

    function setCategoryFilter(){

        let categories = data.map( (annuncio)=> annuncio.category );

        let uniqueCategories = [];
    
        categories.forEach((category)=>{
    
            if(!uniqueCategories.includes(category)){
    
                uniqueCategories.push(category);
            }
        })

        // creazione dei radio buttons

        uniqueCategories.forEach((category)=>{

            let div = document.createElement('div');

            div.classList.add('form-check');

            div.innerHTML = `
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                    <label class="form-check-label" for="${category}" >
                    ${category}
                    </label>
            `
            categoryWrapper.appendChild(div);
        })

    }


    setCategoryFilter();

    // funzione mostra card

    function showCards(array){

        cardsWrapper.innerHTML = '';

        array.sort((a, b) => b.price - a.price);

        array.forEach((annuncio, i)=>{

            let div = document.createElement('div');

            div.classList.add('col-12' , 'col-md-3');

            div.innerHTML = `

                   

                    <div class="announcements-card">

                        <div class="card-head mb-4">
                            <img src="https://picsum.photos/${200 + i}" alt="" class="img-card-custom">
                        </div>
                        
                        <p class="h3 text-center text-whiteCus">${annuncio.name}</p>
                        <p class="h4 text-whiteCus">${annuncio.category}</p>
                        <p class="h4 text-whiteCus">${annuncio.price} €</p>
                    </div>
            `

            cardsWrapper.appendChild(div);


        })

    }

    showCards(data);

    // funzione filtra per categoria
    // il lancio di questa funzione deve partire al click sui radio buttons

    function filterByCategory(array){

        // let categoria = Array.from(checkInputs).find((button)=> button.checked).id; 

        let arrayFromNodeList = Array.from(checkInputs);

        let button = arrayFromNodeList.find((bottone)=> bottone.checked);

        let categoria = button.id;


        if(categoria != 'All'){

            let filtered = array.filter((annuncio)=> annuncio.category == categoria);

            return filtered;

        } else {

            return data;

        }

    }

    let checkInputs = document.querySelectorAll('.form-check-input');



    // prezzo

    let priceInput = document.querySelector('#priceInput');
 
    let incrementNumber = document.querySelector('#incrementNumber');

    // funzione setta prezzo massimo

    function setPriceInput(){

        let prices = data.map((annuncio)=> Number(annuncio.price));

        let maxPrice = Math.max(...prices);

        priceInput.max = Math.ceil(maxPrice);

        priceInput.value = Math.ceil(maxPrice);

        incrementNumber.innerHTML = Math.ceil(maxPrice);

        // console.log(maxPrice);

    }

    setPriceInput();

    // funzione filtra per prezzo

    function filterByPrice(array){

        let filtered = array.filter((annuncio) => Number(annuncio.price) <= Number(priceInput.value));


        return filtered;

    }


    // parola
    
    let wordInput = document.querySelector('#wordInput');

    // funzione filtra per parola

    function filterByWord(array){

        let nome = wordInput.value;

        let filtered = array.filter ((annuncio) => annuncio.name.toLowerCase().includes(nome.toLowerCase()));

        return filtered;

    }


    // FILTRO GLOBALE

    function globalFilter(){

        let filteredByCategory = filterByCategory(data);

        let filteredByPrice = filterByPrice(filteredByCategory);

        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);

    }

        // evento click sui radio buttons

        checkInputs.forEach((checkInput)=>{

            checkInput.addEventListener('click', ()=>{

                // filterByCategory(checkInput.id);

                globalFilter();

                incrementNumber.innerHTML = priceInput.value;
               

            })

        })

        // evento all'input range

        priceInput.addEventListener('input', ()=>{


            // filterByPrice(Number(priceInput.value));
    
            globalFilter();
    
            incrementNumber.innerHTML = priceInput.value;

      
        })

        // evento cerca
        wordInput.addEventListener('input', ()=>{

            // filterByWord(wordInput.value);

            globalFilter();

        })
    

})


// dark mode

let btnMode = document.querySelector('#btnMode');

let iconBulbEmpty = document.querySelector('#iconBulbEmpty');
let iconBulbFull = document.querySelector('#iconBulbFull');


let isClicked = true;

btnMode.addEventListener('click', ()=>{

    if(isClicked == true){

        localStorage.setItem("mode", "dark");

        document.documentElement.style.setProperty('--sec', 'rgb(38, 38, 38)');
        document.documentElement.style.setProperty('--blackCus', 'rgb(2, 0, 36)');

        iconBulbEmpty.classList.add('d-none');
        iconBulbEmpty.classList.remove('d-none');

        isClicked = false;

    } else {

        localStorage.setItem("mode", "light");

        document.documentElement.style.setProperty('--whiteCus', 'rgb206, 216, 218)');
        document.documentElement.style.setProperty('--acc', 'rgb 0, 212, 255)');

        iconBulbEmpty.classList.remove('d-none');
        iconBulbEmpty.classList.add('d-none');

        isClicked = true;

    }

})

// Salvare la Dark Mode nello storage


let storage = localStorage.getItem('mode');

if(storage == 'dark'){

    localStorage.setItem("mode", "dark");

    document.documentElement.style.setProperty('--sec', 'rgb(38, 38, 38)');
    document.documentElement.style.setProperty('--main', 'rgb(13, 13, 147)');

    iconBulbEmpty.classList.add('d-none');
    iconBulbEmpty.classList.remove('d-none');

    isClicked = false;

} else {

    localStorage.setItem("mode", "light");

    document.documentElement.style.setProperty('--whiteCus', 'rgb206, 216, 218)');
    document.documentElement.style.setProperty('--acc', 'rgb 0, 212, 255)');

    iconBulbEmpty.classList.remove('d-none');
    iconBulbEmpty.classList.add('d-none');

    isClicked = true;


}

