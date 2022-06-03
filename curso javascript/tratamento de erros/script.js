const array = ['nome', 1, true]


function validaArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError('Envie os parâmetros')
        if (typeof (array) !== 'object') throw new TypeError('O array precisa ser do tipo Object')
        if (typeof (num) !== 'number') throw new TypeError('O num precisa ser do tipo Number')
        if (array.length !== num) throw new RangeError('Tamanho do array precisa ser igual ao num')

        return array

    } catch (error) {
        if(error instanceof ReferenceError){
                console.log('este erro é um ReferenceError')
                console.log(error.message)
        } else if(error instanceof TypeError) {
                console.log('este erro é um ReferenceError')
                console.log(error.message)
        } else if(error instanceof RangeError) {
                console.log('este erro é um ReferenceError')
                console.log(error.message)
        } else {
                console.log('Erro não esperado: ' + error)
        }
    }
}


console.log(validaArray(array,3))
