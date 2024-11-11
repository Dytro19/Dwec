import java.util.Scanner;
public class App2 {
    public static void main(String[] args) throws Exception {
        Scanner teclado=new Scanner(System.in);
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
    }
}
