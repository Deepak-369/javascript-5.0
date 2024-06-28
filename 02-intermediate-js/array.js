// let marks = [67,69,88,86,42,96];

// console.log(marks);
// console.log(typeof marks);
// console.log(marks.length);

// console.log(marks[0]);
// console.log(marks[3]);

// marks[0] = 66;
// console.log(marks);

// let heros = ["ironman","thor","hulk","spiderman"];

// for ( let i = 0; i< heros.length; i++)
//     {
//         console.log(heros[i]);
//     }

// for (let hero of heros){
//     console.log(heros);
// }

// let cities = ["delhi", "mumbai", "pune", "bhubaneswr"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

//practice question-
// Q1
// let studMarks= [85,97,44,37,76,60];
// let sum = 0;
// for( let i=0; i<studMarks.length; i++){
// sum = sum +studMarks[i];
// }
// let avg = sum / studMarks.length;
// console.log(" average of the student is", avg);

// Q2
let items = [250,645,300,900,50];
let sum =0;
for (let i= 0; i<items.length; i++){
let dic =(items[i]*(10/100))
let fidic =items[i]-dic;
console.log("the final price after discount is",fidic);
}
