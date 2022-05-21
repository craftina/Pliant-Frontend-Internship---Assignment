const carouselButtons = document.getElementById('carousel-buttons');
let image = document.querySelector('.carousel > img');
let text = document.getElementById('carousel-text');
let person = document.getElementById('carousel-person');


const content = {
    "1": {
        image: "/images/carousel_1.jpg",
        text: `Suspendisse tempor turpis odio, sit amet cursus leo consequat non.
    Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae.`,
        person: "John Doe"
    },
    "2": {
        image: "/images/carousel_2.jpg",
        text: `Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        person: "Jonny Doe"
    },
    "3": {
        image: "/images/carousel_3.jpg",
        text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto sunt explicabo.`,
        person: "Johnathan Doe"
    }

}

let initial;
let index = 1;

function circleChange(previousIndex) {
    previousIndex == 0 ? previousIndex = 3 : previousIndex;
    document.querySelector(`input[value="${previousIndex}"]`).removeAttribute('class');
    document.querySelector(`input[value="${index}"]`).setAttribute('class', 'checked');
}

function invocation() {
    initial = window.setInterval(
        function () {
            let previousIndex = index;
            index == 3 ? index = 1 : index++;
            circleChange(previousIndex);

            image.src = content[`${index}`].image;
            text.innerHTML = content[`${index}`].text;
            person.innerHTML = content[`${index}`].person;

        }, 5000);
}

invocation();

carouselButtons.addEventListener("change", onClick);


function onClick(e) {
    e.preventDefault();


    if (e.target.tagName == 'INPUT') {
        const input = e.target;
        const previousIndex = index;

        if (input.value == "1") {
            image.src = content['1'].image;
            text.innerHTML = content['1'].text;
            person.innerHTML = content['1'].person;
            index = 1;
        } else if (input.value == "2") {
            image.src = content['2'].image;
            text.innerHTML = content['2'].text;
            person.innerHTML = content['2'].person;
            index = 2;
        } else if (input.value == "3") {
            image.src = content['3'].image;
            text.innerHTML = content['3'].text;
            person.innerHTML = content['3'].person;
            index = 3;
        }
        circleChange(previousIndex);

        window.clearInterval(initial);
        invocation();
    }

}

