//Usando o This

const pessoa1 = {
    nome: 'Mateus',
    saudacao: function(){
        console.log(`Olá ${this.nome}`)
    }
}


const pessoa2 = {
    nome: 'João',
    saudacao: function(){
        console.log(`Olá ${this.nome}`)
    }
}


pessoa1.saudacao()
pessoa2.saudacao()