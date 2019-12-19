/*
 Crear una pagina html con un boton  <button onclick=”suma(3,6);”>sumar</button> 
 
a. Implementar la funcion suma que debe sumar los dos numeros que toma como parametro. 
b. Hacer que la funcion suma muestre una alerta con el resultado.
c. Hacer que la funcion suma retorne el valor de la suma y almacenarla en una 
   variable.
d. Mostrar el resultado en algun div como este <div id=”resultado”></div> (ayuda: para 
   esto usar document.getElementById(‘resultado’) y tambien innerHTML) 

   SOLUCIÓN: 

   CÓDIGO HTML:
   <!DOCTYPE html>
    <head>
    
    </head>
    <body>
        <button onclick="suma(3,6);">sumar</button>
        <div id="resultado"></div>
    </body>
    </html>
    <script type="text/javascript" src="js/calculadora.js"></script>

    CÓDIGO JS:
const suma = (num1, num2) => {
    const result = num1 + num2;
    alert(`The result of adding ${num1} and ${num2} is: ${result}`);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = result;
    return result;
}
*/

let numero1 = 0;
let numero2 = 0;

document.querySelector('#input1').addEventListener('input', (e) => {
    numero1 = parseInt(e.target.value);
});

document.querySelector('#input2').addEventListener('input', (e) => {
    numero2 = parseInt(e.target.value);
});

document.querySelector('#suma').addEventListener('click', (e) => {
    const resultado = numero1 + numero2;
    document.querySelector('#resultado').innerHTML = resultado;
});

document.querySelector('#resta').addEventListener('click', (e) => {
    const resultado = numero1 - numero2;
    document.querySelector('#resultado').innerHTML = resultado;
});

document.querySelector('#multiplicacion').addEventListener('click', (e) => {
    const resultado = numero1 * numero2;
    document.querySelector('#resultado').innerHTML = resultado;
});

document.querySelector('#division').addEventListener('click', (e) => {
    if(numero2 == 0){
        alert('NO SE PUEDE DIVIDIR ENTRE CERO, CENTOLLO!!!');
    }else {
        const resultado = numero1 / numero2;
        document.querySelector('#resultado').innerHTML = resultado;
    }
});