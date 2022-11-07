let res = document.getElementById("res");

function Temperatura(){
let temperatura = document.getElementById("temperatura"); 
let temp = Number(temperatura.value);

let resultadoF = (((temp)* 9/5) + 32);
let resultadoK = Number(temp + 273.15);
 
res.innerHTML = `${temp}ºC convertido para Fahrenheit é ${resultadoF}°F e ${resultadoK} Kelvin`
}

