let numbers = []
let cal = 0
for(let i=0; i<10; i++){
    numbers[i] = Number(prompt("Enter one number: "))
    console.log(numbers[i])
    cal += numbers[i]
}
alert("The sum result is: "+cal)