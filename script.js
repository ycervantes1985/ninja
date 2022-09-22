class Ninja{

    constructor (nombre){
    this.nombre = nombre;
    this.salud = 100;
    this.velocidad = 3;
    this.fuerza = 3;

    }

    sayName () {
    console.log(this.nombre);
    }

    showStats(){
    console.log(`Nombre:${this.nombre} Fuerza:${this.fuerza} Velocidad:${this.velocidad} Salud:${this.salud}`);
    }

    drinkSake(){
    console.log(this.salud+10);
    }




}


const ninja2 = new Ninja("yoisell")
console.log(ninja2);
ninja2.sayName();
ninja2.drinkSake();


class Sensei extends Ninja{

constructor(nombre){
    super();
    this.nombre = nombre;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;

}
speakWisdom(){
console.log("Lo que un programador puede hacer e un mes, dos programadores pueden hacerlo en dos meses")
this.drinkSake();
}

}


const sensei1 = new Sensei("yakimeshi")
//console.log(sensei1);
sensei1.speakWisdom();
sensei1.showStats();