//punto uno

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

