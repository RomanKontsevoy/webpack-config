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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let visa = {};
                Math.random() > .5 ? resolve(visa) : reject(`В визе отказано: нехватка документов`);
            }, 1000)
        });
    }

    function getVisa(visa) {
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

// (() => {
//     // Проверка того, что наш браузер поддерживает Service Worker API.
//     if ('serviceWorker' in navigator) {
//         // Весь код регистрации у нас асинхронный.
//         navigator.serviceWorker.register('./sw.js')
//             .then(() => navigator.serviceWorker.ready.then((worker) => {
//                 worker.sync.register('syncdata');
//             }))
//             .catch((err) => console.log(err));
//     }
// })();

(async () => {
    let response = 11;

     function getResponse() {
        setTimeout(() => {
            return 12;
        }, 1000)
    }

    response = await getResponse();

    console.log(response);
})();