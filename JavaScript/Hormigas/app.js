class Hormiga {
    constructor(contenedor) {
        this.contenedor = contenedor;
        this.elemento = document.createElement('div');
        this.elemento.className = 'hormiga';
        this.contenedor.appendChild(this.elemento);
        this.establecerPosicion();
        this.asignarColor();
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
        setInterval(() => {
            const anchoContenedor = this.contenedor.offsetWidth;
            const altoContenedor = this.contenedor.offsetHeight;
            const X = (Math.random() - 0.5) * 20; // Movimiento menor en el eje X
            const Y = (Math.random() - 0.5) * 20; // Movimiento menor en el eje Y
            const nuevaX = Math.min(Math.max(parseFloat(this.elemento.style.left) + X, 0), anchoContenedor - this.elemento.offsetWidth);
            const nuevaY = Math.min(Math.max(parseFloat(this.elemento.style.top) + Y, 0), altoContenedor - this.elemento.offsetHeight);
            this.elemento.style.left = `${nuevaX}px`;
            this.elemento.style.top = `${nuevaY}px`;
        }, 100);
    }
}

// Ejemplo de uso
window.addEventListener('load', () => {
    const contenedor = document.getElementById('container');
    if (contenedor) {
        for (let i = 0; i < 5; i++) {
            new Hormiga(contenedor);
        }
    }
});