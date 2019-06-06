// "use strict"
import '../css/app.scss'
const el = document.createElement('span');
const attr = document.createAttribute("class");
attr.value = "span-el"
el.setAttributeNode(attr)
// let add = (function () {
  // var counter = 0;
  // return function () {counter += 1; return counter}
// })();

el.innerHTML = 'I am a span'
document.body.appendChild(el)



