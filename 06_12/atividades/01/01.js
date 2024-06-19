let allGrades = 0
let media
let grade
for(let i = 0; i < 4; i++){
    grade = Number(prompt("Enter your grade:"))
    console.log(grade)
    allGrades += grade
    console.log(allGrades)
}
media = allGrades / 4
console.log(media)
alert("Your media is "+media)
if(media >= 7){
    alert("You pass in test")
}else if(media <7 && media >= 5){
    alert("You recovery in test")
}else if(media < 5){
    alert("You reprove in test")
}