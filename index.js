var item = document.getElementsByClassName('list-group-item');
item[1].textContent="Hello World!";
item[2].style.fontWeight ='bold';
item[3].style.backgroundColor = 'grey';

var list = document.getElementsByTagName('li');
for(var i=0; i< list.length; i++)
{
    list[i].style.color = "blue";


}
