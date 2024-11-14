const fecha = document.getElementById("fecha");
        const fechaActual = new Date();

        document.getElementById("boton").addEventListener("click", () => {
            const fecha1 = new Date(fecha.value);
            const distancia = document.getElementById("distancia");

            const diferencia = fechaActual - fecha1;

            const años = diferencia / (1000 * 60 * 60 * 24 * 365.25);

            const añosRedondos = Math.floor(años);
            const añosSobra = años - añosRedondos;
            const añosFaltan = Math.floor(-años);

            const dias = añosSobra * 365.25;
            const diasRedondos = Math.floor(dias);

            if (fecha1 > fechaActual) {
                distancia.innerHTML = "Faltan: " + añosFaltan + " años y " + diasRedondos + " días";
            } else {
                distancia.innerHTML = "Han pasado: " + añosRedondos + " años y " + diasRedondos + " días";
            }
        });

        document.getElementById("viajar").addEventListener("click", () => {
            const opciones = document.getElementById("opciones");
            const estilo = document.getElementById("body");
            switch (opciones.value) {
                case "2020":
                    estilo.style.backgroundImage = "url('Imagenes/2020.jpg')";
                    break;
                case "2019":
                    estilo.style.backgroundImage = "url('Imagenes/2019.jpg')";
                    break;
                default:
                    estilo.style.backgroundImage = "none";
                    break;
            }
        });