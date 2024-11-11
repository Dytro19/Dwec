import java.util.Scanner;

public class App {
    
    public static void main(String[] args) throws Exception {
        Scanner teclado=new Scanner(System.in);
		System.out.println("Introduce tu nombre: ");
		String nombre=teclado.nextLine();
        System.out.println("Hola "+nombre);
    }
}
