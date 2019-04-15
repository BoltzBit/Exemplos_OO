const bodyElement = document.querySelector('#app')
const divElement  = document.createElement('div')
const ulElement = document.createElement('ul')
//const liElement = document.createElement('li')
const textDivElement = document.createTextNode('Testando DivElement')

divElement.setAttribute('id','primeiro')


for(let i=0;i<5;i++){
    const liElement = document.createElement('li')
    const textLiElement = document.createTextNode(`Testando ${i+1}`)

    liElement.appendChild(textLiElement)
    ulElement.appendChild(liElement)
}

divElement.appendChild(textDivElement)
bodyElement.appendChild(divElement)
//ulElement.appendChild(liElement)
divElement.appendChild(ulElement)