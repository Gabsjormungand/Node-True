// // require do arquivo
const ValidarEmail = require("./email")

//criar o caso de teste
test('Varificação de E-Mail',()=>{
    expect(ValidarEmail("foo.bar@gmail.com")).toBe(true)
})

test('Varificação de Erro', ()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false)
})
