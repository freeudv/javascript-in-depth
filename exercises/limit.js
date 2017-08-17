/*
    ЗАДАНИЕ: Напишите функцию `limit`, которая принимает в качестве аргументов
    фукнцию (fn) и число (n). Число определяет сколько раз функцию можно вызвать.

    ПРИМЕР:

    function playGame() {
        console.log('Playing game =)')
    }

    let playGameLimited = limit(playGame, 3);

    playGameLimited(); // 'Playing game =)'
    playGameLimited(); // 'Playing game =)'
    playGameLimited(); // 'Playing game =)'
    playGameLimited(); // undefined =(
*/

function limit(fn, n) {
    let counter = n;

    return function(...args) {
        if (counter < 1) return;

        counter--;
        return fn(...args);
    }
}

module.exports = limit;
