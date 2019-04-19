function Person(first,last,age,gender,interests){
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age
    this.gender = gender
    this.interests = interests
    this.genre = function(){
        if(this.gender === 'male'){
            return 'He'
        }else{
            return 'She'
        }
    }



    this.bio = function(){
        console.log(`${this.name.first} ${this.name.last} is ${this.age} year old. ${this.genre()} Likes ${this.interests}`)
    }
    this.greeting = function(){
        console.log(`Hi i'am ${this.name.first}`)
    }
}

const pessoa = new Person()

pessoa.name.first = 'Carla'
pessoa.name.last = 'Ramos'
pessoa.age = 25
pessoa.gender = 'Female'
pessoa.interests = ['Music','Programming','Dancing']

pessoa.greeting()
pessoa.bio()