const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if(boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar" ) {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0"; //TextContext captura los datos del boton
                //para imprimir en pantalla.
            } else {
                // El metodo slice toma dos parametros el "0" es desde donde va a empezar
                //a contar y el -1 toma el final (al no saber exactamente cual es el final)
                pantalla.textContent = pantalla.textContent.slice(0, -1); 
            }
            return;
        }

        if(boton.id === "igual") {
            try {
                //eval es una 
                pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent = "Error!";
            }
            return;
        }
         
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

        
    } )
})