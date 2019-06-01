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
var Elevator = /** @class */ (function () {
    function Elevator(parametersPT, _pisoActual, _estadoPuerta, _pisosTotales) {
        this._pisoActual = _pisoActual;
        this._estadoPuerta = _estadoPuerta;
        this._pisosTotales = _pisosTotales;
        this._pisosTotales = parametersPT;
        this._pisoActual = 1;
        //true=open flase=close
        this._estadoPuerta = false;
    }
    Object.defineProperty(Elevator.prototype, "pisoActual", {
        get: function () {
            return this._pisoActual;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elevator.prototype, "estadoPuerta", {
        get: function () {
            return this._estadoPuerta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Elevator.prototype, "pisosTotales", {
        get: function () {
            return this._pisosTotales;
        },
        enumerable: true,
        configurable: true
    });
    Elevator.prototype.abrirPuerta = function () {
        if (this.estadoPuerta == false) {
            return this._estadoPuerta = true;
        }
        else {
            return this._estadoPuerta = true;
        }
    };
    Elevator.prototype.cerrarPuerta = function () {
        if (this.estadoPuerta == true) {
            return this._estadoPuerta = false;
        }
        else {
            return this._estadoPuerta = false;
        }
    };
    Elevator.prototype.irAPiso = function (pisoSeleccionado) {
        var pisoActual = this.pisoActual;
        var diferencia = pisoSeleccionado - pisoActual;
        if (this.estadoPuerta == true) {
            this.cerrarPuerta();
        }
        else {
            if (diferencia == 0) {
                return this._pisoActual = pisoActual;
            }
            else if (diferencia < pisoActual) {
                return this.bajar(diferencia);
            }
            else {
                return this.subir(diferencia);
            }
        }
    };
    Elevator.prototype.subir = function (diferencia) {
        return this._pisoActual += diferencia;
    };
    Elevator.prototype.bajar = function (diferencia) {
        return this._pisoActual -= diferencia;
    };
    Elevator.prototype.estado = function () {
        return console.log(this._pisoActual + "/" + this._pisosTotales);
    };
    return Elevator;
}());
var Elevador = new Elevator(5, 1, true, 5);
