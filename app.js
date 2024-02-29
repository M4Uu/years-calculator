let button = document.querySelector("button");
const error = document.querySelectorAll("#inferror");
const show = document.querySelectorAll('.purple');

// Evento y procesos del botón
button.onclick = function () {
    let input = document.querySelectorAll("input");
    reset();
    errorcontenido(input);
    if(error[0].style.display == 'none' && error[1].style.display == 'none' && error[2].style.display == 'none')
        operacion(input[0].value,input[1].value,input[2].value);
};

// Identifica si uno de los inputs contiene un valor numérico que se salga de los límites optimos de las fechas
const errorfecha = (i,input) => {
    switch (i) {
        case 0:
            if(input[0].value < 1 || input[0].value > 31) errorstyle(0,"Fecha inválida");
        break;
        case 1:
            if(input[1].value < 1 || input[1].value > 12) errorstyle(1,"Fecha inválida");
        break;
        case 2:
            if(input[2].value > 2024) errorstyle(2,"Fecha inválida");
        break;
    }
};

// Identifica si en uno de los inputs se está ingresndo un valor no numérico o no se a rellenado con algo
const errorcontenido = (input) => { 
    let cont=0;
    for (let index = 0; index < 3; index++)
        if(input[index].value.toUpperCase() >= "A" && input[index].value.toUpperCase() <= "Z" || input[index].value.toUpperCase() === ""){
            errorstyle(index,"Dato inválido"); 
            cont++;
            console.log(input[index].value.toUpperCase());
        }else{
            errorfecha(index,input);
        }
};

// Reinicia los valores de los span de error y salida
const reset = () =>
{
    for (let i = 0; i < 3; i++)
    {
        error[i].style.display = 'none';
        show[i].textContent = '--';
    }
}

// Muestra los span de error con el texto diseñado para el caso específico
const errorstyle = (i,text) =>
{
    error[i].textContent = text;
    error[i].style.display = 'block';
}

// Realiza las operaciones matemáticas necesarias para calcular los tiempos según la fecha introducida
const operacion = (dd,mm,yy) =>
{
    let fecha = new Date();
    console.log(fecha.getFullYear)
    show[0].textContent = Math.abs(yy-fecha.getFullYear());
    show[1].textContent = Math.abs(mm-fecha.getMonth());
    show[2].textContent = Math.abs(dd-fecha.getDate());
}
