let year
year = Number(prompt("Enter one year: "))
year %= 4
if(year == 0){
    alert("It's a one leap year")
}else{
    alert("It's not a leep year")
}