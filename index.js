"use strict";
// let a: number = 10;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log(a)
// let b: string = "hello";
// console.log(b)
// let bool: boolean = true;
// console.log(bool)
// let my_array: (number | string | boolean)[] = ["hello", 5]
// my_array[2] = true;
// console.log(my_array);
// let userObj: { name: string, password: number, email: string } = {
//     name: "Adil",
//     email: "adilmalik@gmail.com",
//     password: 1234
// }
// console.log(userObj);
// function printStudentsName(name: string | number) {
//     console.log("This is :" + name)
// }
// printStudentsName("Adil")
// printStudentsName(20)
let cityName = document.querySelector("#userInput");
let userButton = document.querySelector("#user-btn");
let temp_result = document.querySelector(".result");
userButton.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`;
    // let result = axios.get(api)   
    let data = yield fetch(api);
    let result = yield data.json();
    console.log(temp_result.innerHTML);
    temp_result.innerHTML = `Weather is : ${result.main.temp} `;
}));
