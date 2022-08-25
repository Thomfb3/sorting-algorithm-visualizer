// const bubbleSortAnimation = (array) => {
//     let sorted = false;
//     let counter = 0;

//     while (!sorted) {
//         sorted = true;

//         for (let i = 0; i < array.length - 1 - counter; i++) {
//             if (array[i] > array[i + 1]) {
//                 swap(i, i + 1, array);
//                 sorted = false;
//             };
//         };
//         counter++;
//     };
//     return array;
// }

// const swap = (i, j, array) => {
//     const temp = array[j];
//     array[j] = array[i];
//     array[i] = temp;
// }



// const bubbleSortAnimation = (arrayBars) => {
//     let sorted = false;
//     let counter = 0;

//     while (!sorted) {
//         sorted = true;

//         for (let i = 0; i < arrayBars.length - 1 - counter; i++) {
//             if (+arrayBars[i].dataset.value > +arrayBars[i + 1].dataset.value) {

//                 arrayBars[i].style.backgroundColor = "red";
//                 arrayBars[i + 1].style.backgroundColor = "red";

//                 setTimeout(() => {
//                     console.log(arrayBars[i])

//                     swap(i, i + 1, arrayBars);
//                     arrayBars[i].style.backgroundColor = "rgba(52, 216, 181, .3)";
//                     arrayBars[i + 1].style.backgroundColor = "rgba(52, 216, 181, .3)";
//                 }, 300 * i)



//                 sorted = false;
//             }
//         }
//         counter++;
//     }


// }

// const swap = (i, j, array) => {
//     const temp = array[j];
//     array[j] = array[i];
//     array[i] = temp;
// }



// const swap = (i, j, array) => {

//     const dataTemp = array[j].dataset.value;
//     array[j].dataset.value = array[i].dataset.value;
//     array[i].dataset.value = dataTemp;

//     const heightTemp = array[j].style.height;
//     array[j].style.height = array[i].style.height;
//     array[i].style.height = heightTemp;

// }


const bubbleSortAnimation = () => {
    for(let i = values.length,timer=0; i > 0; timer+= i-1, i--) {
        setTimeout(() => {
            for(let j= 1; j < i; j++) {
                setTimeout(() => {
                    document.getElementById(ids[j]).childNodes[1].style.backgroundColor = 'black';
                    document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = "black";
                })
            }
        })
    }




}









export default bubbleSortAnimation;