let data = null;
$.ajax({
    url: '../json/Hospital_navigation_five.json',
    async: false,
    success: function (res) {
        data = res[0];
    }

});
console.log(data);
var div = document.getElementById("u7869");
for (var i = 0;i <3; i++) {
    div.innerHTML += `
    <div id="u7869" class="u7869">
    <div class="u7869_1"><input type="checkbox" class="xx"></div>
    <div class="u7869_2"><span>${data.courtyard[i]}</span></div>
    <div class="u7869_3"><span>${data.location[i]}</span></div>
    <div class="u7869_4"><span>${data.phone[i]}</span></div>
    <div class="u7869_5"><span>${data.telephone[i]}</span></div>
    <div class="u7869_6"><span>${data.Bus[i]}</span></div>
    <div class="u7869_7"><span>${data.operatingtime[i]}</span></div>
    <div class="u7869_8"><span><img src="https://cdn3.axureshop.com/demo/1634752/images/%E5%8C%BB%E7%94%9F%E7%AE%A1%E7%90%86/u6659.svg" alt="" class="sss"></span>
    <span><img src="https://cdn3.axureshop.com/demo/1634752/images/%E5%8C%BB%E7%94%9F%E7%AE%A1%E7%90%86/u6660.svg" alt="" class="scc"></span></div>
    </div>
    `
}
    
var xxx=document.getElementsByClassName("xxx")[0];
var xx=document.getElementsByClassName("xx");
xxx.onclick=function(){
    var xx=document.getElementsByClassName("xx");
    console.log(xx);
   for(var i=0;i<xx.length;i++){
    if(xxx.checked==true){ xx[i].checked=true;}else{
        xx[i].checked=false;
    }
      
   }
}

var sc=document.getElementsByClassName("scc");
var udiv=document.getElementsByClassName("u7869");
 console.log(udiv);
 console.log(sc)
for(let z=0;z<sc.length;z++){
    sc[z].onclick=function(){
        udiv[z+1].style.display="none";
    }
}

var sss=document.getElementsByClassName("sss")[0];
    console.log(sss);
    sss.onclick=function () {
        window.location.href = "../html/Hospital_navigation_fives.html";
}

var sss=document.getElementsByClassName("sss")[1];
    console.log(sss);
    sss.onclick=function () {
        window.location.href = "../html/Hospital_navigation_fives.html";
}

var sss=document.getElementsByClassName("sss")[2];
    console.log(sss);
    sss.onclick=function () {
        window.location.href = "../html/Hospital_navigation_fives.html";
}




