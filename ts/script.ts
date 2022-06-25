        addEventListener('DOMContentLoaded', ()=>(SmartPhone))
        let sec:number = 0
       let min:number = 0
        let hour:number = 0
        let btn = document.querySelector('#call') as HTMLElement;
         
        
        

/* abstract  */class SmartPhone {
  private NumChiamate: number;
  private Saldo: number;
  private tempochiamata: number;

  constructor(_NumChiamate: number, _Saldo: number, tempo_chiamata:number) {
    this.NumChiamate = _NumChiamate;
    this.Saldo = _Saldo ;
    this.tempochiamata =  tempo_chiamata
  }

  Timer(): any {
            console.log(sec + " " + min + " " + hour);

            sec++;
            if (sec >= 60) {
              sec = 0;
              min++;
            } else if (min >= 60) {
              min = 0;
              hour++;
            }
          }
  startTimer():any {
          setInterval(() => this.Timer(),1000 )
        }

  get _Saldo():number {
     if(sec >= 60){
    this.Saldo = this._Saldo - 0.20

    }if( this.Saldo < 1) {
        alert('credito Finito. Ricaricare')
    }
    console.log(this.Saldo) 
    return this._Saldo;
  } 
  //SCALA SALDO
  ScalaSaldo(): number {
    let costo = 0.20
    
    if (this.tempo_chiamata === 60) {
      this._Saldo - costo
      
    }else if (this._Saldo < 0.20){
      alert('Ricaricare')
    }
    return this._Saldo
  }


   get tempo_chiamata(): number {
    this.tempochiamata = setInterval((): any => {
        
        console.log(sec);
        
      sec++;
      if (sec >= 60) {
        sec = 0;
        
        min++;
      } else if (min >= 60) {
        min = 0;
        hour++;
      }
    }, 1000); 
    console.log(this.tempochiamata) 
    return this.tempochiamata
    
  }

 /*  QuantChiamata():number {
    if()

  }
 */
  get _NumChiamate(): number {
    if (this.NumChiamate = 0) {
        this.NumChiamate + 1
    }
    console.log(this.NumChiamate)
    return this.NumChiamate;
  }

}

let smrt = new SmartPhone(0,30, 0);
console.log(smrt)
let obj = new SmartPhone(0,30,0)
console.log(obj)
let obj1 = new SmartPhone(0,30, 0);
console.log(obj1);

let utenti = [] = [smrt,obj,obj1]






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





