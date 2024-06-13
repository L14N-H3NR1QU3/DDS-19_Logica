let age
age = Number(prompt("Enter your age: "))
console.log(age)
if(age >= 0 && age <= 12){
    alert("You have "+age+" years and you're kid")
}else if(age >= 13 && age <= 17){
    alert("You have "+age+" years and you're teen")
}else if(age >= 18 && age <= 59){
    alert("You have "+age+" years and you're adult")
}else if(age >= 60){
    alert("You have "+age+" years and you're elderly")
}