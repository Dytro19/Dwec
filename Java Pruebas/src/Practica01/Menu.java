package Practica01;

import java.util.Scanner;
import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Hola! ¿Qué quieres hacer con tus libros?");
            System.out.println("1. Añadir un libro nuevo.");
            System.out.println("2. Ver todos tus libros.");
            System.out.println("3. Buscar un libro.");
            System.out.println("4. Quitar un libro.");
            System.out.println("5. Prestar un libro.");
            System.out.println("6. Devolver un libro.");
            System.out.println("7. Salir.");
            System.out.print("Elige una opción: ");
            int opcion = scanner.nextInt();

            if (opcion == 1) {
                System.out.print("¿Cuál es el título del libro? ");
                String titulo = scanner.next();
                System.out.print("¿Quién es el autor? ");
                String autor = scanner.next();
                System.out.print("¿Cuál es el código del libro (ISBN)? ");
                String isbn = scanner.next();
                biblioteca.agregarLibro(new Libro());
                System.out.println("¡Libro añadido exitosamente!");
            }
            else if (opcion == 2) {
                biblioteca.listarLibros();
            }
            else if (opcion == 3) {
                System.out.print("¿Qué libro quieres buscar? (por título o autor): ");
                String busqueda = scanner.next();
                biblioteca.buscarLibro(busqueda, busqueda);
            }
            else if (opcion == 4) {
                System.out.print("¿Cuál es el ISBN del libro que quieres quitar? ");
                String isbn = scanner.next();
                biblioteca.eliminarLibro(isbn);
                System.out.println("¡Libro eliminado!");
            }
            else if (opcion == 5) {
                System.out.print("¿Cuál es el ISBN del libro que quieres prestar? ");
                String isbn = scanner.next();
                biblioteca.prestarLibro(isbn);
            }
            else if (opcion == 6) {
                System.out.print("¿Cuál es el ISBN del libro que quieres devolver? ");
                String isbn = scanner.next();
                biblioteca.devolverLibro(isbn);
            }
            else if (opcion == 7) {
                System.out.println("¡Hasta luego! Gracias por usar la biblioteca.");
                break;
            }
            else {
                System.out.println("Opción inválida. Por favor, elige una opción del 1 al 7.");
            }
        }
    }
}