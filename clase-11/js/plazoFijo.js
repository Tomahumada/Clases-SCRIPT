class PF {

    constructor(capital, dias, moneda, numeroCuenta) {
        this.capital = parseFloat(capital);
        this.fecha = new Date();
        this.dias = parseInt(dias);
        this.moneda = moneda;
        this.numeroCuenta = numeroCuenta;
        this.interes = 0;
        this.acreditacion = new Date();
        this.gananciaTotal = 0;
    }

    calcularIntereses(tasaPesos, tasaDolares){
        if(this.moneda == 'pesos'){
            this.interes = (this.capital*( tasaPesos/365*this.dias));
            this.interes = parseFloat(this.interes.toFixed(2));
        }else{
            this.interes = (this.capital*( tasaDolares/365*this.dias));
        }
    }
    calcularGananciaTotal(){
        this.gananciaTotal = this.intereses + this.capitalapital;
    }
    calcularFechaAcreditacion(){
        this.acreditacion.setDate(this.fecha.getDate()+this.dias);
        this.acreditacion = this.acreditacion.toLocaleDateString();
        
    }
}






