//solução 01
function verificaPalindromo(string) {
    if(!string) return "string inexistente"

    //split- separa as letras e transforma em array
    //reverse - inverte o array
    //join - transformar o array em string
    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo('ana'))
console.log(verificaPalindromo('ovo'))
console.log(verificaPalindromo('amor'))

//solução 02
function verificaPalindromo2(string) {
    if(!string) return "string inexistente"

    for(let i=0; i < string.length/2; i++) {
        if(string[i] !== string[string.length -1 -i]) {
            return false
        }

        return true
    }
}

console.log(verificaPalindromo2('ana'))
console.log(verificaPalindromo2('ovo'))
console.log(verificaPalindromo2('amor'))


//ATIVIDADE 2
function substituirPares(array) {
    if(!array.length) return -1
    
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 && array[i] !== 0) {
            array[i] = 0
        }
    }
    return array
}

//let array = [1, 3, 4, 6, 80, 33, 23, 90]
let array = []

console.log(substituirPares(array))