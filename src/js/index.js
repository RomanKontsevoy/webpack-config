import '../css/style.css';
import '../scss/style.scss';

(() => {
    let browsers = ['chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

    for (let browser of browsers) {
        // console.log(browser);
    }

    let firstName = 'Bill',
        lastName = 'Gates',
        email = 'billgates@microsoft.com';

    let person = {
        firstName,
        lastName,
        email,
        sayHello() {
            // console.log(`Hy, my name is ${this.firstName} ${this.lastName}!`);
        }
    };

    // console.log(person);
    person.sayHello();
})();

(() => {
    class Task {
        constructor(title = '') {
            this.title = title;
            // console.log('creating of a task');
        }
    }

    let task = new Task('Clean room');
    let task2 = new Task('Buy products');
})();

(() => {
    class Task {
        constructor(title = '') {
            this.title = title;
            // console.log('creating of a task');
        }
    }

    class SubTask extends Task {
        constructor(title) {
            super(title)
        }
    }

    let task = new Task();
    let subtask = new SubTask();
})();

(() => { // without Promises, using callbacks
    function applyForVisa(documents, resolve, reject) {
        // console.log(`обработка заявления`)
        setTimeout(() => {
            let visa = {};
            Math.random() > .5 ? resolve(visa) : reject(`В визе отказано: нехватка документов`);
        }, 1000)
    }

    function bookHotel() {

    }

    function buyTickets() {

    }

    applyForVisa(
        {},
        visa => {
            //      console.info(`Виза получена`);
            bookHotel(visa, reservation => {
                buyTickets(reservation, () => {

                }, () => {

                })
            }, error => {

            })
        },
        reason => {
            // console.error(reason)
        }
    );
})();

(() => { // Using Promises
    function applyForVisa(documents, resolve, reject) {
        // console.log(`обработка заявления`)
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let visa = {};
                Math.random() > .5 ? resolve(visa) : reject(`В визе отказано: нехватка документов`);
            }, 1000)
        });
        return promise;
    }

    function getVisa (visa) {
        // console.info(`Виза получена`)
        return visa;
    }

    function bookHotel(visa) {
        // console.log(visa);
        // console.log(`Бронируем отель`);
        return {};
    }

    function buyTickets(booking) {
        // console.log(`Покупаем билеты`);
        // console.log('бронь:', booking);
    }

    applyForVisa({})
        .then(getVisa)
        .then(bookHotel)
        .then(buyTickets)
        .catch(error => {
            // console.error(error);
        });
})();

// (()=>{ // практический пример использования Promises
//     document.body.appendChild(component('div', 'movies'));
//
//     let movieList = document.getElementById('movies');
//
//     function addMovieToList(movie) {
//         let img = document.createElement('img');
//         img.src = movie.Poster;
//         movieList.appendChild(img);
//     }
//
//     function getData (url, done) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 let json = JSON.parse(xhr.response);
//                 console.log(json);
//                 done(json.Search);
//             } else {
//                 console.error(xhr.statusText);
//             }
//         }
//
//         xhr.onerror = (error) => {
//             console.error(error);
//         }
//
//         xhr.send();
//     }
//
//     let search = 'spider man';
//
//     getData(`https://ombapi.com.cutestat.com/?s=${search}`, movies => {
//         movies.forEach(function (movie) {
//             addMovieToList(movie);
//         })
//     })
//
// })();

// (() => {
//     let xmen = ['Cyclops', 'Wolverine', 'Rogue'];
//
//     for (let xman of xmen) {
//         // console.log(xman);
//     }
//
//     let iterator = xmen[Symbol.iterator]();
//
//     let next = iterator.next();
//
//     while (!next.done) {
//         // console.log(next.value);
//         next = iterator.next();
//     }
//
//     let idGenerator = {
//         [Symbol.iterator] () {
//             let id = 1;
//             return {
//                 next() {
//                     let value = id > 100 ? undefined : id++;
//                     let done = !value;
//                     return { value, done }
//                 }
//             }
//         }
//     }
//
//     for (let id of idGenerator) {
//         // console.log(id);
//         if (id > 100) {
//             break;
//         }
//     }
//
// })();

    // function* range(start, end) {
    //     let current = start;
    //     while (current <= end) {
    //         yield current++
    //     }
    // }
    //
    // for (let num in range(1, 10)) {
    //     console.log(num);
    // }

    // function generate() {
    //     let current = 1;
    //     return {
    //         [Symbol.iterator]() {
    //             return {
    //                 next () {
    //                     let result = {value: undefined, done: true};
    //
    //                     if (current <= 3) {
    //                         result.value = current;
    //                         result.done = false  ;
    //                         current++;
    //                     } else {
    //                         result.value = undefined;
    //                         result.done = true;
    //                         console.log('Finish');
    //                     }
    //
    //                     return result
    //                 }
    //             }
    //         }
    //     }
    // }

