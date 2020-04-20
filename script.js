//
var time = 240; // measured in mili-seconds (500ms = 0.5s)
//
var input = document.getElementsByClassName("txtInput")[0];
var element = document.getElementsByClassName("txtInput")[0];
var nodes = document.getElementsByClassName("inputPanel")[0].childNodes;
console.log(nodes[0].innerText);

input.select(); // you can also use input.focus()
input.value=""; 
 
var text = nodes[0].innerText;
text = text.substring(0, text.length - 25);
var now = "a";
setTimeout(function(){write_text()},time);
var l=text.length; 
var current = 0; 

var write_text = function() {
  input.value+=text[current]; 
  if (text[current] == ' ' || text[current] == '.'){
  	element.dispatchEvent(new KeyboardEvent('keydown',{'key':'Shift'}));
  	element.dispatchEvent(new KeyboardEvent('keyup',{'key':'Shift'}));
  }
  if(current < l-1) { 
    current++; 
    setTimeout(function(){write_text()},time); 
  } 
} 
setTimeout(function(){write_text()},time);
element.dispatchEvent(new KeyboardEvent('keydown',{'key':'Shift'}));
element.dispatchEvent(new KeyboardEvent('keyup',{'key':'Shift'}));
