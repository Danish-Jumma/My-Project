function calculate(number){
    let result = document.getElementById("input");
    result.value += number;

}
function jawab(){
    try{
	let result = document.getElementById("input");
	result.value = eval(result.value);
}
catch{
    alert("Sorry! you didn't write correct")
}
}
function clr(){
    let result = document.getElementById("input")
    result.value = result.value.slice(0,0);
}
function del(){
	let result = document.getElementById("input");
    result.value = result.value.slice(0,-1)
}
