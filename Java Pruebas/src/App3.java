import java.util.Scanner;
public class App3 {
    public static void main(String[] args) {
        boolean exit=false;
        while (exit==false) {
            Scanner teclado=new Scanner(System.in);
		    System.out.println("Introduce tu nombre: ");
		    String nombre=teclado.nextLine();
            System.out.println("Hola "+nombre);

            teclado=new Scanner(System.in);
            System.out.println("Que dia naciste?");
            int dia=teclado.nextInt();
            int  par=dia%2;

            if (dia>31 || dia<=0){
                System.out.println(dia+" No es un dia valido");
            }
            
            else{
                if (par==0 ) {
                    System.out.println("Naciste dia par!");
                }

                else if (par!=0){
                    System.out.println("Naciste dia impar!");
                }
            } 

            boolean exit2=false;
            while (exit2==false){
                teclado=new Scanner(System.in);
                System.out.println("Quieres salir?y/n ");
                String salir=teclado.nextLine();
                
                if (salir.equals("y")){
                    exit2=true;
                    exit=true;                   
                }
                else if (salir.equals("n")){
                    exit2=true;
                    exit=false;
                }
                else{
                    System.out.println("Eso no es lo que he preguntado");
                    exit2=false;
                }
            }
        
        }
    }
}
