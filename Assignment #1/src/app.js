const carouselButtons = document.getElementById('carousel-buttons');
let image = document.querySelector('.carousel > img');
let text = document.getElementById('carousel-text');
let person = document.getElementById('carousel-person');
// console.log(person);

carouselButtons.addEventListener("change", onClick);

function onClick(e){
    e.preventDefault();

    
    
    if(e.target.tagName == 'INPUT'){
        const input = e.target;

        if(input.value == "1"){
            image.src = "/images/carousel_1.jpg"
            text.innerHTML = `Suspendisse tempor turpis odio, sit amet cursus leo consequat non.
            Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae.`
            person.innerHTML = "John Doe";
        } else if(input.value == "2"){
            image.src = "/images/carousel_2.jpg"
            text.innerHTML = `Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.`
            person.innerHTML = "Jonny Doe";
        }  else if(input.value == "3"){
            image.src = "/images/carousel_3.jpg"
            text.innerHTML = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
             veritatis et quasi architecto sunt explicabo.`
            person.innerHTML = "Johnathan Doe";
       
    }

}

}
