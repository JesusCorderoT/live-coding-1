// Escribe tu código aquí.
//Realizo Jesus Cordero

//Retro de Ana: 
//La resolución fue ágil y correcta, solo falta explicar
// a mayor detalle el procedimiento

function palabras(str , arr)
{
return arr.filter(palabra => palabra.length > str.length);

}

const array= ['insecto', 'bootcamp','mangos','reptil','mosca'];

console.log(palabras('bocina',array));


//2

function imprime(arr)
{
    const ul = document.createElement('ul');

    arr.forEach(str => {
        const li = document.createElement('li');
        li.textContent = str;
        ul.appendChild(li);
        
    });

    document.body.appendChild(ul);
    

}

const arr2 = ['insecto','bootcamp','escritorio','ALGO'];
imprime(arr2);

