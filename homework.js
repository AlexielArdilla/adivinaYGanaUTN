let vidas = 3;
const numAleatorio = Math.floor((Math.random() * 10) + 1);

window.onload = function () {
    iniciarSesion();
    actualizarVidasEnPantalla();

    if (vidas < 1) {

        gameOver();

    }
};

const iniciarSesion = () => {

    alert("Bienvenido/a al juego!!!");
    console.log("Hola");

};


const juego = () => {

    /* alert("Ya entró al juego!!!" + counter);
     counter += 1;*/
    let numeroAdivinado = document.getElementById("num1").value;
    console.log("Su núm adivinado es:" + numeroAdivinado);
    console.log("Su núm aleatorio es:" + numAleatorio);

    if (vidas > 0) {

        if (numeroAdivinado > numAleatorio) {

            vidas--;

            mensaje("menor");

        } else if (numeroAdivinado < numAleatorio) {

            vidas--;

            mensaje("mayor");

        } else if (numeroAdivinado == numAleatorio) {

            gano();

        }
    } else {

        gameOver();

    }

}

function actualizarVidasEnPantalla() {
    document.getElementById("vidas").innerHTML = `Tiene <span>${vidas}</span> vidas`;
}

const gano = () => {

    document.getElementById("gano").innerHTML = "Felicidades, Ganó!!!";
    
}

//le dice si es mayor o menor que el num que puso
const mensaje = (mensaje) => {

    if (vidas > 0) {
        document.getElementById("vidas").innerHTML = `El núm a adivinar es <span>${mensaje}</span>
    le quedan <span>${vidas}</span> vidas.`;

    } else {

        gameOver();
    
    }
}

const gameOver = () => {
    document.getElementById("vidas").innerHTML = "";
    document.getElementById("gano").innerHTML = "Qué triste, perdió!!!";
    
    if(vidas < 0)
    
    {
        restart();
    }
}

const restart = () => {
    window.location.reload();
}
