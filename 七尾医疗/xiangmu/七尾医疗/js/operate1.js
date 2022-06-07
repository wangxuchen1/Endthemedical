window.onload=function(){
    var save=document.getElementsByClassName("save")[0];
     save.onclick=function(){
         alert("保存成功");
         var dsq=setInterval(function(){
            window.location.href="Accounting.html";
         },2000)

        
     }

}
