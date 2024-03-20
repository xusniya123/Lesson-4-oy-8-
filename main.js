
// const array = ["Jasur", "Zubayr", "Madina", "Xusniya"]
// for (let i = 0; i < array.length; i++){
//     console.log (array[i])
// }





let array = [2, 4, 9, 10, 45, 67, 8, 90];
let juft = []
for (let i = 0; i< array.length; i ++){
    let check = array [i] % 2;
    if (check === 0){
        juft.push(array[i])
    }
    
}

console.log(array ,"Boshlanisgdagi array");
console.log(juft ,"Juft sonlarga ajratilgan array" )


