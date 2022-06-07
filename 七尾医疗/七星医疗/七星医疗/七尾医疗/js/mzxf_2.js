let date=null;
$.ajax({
        url:'../json/zycz_2.json',
        async:false,
        success:function(res){
                data = res[0];
        }
});

var u = document.getElementsByClassName('u')[0];
 // 调用封装的get方法
//  console.log(u);
 
    for(var i=0;i<4;i++){
        u.innerHTML += `
 <tr class='title'>
        <td class="d11">${data.serialNumber[i]}</td>
        <td class="d22">${data.ProjectCategory[i]}</td>
        <td class="d33">${data.TheProjectName[i]}</td>
        <td class="d44">${data.unitPrice[i]}</td>
        <td class="d55">${data.quantity[i]}</td>
        <td class="d66">${data.subtotal[i]}</td>
      
 </tr>
 ` 
    }



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