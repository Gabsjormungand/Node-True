function somar(a,b){
    a = parseFloat(a)
    b = parseFloat(b)

    if((typeof a != 'number') || (typeof b !=  'number')){
        return "Caractere inválido"
    }

    if((isFinite(a) == false) || (isFinite(b) == false)){
        return "Caractere inválido"
    }
    return a+b
}

module.exports = somar
