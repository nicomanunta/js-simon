function randomNumber(){
    return Math.floor(Math.random()* 100 + 1)

}
function generateRandomArray(){
    let array = []
    
    for(let i = 0; i<5; i++){
        array.push(randomNumber())
    }
    
    document.getElementById("number").innerText += array
    return array
}

console.log(generateRandomArray())


// function generateRandomArray(){
//     let array = []
//     document.getElementById("number").innerHTML = "";
    
//     for(let i = 0; i<5; i++){
//         array.push(randomNumber())
//         let li = document.createElement("li")
//         li.innerHTML = `${array}`
        
//         document.getElementById("number").appendChild(li)
//     }
//     return array
// }

// console.log(generateRandomArray())