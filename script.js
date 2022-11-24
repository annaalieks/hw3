'use strict';

// //1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
// //Використайте оператор розширення:
    
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20
    
function addThemAll(...numbers) {
    return numbers.reduce((initialValue, numbers) => initialValue + numbers, 0);
}
    
// //2. Задача на використання замикання. Напишіть функцію яка працює таким чином: `multiply(a)(b)` // a * b
    
console.log(multiply(5)(5));	// 25
console.log(multiply(2)(-2));	// -4
console.log(multiply(4)(3));	// 12
    
function multiply(a) {
    function product(b) {
        return a * b;
    }
    return product;
}
    
// //3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
// //- властивість за якою треба посортувати;
// // - опцію напрямку сортування, зростання чи спадання.
    
const movies = [
{
movieName: 'The Thing',
releaseYear: 1982,
directedBy: 'Carpenter',
runningTimeInMinutes: 109,
},
{
movieName: 'Aliens',
releaseYear: 1986,
directedBy: 'Cameron',
runningTimeInMinutes: 137,
},
{
movieName: 'Men in Black',
releaseYear: 1997,
directedBy: 'Sonnenfeld',
runningTimeInMinutes: 98,
},
{
movieName: 'Predator',
releaseYear: 1987,
directedBy: 'McTiernan',
runningTimeInMinutes: 107,
},
];

function byProperty(property, direction) {
    return function (a, b) {

        let sortMethod = 1;
        if (direction == '<'){
            sortMethod = -1;
        }

        if (a[property] > b[property]){
            return  1*sortMethod;
        } if (a[property] < b[property]) {
            return -1*sortMethod;
        } return 0;
    }
}
    
console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку
    
// // 4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:
// //    - Використовуючи setInterval
// //    - Використовуючи вкладений setTimeout
    
// detonatorTimer(3);
// // 3
// // 2
// // 1
// // BOOM!
    
// function detonatorTimer(delay) {
//     const intervalID = setInterval(counter, 1000);
//     function counter() {                
//         if (delay > 0) {
//             console.log(delay);
//             delay--;
//         } else {
//             console.log('BOOM!');
//             clearInterval(intervalID);
//         }
//     }
// }

// // function detonatorTimer(delay) {
// //     const timeoutID = setTimeout(counter, 1000);
// //     function counter() {
// //         if (delay > 0) {
// //             console.log(delay);
// //             delay--;
// //             detonatorTimer(delay);
// //         } else {
// //             console.log('BOOM!');
// //             clearTimeout(timeoutID);
// //         }
// //     }
// // }

    
// // 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. Наприклад:
    
let me = {
    name: 'Anna',
    age: 29,
    residency: 'Limassol',
    town: 'Brovary',
    country: 'Poland',
    faculty: 'International Relations',
    hobby: 'gym',
    strengths: 'hardworking',
    weeknesses: 'emotional',
    introduce() {
        console.log(`My name is ${this.name} and I currently live in ${this.residency}, but my native town is ${this.town}`);
    },
    education() {
        console.log(`When I was ${this.age-12} I moved to ${this.country} where I received an education as an ${this.faculty} Specialist`);
    },
    describePersonalQualities(){
        console.log(`I'm very ${this.strengths}, but I would be more productive in my life if I was less ${this.weeknesses}`);
    }
}
    
me.introduce();
me.education();
me.describePersonalQualities();
    
    
// // 6. А тепер зробіть всі свої методи з задачі `5` прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
    
let securedSelfIntroduce = me.introduce.bind(me);
let securedMyEducation = me.education.bind(me);
let securedMyPersonalQualities = me.describePersonalQualities.bind(me);
    
// setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
// setTimeout(securedMyEducation, 2000); // виведе коректний результат
// setTimeout(securedMyPersonalQualities, 3000); // виведе коректний результат
    
// 7. Напишіть функцію-декоратор, яка вповільнює виконання довільної функції на вказану кількість секунд.

function someFunction(a, b) {
    let sum = a + b;
    console.log(`The sum of the aruments is ${sum}`);
}// тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
    return function(...args) {
        console.log(`Chill out, you will get you result in ${seconds} seconds`);
        setTimeout(function() {
            return func(...args);
        }, seconds * 1000);
    }
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор

slowedSomeFunction(13, 7); // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'