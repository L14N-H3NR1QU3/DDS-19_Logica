let number
let positive = 0
let negative = 0
for(let i=0; i<10; i++){
    number = Number(prompt("Enter one number:"))
    if(number >=0){
        console.log("Your nomber is positive ", number)
        positive++
    }else{
        console.log("Your number is negative ", number)
        negative++
    }
}
alert("You have "+positive+" positive numbers and "+negative+" negative numbers")