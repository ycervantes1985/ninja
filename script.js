class ninja{

    nombre;
    salud;
    velocidad;
    fuerza;

    constructor (nombre, salud, velocidad, fuerza){
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;

    }

    sayName () {
    console.log(this.nombre);
    }

    showStats(){
    console.log(`El nombre es ${this.nombre}, la fuerza es ${this.fuerza}, la velocidad es ${this.velocidad} y la salud es ${this.salud}`);
    }

    drinkSake(){
    console.log(this.salud+10);
    }




}


const ninja2 = new ninja("yoisell", 10, 3, 3)
console.log(ninja2);
ninja2.sayName();
ninja2.drinkSake();