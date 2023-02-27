let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("Fahrenheit");


function celToFar(){
    let output = (parseFloat(celcius.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let out = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celcius.value = parseFloat(out.toFixed(2));
}