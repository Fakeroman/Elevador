/*Clase Elevador
_pisosTotales ::get
_pisoActual ::get
_estadoPuerta ::get

constructor(parametroPT){
_estadoPuerta=abierto...
_pisoActual=1....
_pisosTotales=parametroPT;
}

+ abrirPuerta() ---si estaCerrada _estadoPuerta=abierta

+ cerrarPuerta()

- subir() _pisoActual++;
- bajar()
+ estado()---> 1/5 p abierta
+ irAPiso(pisoDestino)*/ 





class Elevator {
    constructor(
        parametersPT:number,
      private  _pisoActual:number,
      private  _estadoPuerta:boolean,
       private _pisosTotales:number) {
        this._pisosTotales=parametersPT;
        this._pisoActual=1;
        //true=open flase=close
        this._estadoPuerta=false;
    }
    get pisoActual():number{
        return this._pisoActual;
    }
    get estadoPuerta():boolean{
        return this._estadoPuerta;
    }
    get pisosTotales():number{
        return this._pisosTotales;
    }

    public abrirPuerta() {
        if (this.estadoPuerta==false) {
            return this._estadoPuerta=true;
        }
        else{
            return this._estadoPuerta=true;
        }
    }
    
    public cerrarPuerta() {
        if (this.estadoPuerta==true) {
            return this._estadoPuerta=false;
        }
        else{
            return this._estadoPuerta=false;
        }
    }
    private irAPiso(pisoSeleccionado:number){
        let pisoActual=this.pisoActual;
        let diferencia=pisoSeleccionado-pisoActual;
        if (this.estadoPuerta==true) {
            this.cerrarPuerta()
        } else {
            if(diferencia==0)
        {
            return this._pisoActual=pisoActual
        }
        else if(diferencia<pisoActual)
        {
            return this.bajar(diferencia);
        }
        else{
            return this.subir(diferencia);
        }
        }
    }

    private subir(diferencia){
        return this._pisoActual+=diferencia
    }
    private bajar(diferencia:number) {
        return this._pisoActual-=diferencia;
    }
    public estado(){
      
       return console.log(`${this._pisoActual}/${this._pisosTotales}`)

    }
}

let Elevador= new Elevator(5,1,true,5)






