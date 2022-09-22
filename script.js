class ninja{

    nombre;
    salud;
    velocidad;
    fuerza;

    constructor (nombre, salud, velocidad, fuerza){
    nombre = nombre;
    salud = salud;
    velocidad = 3;
    fuerza = 3;

    }

    get sayName () {
    console.log(this.nombre);
    }

    get showStats(){
    console.log(`El nombre es ${this.nombre}, la fuerza es ${this.fuerza}, la velocidad es ${this.velocidad} y la salud es ${this.salud}`);
    }

    get drinkSake(){
    return this.salud+10;
    }




}


