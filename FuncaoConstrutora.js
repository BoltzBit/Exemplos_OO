//function createNewPerson (name){
//    const obj ={}
//    obj.name = name
//    obj.greeting = function(){
//        console.log(`Hi I'm ${obj.name}`)
//    }
//
//    return obj
//}
//
//const firstName = createNewPerson('Mateus')//instancia do 'objeto'
//
//console.log(firstName.name)
//firstName.greeting()

//Funcao construtora de objetos

function Person(name){
    this.name = name
    this.greeting = function(){
        console.log(`Hi I'm ${this.name}`)
    }
}

const pessoa1 = new Person('Mateus')
const pessoa2 = new Person('Rato')

console.log(pessoa1.name)
pessoa1.greeting()

console.log(pessoa2.name)
pessoa2.greeting()

//chamando os objetos instanciados apartir da funcao construtora

console.log(pessoa1)
console.log(pessoa2)

