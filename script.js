// ES 5 ECMA SCRIPT 2009;

// uzgaruvchi 
// var let 

// var num = 2;
// num = 4;

// i kiyn consolega node.jsdi terminalida chiqarib kursatasan

// console.log(num);


// var num2 = 4;
// var res = num * num2;
// console.log(res);


// Data-type yani malumot turlari 8
// Number String undefined null boolean bigInt symbol
// Object

// let asd;
// console.log(asd); berda console.log ga nima chiqishini suresan 



// ======== operatorlar ==========
/*
    == teng
    != teng emas
    === qa'tiy teng
    =< katta yoki teng
    => kichik yoki teng

    || yoki operatori
    && va operatori

*/ 

// kichikkina misol 
// var num1 = 1;
// var num2 = 2;
// var num3 = 3;

// var holat = (num1 !== num2) || (!(num2 < num3)); // true

// console.log(holat);

// i kiyn googleda bir eslatvarasan operatorlani || && 



// If else 

// var ochmiz = false;
// var suvsadik = false;


// if(ochmiz) {
//     console.log("Biror yegulik yeb ol");
// } else {
//     if(suvsadik) {
//         console.log("Suv ichib olgin");
//     } else {
//         console.log("Bumasa uxlab olgin");
//     }
// }

// false faqatgina 0 ga teng va == talik teng va " " buh string ham falsega teng
// true uziga teng va 1 ga == talik tengda teng qa'tiy teng faqat uziga teng



// Switch

// var week = "Dushanba";

// switch(week) {
//     case "Dushanba" :
//         console.log("Tog'ri");
//         break
//     case "Seshanba" :
//         console.log("Tog'ri");
//         break
//     case "Chorshanba" :
//         console.log("Tog'ri");
//         break
//     case "Payshanba" :
//         console.log("Tog'ri");
//         break
//     default :
//         console.log("Bunday hafta kuni yuq");
//         break
// }



// Functions ---> Callback

// var num = 1;

// function n () {
//     // var num = 5;
//     console.log("Function iwladi" + num);
// }
// var num = 1; // berdayam num kiradi functionni ichiga 
// n()



// function calc (a, b) {
//     return a + b // werda bir suresan return yozmasdan iwledimi yo iwlamedimi db

// }
// console.log(calc(1, 5));



// CallBack function 

// function djin (text, buyur) {
//     console.log(text);
//     buyur()
// }

// function sayHello () {
//     console.log("Nima hohlaysiz hujayin");
// }

// djin("Assalomu aleykum", sayHello)



// setTImeout 

// setTimeout(sayHello, 2000)

// function sayHello () {
//     console.log("Salom Tashkent");
// }


// setInterval 
// var num = 1;
// const timerInterval = setInterval(function () {
//     if(num === 5)
//         clearInterval(timerInterval);
    
//     else 
//         console.log("Salom Tashkent " + num);
//         num++
    
// }, 2000)



// foor loop 

// FOR
// for(var i = 0; i <= 10; i++) {
//     console.log(i);
// }

// WHILE
// var i = 0;
// while(i <= 10) {
//     console.log(i++);
// }


// Array 

// var arr = ["Abror", "Shohrux", "Senior", "Junior", "Middle"];

// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(var key of arr) {
//     console.log(key);
//     console.log([key]);
// }

// Object

// var shaxs = {
//     isim: "Shohrux",
//     yosh: 19,
//     uylanganmi: false,
//     soch: "qora"
// }

// console.log(shaxs.isim);

// for(var key in shaxs) {
//     console.log(shaxs[key]);
// }

// i kiyn massiv bilan objecti farqini tuwuntirasan
// objectlar

// var shaxs = {
//     ismi: "Shohrux",
//     age: 19,
//     uylanganmi: false,
//     sochi: "qora"
// }

// console.log(shaxs.ismi);

// for(var key in shaxs) {
//     console.log(shaxs[key]);
// }



// Es 6
// Array forEach

// var arr = ["Aziz", "Shohrux", "Akmal", "Azam", "Suhrob", "Javohir", 2, 5];

// arr.forEach((item, index) => {
//     console.log(item);
// })



// Atsetsatsivni massivlar 
// var shaxs = [
//     {name: "Shohrux", age: 19, job: "Front-End dev"},
//     {name: "Aziz", age: 25, job: "Full dev"},
//     {name: "Azam", age: 29, job: "Back-End dev"},
//     {name: "Lena", age: 15, job: "Front-End dev"},
//     {name: "masha", age: 19, job: "Ios dev"}
// ]

// shaxs.forEach((item, index) => {
//     console.log(item);
// })