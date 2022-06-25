"use strict";
addEventListener('DOMContentLoaded', () => (SmartPhone));
let sec = 0;
let min = 0;
let hour = 0;
let btn = document.querySelector('#call');
/* abstract  */ class SmartPhone {
    constructor(_NumChiamate, _Saldo, tempo_chiamata) {
        this.NumChiamate = _NumChiamate;
        this.Saldo = _Saldo;
        this.tempochiamata = tempo_chiamata;
    }
    Timer() {
        console.log(sec + " " + min + " " + hour);
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
        else if (min >= 60) {
            min = 0;
            hour++;
        }
    }
    startTimer() {
        setInterval(() => this.Timer(), 1000);
    }
    get _Saldo() {
        if (sec >= 60) {
            this.Saldo = this._Saldo - 0.20;
        }
        if (this.Saldo < 1) {
            alert('credito Finito. Ricaricare');
        }
        console.log(this.Saldo);
        return this._Saldo;
    }
    //SCALA SALDO
    ScalaSaldo() {
        let costo = 0.20;
        if (this.tempo_chiamata === 60) {
            this._Saldo - costo;
        }
        else if (this._Saldo < 0.20) {
            alert('Ricaricare');
        }
        return this._Saldo;
    }
    get tempo_chiamata() {
        this.tempochiamata = setInterval(() => {
            console.log(sec);
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
            }
            else if (min >= 60) {
                min = 0;
                hour++;
            }
        }, 1000);
        console.log(this.tempochiamata);
        return this.tempochiamata;
    }
    /*  QuantChiamata():number {
       if()
   
     }
    */
    get _NumChiamate() {
        if (this.NumChiamate = 0) {
            this.NumChiamate + 1;
        }
        console.log(this.NumChiamate);
        return this.NumChiamate;
    }
}
let smrt = new SmartPhone(0, 30, 0);
console.log(smrt);
let obj = new SmartPhone(0, 30, 0);
console.log(obj);
let obj1 = new SmartPhone(0, 30, 0);
console.log(obj1);
let utenti = [] = [smrt, obj, obj1];
/* console.log(SmartPhone)
console.log(new SmartPhone(this.NumChiamate,this.Saldo,this.tempochiamata)) */
/* setInterval((): any => {
 console.log(sec);
 console.log(min)
 console.log(hour)
 sec++;
 if (sec >= 60) {++++++
   sec = 0;
   min++;
 } else if (min >= 60) {
   min = 0;
   hour++;
 }
}, 1000);  */
