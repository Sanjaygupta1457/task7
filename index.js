//parentnode
var item = document.querySelector('#items');
item.parentNode.style.color = 'grey';

//parent element
item.parentElement.style.fontFamily="courier";

//lastElementchild
item.lastElementChild.style.fontSize='18px';
item.lastElementChild.textContent="hello World!";
 
//create child
item.childNodes.fontSize = "20px";

//nextElementsibling
console.log(item.nextElementSibling);

//previous Sibling
console.log(item.previousSibling);

//previousElement sibling
console.log(item.previousElementSibling);

//create a div
var newDiv = document.createElement('div');  
newDiv.className = 'hello';
newDiv.id = 'hello1';
 newDiv.setAttribute('title','Hello Div');

 var newDivText = document.createTextNode('Hello','World');
 newDiv.appendChild(newDivText);

 var container = document.querySelector('header.container');

 var h1=document.querySelector('header h1');
 console.log(newDiv);

 container.insertBefore(newDiv,h1);
