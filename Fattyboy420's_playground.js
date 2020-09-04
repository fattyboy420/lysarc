function a(){
var para = document.createElement("p");
var node = document.createTextNode("Hah lol gotem");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para,child);
}
