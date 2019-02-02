// Good One:
// let myArray = [4, 5, 12, 8, 9, -2, 4]

// Remove duplicates from array in JavaScript – the only right way:
let givenArray = [12, 4, 5, -2, 13, 12, 8, 9, -2, 4]
let myArray = [...new Set(givenArray)]

// let myArray = [4, 5, 12, -2, 8, 9, 4]
let target = 10

function getTarget(arr, targ) {
    let result = [];

    for (let i = 0; i < arr.length; i++) { //this loop is for 1st element of the pair.
        for (let j = i+1; j < arr.length; j++) { //this loop is for 2nd element of the pair.
            if (arr[i] + arr[j] === targ) {
                result.push(arr[i], arr[j]);
            }
        }
    }
    return result;
}

let getResult = getTarget(myArray, target)

// console.log(getResult);
// console.log(getResult.join())
console.log(`The numbers are: ${getResult.join(' and ')}`);
document.getElementById('num').innerHTML = `The numbers are ${getResult.join(' and ')} !`



// // ORIGINAL of the Good One:
// function getTarget(arr, targ) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i +1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === targ) {
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// }
// console.log(getTarget([10,20,10,40,50,60,70], 50)); // [ 0, 3, 2, 3 ]
