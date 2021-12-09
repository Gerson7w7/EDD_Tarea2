class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
        this.lista = new Lista();
    }
}

class Lista {
    constructor() {
        this.primero = null;
    }

    // método para crear la lista normal
    add(dato) {
        let nuevo = new Nodo(dato);
        if(this.primero == null) {
            // si la lista está vacía agrega el dato al inicio de la cola
            this.primero = nuevo;
        }else {
            let aux = this.primero;
            // mientras el nodo aux no sea null, pasará al siguiente nodo
            while(aux.siguiente != null) {
                aux = aux.siguiente;
            }
            let repetido = this.repetido(dato, this.primero);
            if(repetido) {
                console.log('Dato repetido, no se insertó: ' + dato + ' :(');
                return
            }
            // insertando el nuevo dato y asignando los apuntadores
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
        }
    }

    // método para insertar dentro de una lista 
    add2(nombre, dato) {
        let aux = this.primero;
        while(aux != null) {
            // si el nombre es igual al algún dato de la lista se incerta otra lista dentro de ese nodo
            if (aux.dato == nombre) {
                let repetido = this.repetido(dato, aux.lista.primero);
                if (repetido) {
                    console.log('Dato repetido, no se insertó: ' + dato);
                }else {
                    aux.lista.add(dato);
                }                
                return
            }
            aux = aux.siguiente;
        }
        // si sale del while quiere decir que no hay tal nombre
        console.log('No existe ese nombre:( intente con otro.');
    }

    // método para verificar si hay algún dato repetido
    repetido(dato, aux) {
        while(aux != null) {
            if(aux.dato == dato) {
                return true;
            }
            aux = aux.siguiente;
        }
        return false;
    }

    // método para mostrar la lista
    mostrar() {
        let aux = this.primero;
        console.log('=========LISTA=======');
        while(aux != null) {
            console.log('* ' + aux.dato);
            let aux2 = aux.lista.primero;
            while(aux2 != null) {
                console.log('   -> ' + aux2.dato);
                aux2 = aux2.siguiente;
            }
            aux = aux.siguiente;
        }
    }
}

// probando
l = new Lista();
l.add('Gerson');
l.add('Oscar');
l.add('Bryan');
l.add('Gerson');

l.add2('Gerson', 18);
l.add2('Gerson', 10);
l.add2('Oscar', 7);
l.add2('Bryan', 9);
l.add2('Gerson', 10);
l.add2('Oscar', 20);

l.mostrar();