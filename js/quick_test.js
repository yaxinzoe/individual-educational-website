var sco=document.getElementsByTagName("input");/*set a new varible to "input"*/
var butn=document.getElementById("button");/*set a new varible to "button"*/
button.onclick=function(){
rightanswer = true;
msg = "";
var gec=0;
for(var i=0;i<sco.length;i++){
  if(sco[i].checked == true){
    var sc=parseInt(sco[i].value);
    gec += sc;/*caculate the total score*/
  }
}
/* compare the different scores of different selections*/
  if (gec){
    var val = gec.value;
    if (gec != 800){
      rightanswer = false;
    }msg += "\nAnswers"+ (rightanswer?" are right!\nCongraduations! You saved Hector successfully!":" are wrong"); 
  } else{
    rightanswer = false;
    msg = "please select";
  }
  alert(msg);
  return rightanswer;
}


