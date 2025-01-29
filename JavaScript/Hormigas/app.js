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
        const rectanguloContenedor = this.contenedor.getBoundingClientRect();
        const x = Math.random() * (rectanguloContenedor.width - this.elemento.offsetWidth);
        const y = Math.random() * (rectanguloContenedor.height - this.elemento.offsetHeight);
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
            const rectanguloContenedor = this.contenedor.getBoundingClientRect();
            const deltaX = (Math.random() - 0.5) * 20; // Movimiento menor en el eje X
            const deltaY = (Math.random() - 0.5) * 20; // Movimiento menor en el eje Y
            const nuevaX = Math.min(Math.max(parseFloat(this.elemento.style.left) + deltaX, 0), rectanguloContenedor.width - this.elemento.offsetWidth);
            const nuevaY = Math.min(Math.max(parseFloat(this.elemento.style.top) + deltaY, 0), rectanguloContenedor.height - this.elemento.offsetHeight);
            this.elemento.style.left = `${nuevaX}px`;
            this.elemento.style.top = `${nuevaY}px`;
        }, 100);
    }
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('container');
    if (contenedor) {
        for (let i = 0; i < 5; i++) {
            new Hormiga(contenedor);
        }
    }
});