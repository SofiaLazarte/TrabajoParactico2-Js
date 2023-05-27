//punto uno --------------------------------------------------------------------------------------------
/*
let edad = prompt ("Escriba su edad")

if (edad<18) 
{
    document.write("No puedes conducir, aun eres menor de edad")
}
else if (edad>=18 && edad<90)
{
    document.write("Si puedes conducir, eres mayor de edad")
}
else if (edad>=90)
{
    document.write("debe realizar los examenes para ver si esta en condiciones de conducir")
}
else 
{
alert ("Ingrese un valor correcto")
}


//punto dos -----------------------------------------------------------------------------------------------------------

let nota =  parseInt (prompt("Escriba su nota"))

if (nota>=0 || nota<=10) 
{
    switch (nota) 
    
    {
    case 0:
    case 1:
    case 2:  
        alert("Muy insuficiente")
        break;
    
    case 3: 
    case 4:  
        alert("Insuficiente")
        break;

    case 5: 
    case 6:  
        alert("Suficiente")
        break;

    case 7:  
        alert("Bien")
        break;

    case 8: 
    case 9:  
        alert("Notable")
        break;
    
    case 10:  
        alert("Sobresaliente")
        break;

    default:
        alert("Numero Erroneo")
        break;
    }
}
else {
    (nota=!isNaN)
    alert("Escriba un numero valido")
}

//punto tres ---------------------------------------------------------------------------------------------------

let texto = prompt("Escriba un texto");

while (confirm("quiere serguir ingresando") == true) 
{
    let cadena = prompt("Escriba un nuevo texto");
    texto = texto + "-" + cadena;
}

document.write(texto);




//punto cuatro ---------------------------------------------------------------------------------------------------

let numero = parseInt(prompt("Escriba un numero"));

if (!isNaN(numero)) 
{
    while (confirm("quiere serguir ingresando") == true) 
    {
        let cadena = parseInt(prompt("Escriba un nuevo numero"));
        if (!isNaN(cadena)) 
        {
            numero = numero + cadena;
        }
        else 
        {
            alert("Escriba un numero valido");
        }
        
    }
}
else
{
    
    alert("Escriba un numero valido");
}

document.write(numero);


//punto cinco ---------------------------------------------------------------------------------------------------


let letras = "TRWAGMYFPDXBNJZSQVHLCKE";


do {

    let documento = parseInt(prompt("Escriba su DNI"));
    
    if (documento >= 0 && documento <= 99999999) 
    {
        let resto = documento % 23;
        let l = letras.charAt(resto);
        alert(l);
    }
    else 
    {
        alert("ingrese un numero valido");
    }

} while (confirm("quiere serguir ingresando") == true);




// punto seis

for (let i = 1; i <= 30; i++) 
{
    document.write(i);

    let result = i + "" ; //convierte el numero i en cadena de texto y una vez hecho eso se usa repeat ya que solo lo hace con texto. Cuando concatenas un número con una cadena vacía (""), JavaScript automáticamente realiza una conversión implícita del número a una cadena.

    let secuencia = result.repeat(i)

    document.write(secuencia + "<br>");
    //document.write() tenemos que usar el mismo caracter que en HTML, el "<br>" . El document.write() lo que va a hacer es escribir en HTML el código que pasemos a la función, por ese motivo hay que usar el "<br>". Si el salto de línea lo quisiésemos incluir en un alert() entonces tendríamos que usar el caracter "\n" para que hiciese el salto de línea, que es el caracter que hay que usar para hacer el salto de línea en javascript
}


// punto siete 

let numero = parseInt(prompt("Escriba un numero"));

if (numero < 50) 
{
    for (let i = numero; i >= 0; i--)
    {
        let result = i + "" ;
        let secuencia = result.repeat(i);
        document.write(secuencia + "<br>");
    }
}
else
{
    alert("Escriba un numero menor a 50");
}



//punto ocho


let numero = parseInt(prompt("Escriba un numero"));

if (numero < 50) 
{
    for (let i = 1; i <= numero ; i++)  //Este es el bucle exterior que itera desde 1 hasta el número ingresado por el usuario (numero). La variable i se inicializa en 1 y se incrementa en cada iteración.
    {
        let fila = "";
        //let fila, guardo los datos en esta variable.
        

        for (let y = 1; y <= i ; y++) //Este es el bucle interior que itera desde 1 hasta el valor actual de i. La variable y se inicializa en 1 y se incrementa en cada iteración. Este bucle se encarga de generar los números de la secuencia en cada línea.
        {
           fila = y +""; //toma el valor de y, lo convierte en una cadena de texto y lo asigna a la variable fila. Esto se utiliza para construir la secuencia de números en cada línea de la pirámide

           

           document.write(fila);

           
        }
     
        document.write("<br>")// permite salto de linea para hacer la piramide
    }

}
else
{
    alert ("ingrese un numero valido");
}
*/

//punto nueve

for (let i = 1; i <= 500; i++) 
{
    document.write ("<br>" + i);
    
    if (i % 4 === 0 ) 
    {
        document.write (" (Multiplo de 4)");
    }
    if (i % 9 === 0) {
        document.write (" (Multiplo de 9)");
    }
    if (i % 5 === 0) {
        document.write ("<br>" +" ----------- ");
    }
}