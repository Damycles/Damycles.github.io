const button_intro = document.querySelector('#INT');
const button_object = document.querySelector('#OBJ');
const button_inheritance = document.querySelector('#INH');
const button_polymorphism = document.querySelector('#POL');
const button_abstration = document.querySelector('#ABS');
const button_encapsulation = document.querySelector('#ENC');

const intro = document.querySelector('#Intro');
const object = document.querySelector('#Object');
const inheritance = document.querySelector('#Inheritance');
const polymorphism = document.querySelector('#Polymorphism');
const abstraction = document.querySelector('#Abstraction');
const encapsulation = document.querySelector('#Encapsulation');

button_intro.addEventListener('click', () => {
    intro.classList.add("show");
    object.classList.remove("show");
    inheritance.classList.remove("show");
    polymorphism.classList.remove("show");
    abstraction.classList.remove("show");
    encapsulation.classList.remove("show");
});

button_object.addEventListener('click', () => {
    intro.classList.remove("show");
    object.classList.add("show");
    inheritance.classList.remove("show");
    polymorphism.classList.remove("show");
    abstraction.classList.remove("show");
    encapsulation.classList.remove("show");
});

button_inheritance.addEventListener('click', () => {
    intro.classList.remove("show");
    object.classList.remove("show");
    inheritance.classList.add("show");
    polymorphism.classList.remove("show");
    abstraction.classList.remove("show");
    encapsulation.classList.remove("show");
});

button_polymorphism.addEventListener('click', () => {
    intro.classList.remove("show");
    object.classList.remove("show");
    inheritance.classList.remove("show");
    polymorphism.classList.add("show");
    abstraction.classList.remove("show");
    encapsulation.classList.remove("show");
});

button_abstration.addEventListener('click', () => {
    intro.classList.remove("show");
    object.classList.remove("show");
    inheritance.classList.remove("show");
    polymorphism.classList.remove("show");
    abstraction.classList.add("show");
    encapsulation.classList.remove("show");
});

button_encapsulation.addEventListener('click', () => {
    intro.classList.remove("show");
    object.classList.remove("show");
    inheritance.classList.remove("show");
    polymorphism.classList.remove("show");
    abstraction.classList.remove("show");
    encapsulation.classList.add("show");
});
