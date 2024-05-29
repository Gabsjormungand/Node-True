// somar.js

const somar = require("./somar")

test('somar 1 + 2 é igual a 3', ()=>{
    expect(somar(1,2)).toBe(3)
})

// Caso de Teste 1
test('Soma de dois números inteiros, somar 3 + 5 = 8', ()=>{
    expect(somar(3,5)).toBe(8)
})

// Caso de Teste 2
test('Somar dois número negativo, somar -2 + -5 = -8', ()=>{
    expect(somar(-3,-5)).toBe(-8)
})

// Caso de Teste 3
test('Somar/Substrair de número positivo e negativo, 7 - -2 = 5', ()=>{
    expect(somar(7,-2)).toBe(5)
})

// Caso de Teste 4
test('Somar o número 0 com umk outro número, somar 0 + 9 = 9',()=>{
    expect(somar(0,9)).toBe(9)
})

// Caso de Teste 5
test('Somar dois números decimais, somar 2,5 + 3.1 = 5.6', ()=>{
    expect(somar(2.5,3.1)).toBe(5.6)
})

// Caso de Teste 6
test('Somar um número inteiro com um número decimal, somar 4 + 2.5 = 6.5', ()=>{
    expect(somar(4,2.5)).toBe(6.5)
})

// Caso de Teste 7
test('Verificação de entrada inválida, A + 3 = Caractere Inválido', ()=>{
    expect(somar("A",3)).toBe('Caractere inválido')
})

// Caso de Teste 8
test('Soma de números grandes, 999999999 + 999999999 = 1999999998', ()=>{
    expect(somar(999999999,999999999)).toBe(1999999998)
})

// Caso de Teste 9
test('Somar de números inteiro positivo, "1" + "2" = 3',()=>{
    expect(somar("1","2")).toBe(3)
})