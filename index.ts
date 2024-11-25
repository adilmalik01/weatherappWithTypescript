

// let a: number = 10;

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



let cityName = document.querySelector("#userInput") as HTMLInputElement;
let userButton = document.querySelector("#user-btn") as HTMLButtonElement;
let temp_result = document.querySelector(".result") as HTMLElement;






userButton.addEventListener("click", async (e) => {
    e.preventDefault();

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`
    // let result = axios.get(api)   
    let data = await fetch(api)
    let result = await  data.json()
    console.log(temp_result.innerHTML)
    temp_result.innerHTML = `Weather is : ${result.main.temp} `

})








