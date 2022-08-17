
 var item = document.getElementsByClassName('list-group-item');
 item[1].style.Color ="green";

 var odd= document.querySelectorAll('li:nth-child(odd)');
 var even = document.querySelectorAll('li:nth-child(even');

 for(var i=0; i<odd.length; i++)
 {
    odd[i].Style.backgroundColor="green";
    odd[i].style.backgroundColor="blue";
 }