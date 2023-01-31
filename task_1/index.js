function simpleNumbers(inputNumber) {
    let num = 2;
    let simpleNumList = [];

    do {
        if ((num % 2 == 0 && num != 2) || (Math.sqrt(num) in simpleNumList)) {
            num++;
            continue;
        } else if (simpleNumList[0] != undefined) {
            let notSimple = 0;
            for (let count = 0; count < simpleNumList.length; count++) {
                if (num % simpleNumList[count] == 0) {
                    notSimple++;
                    break;
                }
            }
            if (notSimple == 1) {
                num++;
            } else {
                simpleNumList.push(num);
                num++;
            }
        } else {
            simpleNumList.push(num);
            num++;
        }
    } while (simpleNumList.length < inputNumber);

    return simpleNumList
}

console.time('simpleNumbers')
console.log(simpleNumbers(process.argv[2]))
console.timeEnd('simpleNumbers')