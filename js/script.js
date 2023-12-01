function randomNumber(){
    return Math.floor(Math.random()* 100 + 1)

}

let list_random_number = []
function generateRandomArray(){
    
    for(let i = 0; i<5; i++){
        list_random_number.push(randomNumber())
    }
    
    document.getElementById("number").innerText += list_random_number
    
    return list_random_number
}

console.log(generateRandomArray())
// countdown 30 second
setTimeout(function(){
    document.getElementById("number").style.display = "none"
    
}, 3000)


let list_user_number = []
setTimeout(function(){
    let numero_1 = parseInt(prompt("Inserisci il primo numero"))
    let numero_2 = parseInt(prompt("Inserisci il secondo numero"))
    let numero_3 = parseInt(prompt("Inserisci il terzo numero"))
    let numero_4 = parseInt(prompt("Inserisci il quarto numero"))
    let numero_5 = parseInt(prompt("Inserisci il quinto numero"))
    
    list_user_number.push(numero_1, numero_2, numero_3, numero_4, numero_5)
    console.log(list_user_number)
    console.log(list_random_number)
    if(list_user_number = list_random_number){
        console.log("Hai fatto 5 su 5:" +" "+list_random_number)
    }
    else{
        console.log("sono diversi")
    }
}, 4000)











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