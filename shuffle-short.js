function suffleSort(){
    const selector = '.ss-row span';
    const genSeq = function(sort = false) {
        const numbers = [{
            id: 1,
            class: 'color-one'
        }, {
            id: 2,
            class: 'color-two',
        },{
            id: 3,
            class: 'color-three',
        }, {
            id:  4,
            class: 'color-two'
        }, {
            id: 5,
            class: 'color-three'
        }, {
            id: 6,
            class: 'color-four'
        }, {
            id: 7,
            class: 'color-four'
        }, {
            id: 8,
            class: 'color-one'
        }, {
            id: 9,
            class: 'color-three'
        }];
        let result;
        if (sort) {
            result = numbers;
        } else {
            const seq = numbers.slice();
            for (let i = 8; i >= 0; i--) {
                const index = Math.floor(Math.random() * i);
                const swap = seq[i];
                seq[i] = seq[index];
                seq[index] = swap;
            }
            result = seq;
        }
        return result;
    }
    const initializeSeq = function (seq) {
        const cols = document.querySelectorAll(selector);
        for(let i = 0; i< cols.length; i++) {
            cols[i].innerText = seq[i].id;
            const classList = cols[i].parentElement.classList;
            classList.remove(classList.item(1));
            classList.add(seq[i].class);
        }
    }
    const shuffleHandler = function() {
        const seq = genSeq();
        initializeSeq(seq);
    }

    const sortHandler = function() {
        const seq = genSeq(true);
        initializeSeq(seq)
    }
    return {
        'shuffleHandler': shuffleHandler,
        'sortHandler': sortHandler
    }
}

const shuffleSortApp = suffleSort();

document.addEventListener('DOMContentLoaded', shuffleSortApp.sortHandler);