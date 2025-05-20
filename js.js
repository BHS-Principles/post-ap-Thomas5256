var list = [
    "thing 1",
    "thing 2",
    "the odd thing 3",

];
var BTN = document.getElementById("mybutton");

for(var i=0;i<3;i++){
var newBTN = BTN.cloneNode(true);
document.body.append(newBTN);
alert("Check me out!"+list[i]);
}




