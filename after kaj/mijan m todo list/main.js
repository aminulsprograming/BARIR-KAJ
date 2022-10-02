var addBtn=document.getElementById ("addBtn");

addBtn.addEventListener('click', ()=>{
  var olList=document.getElementById ("olList");
var input=document.getElementById ("input").value;
var text=document.createTextNode (input);
var newItems=document.createElement ("li");
newItems.appendChild(text);
olList.appendChild(newItems);
});


