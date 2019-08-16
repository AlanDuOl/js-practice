// "use strict"
import '../css/app.scss'
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
const btn4 = document.createElement('button')
const bodyId = document.createAttribute('id')
const div1Id = document.createAttribute('id')
const div2Id = document.createAttribute('id')
const textNode1 = document.createTextNode('Div 1')
const textNode2 = document.createTextNode('Div 2')
bodyId.value = "container"
div1Id.value = 'div-1'
div2Id.value = 'div-2'
btn1.innerHTML = 'Set cookie 1'
btn2.innerHTML = 'Get cookies'
btn3.innerHTML = 'Set cookie 2'
btn4.innerHTML = 'Delete cookies'
document.body.setAttributeNode(bodyId)
div1.appendChild(textNode1)
div2.appendChild(textNode2)
div1.setAttributeNode(div1Id)
div2.setAttributeNode(div2Id)
btn1.setAttribute('id', 'btn-1')
btn2.setAttribute('id', 'btn-2')
btn3.setAttribute('id', 'btn-3')
btn4.setAttribute('id', 'btn-4')
div1.appendChild(btn1)
div1.appendChild(btn3)
div1.appendChild(btn2)
div1.appendChild(btn4)
document.body.appendChild(div1)
document.body.appendChild(div2)

btn1.addEventListener('click', () => {
    document.cookie = "name = alan"
    // document.cookie = "age: 29"
    // document.cookie = "weight: 82"
    // document.cookie = "height: 1,82"
})

btn3.addEventListener('click', () => {
    document.cookie = "age = 29"
    // document.cookie = "weight: 82"
    // document.cookie = "height: 1,82"
})

btn2.addEventListener('click', () => {
    div2.innerHTML = document.cookie
})

btn4.addEventListener('click', () => {
    let cookies = document.cookie.split(';')
    for(let i = 0; i < cookies.length; i++) {
        document.cookie = `${cookies[i].split('=')[0]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
    }
})