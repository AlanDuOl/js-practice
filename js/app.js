// "use strict"
import '../css/app.scss'
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const bodyId = document.createAttribute('id')
const div1Id = document.createAttribute('id')
const div2Id = document.createAttribute('id')
const textNode1 = document.createTextNode('Div 1')
const textNode2 = document.createTextNode('Div 2')
bodyId.value = "container"
div1Id.value = 'div-1'
div2Id.value = 'div-2'
document.body.setAttributeNode(bodyId)
div1.appendChild(textNode1)
div2.appendChild(textNode2)
div1.setAttributeNode(div1Id)
div2.setAttributeNode(div2Id)
document.body.appendChild(div1)
document.body.appendChild(div2)
