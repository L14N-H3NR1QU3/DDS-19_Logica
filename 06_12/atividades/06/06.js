let number
let num
number = prompt("Enter one number for fatorial calculation")
num = number
if(number!=0){
    for(let i=1; i<num ; i++){
        number*=num-i
    }
}
console.log(number)