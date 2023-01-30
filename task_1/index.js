function simpleNumbers(inputNumber) {
    let count = 0;
    let num = 2;
    let simpleNumList = [];

    do {
        if (num % 2 != 0 || num % 3 != 0 || num == 2 || num == 3) {
            simpleNumList.push(num);
            count++;
        }
        num++
    } while (count != inputNumber);

    return simpleNumList
}

console.time('simpleNumbers')
console.log(simpleNumbers(process.argv[2]))
console.timeEnd('simpleNumbers')