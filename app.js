const FORM = document.getElementById("FORM");
const SEND = document.getElementById("SEND");
const RESULT = document.getElementById("RESULT");
const DESVMEDIA_BUTTON = document.getElementById("desvMediaButton");
const screen = document.getElementById("screen");
const stack = document.getElementById("stack");
const del = document.getElementById("del");
const buttons = 
{
    1:document.getElementById("number1"),
    2:document.getElementById("number2"),
    3:document.getElementById("number3"),
    4:document.getElementById("number4"),
    5:document.getElementById("number5"),
    6:document.getElementById("number6"),
    7:document.getElementById("number7"),
    8:document.getElementById("number8"),
    9:document.getElementById("number9"),
    0:document.getElementById("number0"),
    "coma":document.getElementById("numberDot")
}
let Numeros = [];
let NumStack = "";

//botones
//funcionamiento de los botones, agregando cada numero como un caracter al numstack
buttons[0].onclick = () =>{
    NumStack += "0";
    screen.innerHTML = NumStack;
}
buttons[1].onclick = () =>{
    NumStack += "1";
    screen.innerHTML = NumStack;
}
buttons[2].onclick = () =>{
    NumStack += "2";
    screen.innerHTML = NumStack;
}
buttons[3].onclick = () =>{
    NumStack += "3";
    screen.innerHTML = NumStack;
}
buttons[4].onclick = () =>{
    NumStack += "4";
    screen.innerHTML = NumStack;
}
buttons[5].onclick = () =>{
    NumStack += "5";
    screen.innerHTML = NumStack;
}
buttons[6].onclick = () =>{
    NumStack += "6";
    screen.innerHTML = NumStack;
}
buttons[7].onclick = () =>{
    NumStack += "7";
    screen.innerHTML = NumStack;
}
buttons[8].onclick = () =>{
    NumStack += "8";
    screen.innerHTML = NumStack;
}
buttons[9].onclick = () =>{
    NumStack += "9";
    screen.innerHTML = NumStack;
}
buttons["coma"].onclick = () =>{
    NumStack += ".";
    screen.innerHTML = NumStack;
}
//-----------------

//funciones
//saca el promedio de un arreglo de datos
const doProm = (arregloDatos) => //this make a prom from a list of data
{
    let prom = 0;
    for(let i = 0; i < arregloDatos.length; i++){
        prom +=arregloDatos[i];
    }
    return prom / arregloDatos.length;
}
//devuelve la desviacion media de un arreglo de datos
const doDesvMedia = (arregloDatos, promedio) =>//this does the promedial desviation of an given arrange of data and a prom
{
    let result = 0;
    arregloDatos.forEach(element => {
        result += Math.abs(element-promedio);
    });
    return result / arregloDatos.length;
}
/*
devuelve un array de datos de tipo string con el procedimiento del ejercicio.
*/
const doDesvMediaF = (arrayOfData, prom) =>{
    
    let result = "";
    let process = [];
    //primer procedimiento
    arrayOfData.forEach(element => {
        result += `|${element} - ${prom}|+`;
    });
    process.push(`(${result}) / ${arrayOfData.length}`);
    //-------------------------
    result = "";
    //segundo procedimiento
    arrayOfData.forEach(element => {
        result += `|${element - prom}|+`;
    });
    process.push(`(${result}) / ${arrayOfData.length}`);
    //-------------------------
    result = "";
    //tercer proceso
    arrayOfData.forEach(element => {
        result += `${Math.abs(element-prom)}+`;
    }); 
    process.push(`(${result}) / ${arrayOfData.length}`);
    return process;
}
/*
esta funcion envia la cadena de caracteres numericos del NumStack(con tipo de dato string)
a la variable "Numeros" luego de convertirlos a Float
finalmente cambia el contenido de la etiqueta Stack para mostrar 
los datos introducidos actualmente.
se borra el contenido del stack para ingresar un nuevo numero en la calculadora
y repetir el proceso
*/
SEND.onclick = () =>{
    if(NumStack != ""){
        Numeros.push(parseFloat(NumStack));
        console.log(Numeros);
        stack.innerHTML = Numeros;
        NumStack = "";
    }
}

//Al presionar el boton Desviacion media la funcion muestra el 
//procedimiento usando la funcion doDesvMediaF() y luego
//muestra el resultado usando la funcion desvMedia
DESVMEDIA_BUTTON.onclick = () =>{
    RESULT.innerHTML = 
    `
    ${doDesvMediaF(Numeros,doProm(Numeros))[0]}
    <br>
    ${doDesvMediaF(Numeros,doProm(Numeros))[1]}
    <br>
    ${doDesvMediaF(Numeros,doProm(Numeros))[2]}
    <br>
    El resultado de la desviacion media es:${doDesvMedia(Numeros,doProm(Numeros))}
    `;
}

del.onclick = () =>{
    Numeros.pop();
    stack.innerHTML = Numeros;
    screen.innerHTML = "0";

    if(Numeros.length === 0)
    {
        RESULT.innerHTML = "0";
    }
}

