var intervalo = null;
var cantClicks = 0;
class Hormiga {
    constructor(contenedor) {
        this.contenedor = contenedor;
        this.elemento = document.createElement('div');
        this.elemento.className = 'hormiga';
        this.contenedor.appendChild(this.elemento);
        this.establecerPosicion();
        this.asignarColor();
        this.direccionX = (Math.random() - 0.5) * 2; // Dirección inicial en el eje X
        this.direccionY = (Math.random() - 0.5) * 2; // Dirección inicial en el eje Y
        this.mover();
        this.cambiarDireccion();
        this.detectarColision();
        if (this.contenedor) {
            this.elemento.addEventListener('click', () => {
                this.eliminar();
                this.asignarColor();
            });
        }
    }

    establecerPosicion() {
        const anchoContenedor = this.contenedor.clientWidth;
        const altoContenedor = this.contenedor.clientHeight;
        var x = Math.random() * (anchoContenedor - this.elemento.offsetWidth);
        if (x < 51) {
            x += 51;
        }
        var y = Math.random() * (altoContenedor - this.elemento.offsetHeight);
        if (y < 51) {
            y += 51;
        }
        this.elemento.style.left = `${x}px`;
        this.elemento.style.top = `${y}px`;
    }

    asignarColor() {
        const r = Math.floor(Math.random() * 156) + 100;
        const g = Math.floor(Math.random() * 156) + 100;
        const b = Math.floor(Math.random() * 156) + 100;
        this.elemento.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    mover() {
        setInterval(() => {
            const anchoContenedor = this.contenedor.clientWidth;
            const altoContenedor = this.contenedor.clientHeight;
            let nuevaX = parseFloat(this.elemento.style.left) + this.direccionX;
            let nuevaY = parseFloat(this.elemento.style.top) + this.direccionY;

            // Verificar límites del contenedor y ajustar dirección si es necesario
            if (nuevaX <= 0 || nuevaX >= anchoContenedor - this.elemento.offsetWidth) {
                this.direccionX *= -1; // Cambiar dirección en el eje X
                nuevaX = Math.min(Math.max(nuevaX, 0), anchoContenedor - this.elemento.offsetWidth);
            }
            if (nuevaY <= 0 || nuevaY >= altoContenedor - this.elemento.offsetHeight) {
                this.direccionY *= -1; // Cambiar dirección en el eje Y
                nuevaY = Math.min(Math.max(nuevaY, 0), altoContenedor - this.elemento.offsetHeight);
            }

            this.elemento.style.left = `${nuevaX}px`;
            this.elemento.style.top = `${nuevaY}px`;
        }, 19);
    }

    cambiarDireccion() {
        const intervaloCambio = Math.random() * 2000 + 1000; // Intervalo aleatorio entre 1000ms y 3000ms
        setInterval(() => {
            this.direccionX = (Math.random() - 0.5) * 2;
            this.direccionY = (Math.random() - 0.5) * 2;
        }, intervaloCambio);
    }

    detectarColision() {
        setInterval(() => {
            const anchoContenedor = this.contenedor.clientWidth;
            const altoContenedor = this.contenedor.clientHeight;
            const x = parseFloat(this.elemento.style.left);
            const y = parseFloat(this.elemento.style.top);

            if (x <= 51 || x >= anchoContenedor - this.elemento.offsetWidth) {
                this.direccionX *= -1; // Cambiar dirección en el eje X
            }
            if (y <= 51 || y >= altoContenedor - this.elemento.offsetHeight) {
                this.direccionY *= -1; // Cambiar dirección en el eje Y
            }
        }, 19);
    }

    // Método para eliminar la hormiga con clicks
    eliminar() {
        cantClicks++;
        if (cantClicks == 3) {
            this.contenedor.removeChild(this.elemento);
            cantClicks = 0;
        }
    }
}

window.addEventListener('load', () => {
    const contenedor = document.getElementById('container');
    if (contenedor) {
        for (let i = 0; i < 5; i++) {
            new Hormiga(contenedor);
        }
    }
});