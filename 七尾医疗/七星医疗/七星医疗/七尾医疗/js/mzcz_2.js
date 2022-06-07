
var left = document.getElementsByClassName("left")[0];
console.log(left);
var right = document.getElementsByClassName("right")[0];
left.onclick = function(){
    console.log(left);
    alert("保存成功")
}
right.onclick = function(){
    window.location.href="Home-page.html";
}