let age = 24
if (age >= 18){
    console.log('Você tem acesso.')
} else{
    console.log('Você não tem acesso.')
}

let idade = 24
let condicaoHumana = true
if (idade >= 18 && condicaoHumana === true){
    console.log('Você tem acesso.')
} else{
    console.log('Você não tem acesso.')
}

let mesAniversario = 01
let outroMes = 12
if (mesAniversario == 01 || outroMes !== 12){
    console.log('Você faz aniversário em janeiro.')
} else{
    console.log('Você faz aniversário em dezembro.')
}

const nome = 'Ronaldo'
if (nome.charAt (0) == 'R'){
    console.log('Seu nome começa com a letra R.')
}else{
    console.log('Seu nome não começa com a letra R.')
}

const initialNome = 'Eduarda'
const numberSobrenome = 'Xavier'
if (numberSobrenome.length >6 || initialNome.charAt (0) == 'E'){
    console.log('Seu nome começa com a letra E ou seu sobrenome tem 6 letras.')
}
