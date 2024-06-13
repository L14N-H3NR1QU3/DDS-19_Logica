let numbers = []
let smaller = 0
let bigger = 0
for(let i=0; i<10; i++){
    numbers[i] = Number(prompt("Enter one number:"))
    if(smaller == 0){
        smaller = numbers[i]
    }else{
        if(smaller>numbers[i]){
            smaller = numbers[i]
        }
    }
    if(bigger<numbers[i]){
        bigger = numbers[i]
    }
}
alert("Your bigger number is: "+bigger+"\nYour smaller number is: "+smaller)