'use strict';
function sostavChisla(massivChisel, chislo) {
    // initial value
    const arrNumbers = []
    let arrNumber = [];
    for (let i = 0; i < massivChisel.length; i++) {
        let numOne = massivChisel[i];
        // reset and add arr for number in each iterable
        arrNumber = [];
        arrNumber.push(numOne)
        // check one number and add arr for res if equal
        numOne === chislo ? arrNumbers.push([numOne]) : true
        // recursion and loop func for check all sum
        const fn = (i, numOne) => {
            for (let j = i + 1; j < massivChisel.length; j++) {
                let numTwo = massivChisel[j];
                // add arr for number in each iterable
                arrNumber.push(numTwo)

                let sum = numOne + numTwo;
                // check another number
                sum === chislo ? arrNumbers.push([...arrNumber]) : true
                // recursion
                fn(j, sum);
                // del last element in arr for number in each iterable
                arrNumber.pop()
            }
        }
        fn(i, numOne);
    }
    return arrNumbers;
};
// const res = sostavChisla([8, 2, 3, 4, 6, 7, 1], 5)
// console.log(res);