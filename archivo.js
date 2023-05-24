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


*/

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
