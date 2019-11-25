var element = document.getElementById("gif");   /*set a new varible to the element with id"gif"*/
var position = 0;/*set the position of the element*/
var id = setInterval(frame, 15);
/*set a function of the element animation and if the position of the element reached some specific point,
return to the start position*/
function frame() {
  if (position <= 1390) {
    position++; 
    element.style.left = position + 'px'; 
  } else {
    position = 0;
    position++; 
    element.style.left = position + 'px'; 
}}