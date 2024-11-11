import java.util.Scanner;

public class App4 {
    boolean exit=false;
    boolean inicio=true;

    //metodo para suma
    public int suma(){
        
        Scanner teclado=new Scanner(System.in);
        System.out.println("Introduce el primer valor: ");
        int valor1=teclado.nextInt();

        teclado=new Scanner(System.in);
        System.out.println("Introduce el segundo valor: ");
        int valor2=teclado.nextInt();

        int valorfinal=valor1+valor2;
        System.out.println("El resultado es: "+valorfinal);
        return valorfinal;
    }

    //metodo para resta
    public int resta(){

        Scanner teclado=new Scanner(System.in);
        System.out.println("Introduce el primer valor: ");
        int valor1=teclado.nextInt();

        teclado=new Scanner(System.in);
        System.out.println("Introduce el segundo valor: ");
        int valor2=teclado.nextInt();

        int valorfinal=valor1-valor2;
        System.out.println("El resultado es: "+valorfinal);
        return valorfinal;
    }

    //metodo para multiplicar
    public int multiplica(){
        
        Scanner teclado=new Scanner(System.in);
        System.out.println("Introduce el primer valor: ");
        int valor1=teclado.nextInt();

        teclado=new Scanner(System.in);
        System.out.println("Introduce el segundo valor: ");
        int valor2=teclado.nextInt();

        int valorfinal=valor1*valor2;
        System.out.println("El resultado es: "+valorfinal);
        return valorfinal;
    }

    //metodo para dividir
    public int divide(){

        Scanner teclado=new Scanner(System.in);
        System.out.println("Introduce el primer valor: ");
        int valor1=teclado.nextInt();

        teclado=new Scanner(System.in);
        System.out.println("Introduce el segundo valor: ");
        int valor2=teclado.nextInt();

        int valorfinal=valor1/valor2;
        int resto=valor1%valor2;
        System.out.println("El resultado es: "+valorfinal);
        System.out.println("El resto es: "+resto);
        return valorfinal;
    }
    public static void main(String[] args) {

        App4 a=new App4();
        while (a.inicio==true) {
            
            Scanner teclado=new Scanner(System.in);
            System.out.println("Que quieres hacer?");
            System.out.println("1: Sumar");
            System.out.println("2: Restar");
            System.out.println("3: Multiplicar");
            System.out.println("4: Dividir");
            int operacion=teclado.nextInt();
    
            if (operacion==1){
                a.suma();
            }

            else if(operacion==2){
                a.resta();
            }

            else if(operacion==3){
                a.multiplica();
            }

            else if(operacion==4){
                a.divide();
            }

            else{
                System.out.println("Eso no es lo que te he preguntado, prueba otra vez");
                a.inicio=true;
                a.exit=true;
            }
            
            a.exit=false;
            while (a.exit==false){
                teclado=new Scanner(System.in);
                System.out.println("Quieres salir?y/n ");
                String salir=teclado.nextLine();
                
                if (salir.equals("y")){
                    a.inicio=false;
                    a.exit=true;                   
                }
                else if (salir.equals("n")){
                    a.inicio=true;
                    a.exit=true;
                }
                else{
                    System.out.println("Eso no es lo que he preguntado");
                    a.exit=false;
                }
            }

        }
    }
}
