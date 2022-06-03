class ContaBacaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada"
        }

        this.saldo = this.saldo - valor
        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo
    }

}

//////
class ContaCorrente extends ContaBacaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, cartaoCredito)
        this.tipo = 'corrente'
        this._cartaoCredito = this.cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

//////
class ContaPoupanca extends ContaBacaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'poupança'
    }
}

class ContaUniversitaria extends ContaBacaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'universitária'
    }

    sacar(valor) {
        if(valor > 500 || valor > this._saldo) {
            return 'Operação negada'
        }

        this._saldo = this._saldo - valor
    }
}