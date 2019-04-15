const pessoa = {
    nome: ['Bob','Smith'],
    idade:32,
    sexo: 'masculino',
    interesses: ['Musica','Esquiar'],
    bio: function(){
        console.log(`${this.nome[0]} ${this.nome[1]} tem ${this.idade}, gosta de ${this.interesses[0]} e ${this.interesses[1]}`)
    },
    saudadcao: function(){
        console.log(`Olá meu nome é ${this.nome[0]}`)
    }
}

pessoa.despedida = function(){
    console.log('Até logo!')
}

pessoa.saudadcao()
pessoa.bio()
pessoa.despedida()