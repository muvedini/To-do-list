var ul = document.getElementById("ul-list");

function newElement(){
 //getting value from textbox
  var input = document.getElementById("text-input").value;
 if(input === ''){
   alert("Please add any to-do");
 }else{

  //creating list-items
 var li = document.createElement("li");
 //creating textnode
 var liText = document.createTextNode(input);
 li.className = "list-items";//adding classname
li.appendChild(liText); //adding text into li
ul.appendChild(li); //adding li into ul

//clearing text field
document.getElementById("text-input").value="";}

//adding cross symbol
var close = document.createElement("span");
close.appendChild(document.createTextNode("\u00D7"));
close.className = "close-list";
li.appendChild(close);
ul.appendChild(li);

//adding tick symbol
var tick = document.createElement("span");
tick.appendChild(document.createTextNode("\u2713"));
tick.className = "tick-list";
li.appendChild(tick);
ul.appendChild(li);

//hiding lists
var getclose = document.getElementsByClassName("close-list");
for(var i=0;i<getclose.length;i++){
getclose[i].onclick = function(){
  var div = this.parentElement;
  div.style.display = "none";
}
}

ul.addEventListener('click', (e)=>{
  e.target.parentElement.classList.add('completed');
  });
}

//hiding lists
var getclose = document.getElementsByClassName("close-list");
for(var i=0;i<getclose.length;i++){
getclose[i].onclick = function(){
  var div = this.parentElement;
  div.style.display = "none";
}
}

//styling completed tasks
//var gettick = document.(".tick-list");
ul.addEventListener('click', (e)=>{
e.target.parentElement.classList.add('completed');
});


