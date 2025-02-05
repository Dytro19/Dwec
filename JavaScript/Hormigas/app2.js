var intervalo = null;
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
    }

    establecerPosicion() {
        const anchoContenedor = this.contenedor.offsetWidth;
        const altoContenedor = this.contenedor.offsetHeight;
        const x = Math.random() * (anchoContenedor - this.elemento.offsetWidth);
        const y = Math.random() * (altoContenedor - this.elemento.offsetHeight);
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
        if (!this.intervalo){
            intervalo = setInterval(() => {
                const anchoContenedor = this.contenedor.offsetWidth;
                const altoContenedor = this.contenedor.offsetHeight;
                const nuevaX = Math.min(Math.max(parseFloat(this.elemento.style.left) + this.direccionX, 0), anchoContenedor - this.elemento.offsetWidth);
                const nuevaY = Math.min(Math.max(parseFloat(this.elemento.style.top) + this.direccionY, 0), altoContenedor - this.elemento.offsetHeight);
                this.elemento.style.left = `${nuevaX}px`;
                this.elemento.style.top = `${nuevaY}px`;
            }, 19);
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