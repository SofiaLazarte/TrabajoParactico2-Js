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
let documento = parseInt(prompt("Escriba su DNI"));
let resto = documento % 23;


if (documento === null) 
{ 
    while (documento >=0 && documento < 99999999) 
    {
        
        
        let l = letras.charAt(resto);
        alert(l);
        break;
    }

}
else 
{
    alert("Escriba un numero valido");
    
}

*/


// punto seis

for (let i = 1; i<=30; i++) 
{

    let result = i + "" ; //convierte el numero i en cadena de texto y una vez hecho eso se usa repeat ya que solo lo hace con texto. Cuando concatenas un número con una cadena vacía (""), JavaScript automáticamente realiza una conversión implícita del número a una cadena.

    let secuencia = result.repeat(i)

    document.write ( secuencia + "<br>") ;
    //document.write() tenemos que usar el mismo caracter que en HTML, el "<br>" . El document.write() lo que va a hacer es escribir en HTML el código que pasemos a la función, por ese motivo hay que usar el "<br>". Si el salto de línea lo quisiésemos incluir en un alert() entonces tendríamos que usar el caracter "\n" para que hiciese el salto de línea, que es el caracter que hay que usar para hacer el salto de línea en javascript
}

