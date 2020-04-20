var button = document.getElementById("enter");
var list = document.querySelector('ul');
var items = document.getElementById("inputItems");



function itemsLength(){
	return items.value.length;
}

function newItems(){
           var li= document.createElement("li");
           li.appendChild(document.createTextNode(items.value));
		   items.value= "";   
	        list.appendChild(li);  			

	      }

button.addEventListener("click", function (){
      if (itemsLength()> 0) {
	       newItems()
	   }
	})       
     
items.addEventListener("keypress", function (event){
      if (itemsLength() > 0 && event.keyCode === 13) {
	       newItems()
	   }
	})       





/*//DragnDrop

const fill = document.querySelector('.fill');
const bin = document.getElementById('bin');

// eventi li
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


//drag

function dragStart(){
   setTimeout(() => (this.className = " invisible"), 0);
}
function dragEnd() {
  
}*/