// 日历
layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
                elem: '#test1' //指定元素
        });
        });











// 表格
let date=null;
$.ajax({
        url:'../json/Hospitalization_5.json',
        dataType:"json",
        type:"GET",
        async:false,
        success:function(res){
                data = res[0];
        }
});


var header = document.getElementsByClassName('header')[0];

 
 
    for(var i=0;i<10;i++){
    header.innerHTML += `
 <tr class='title'>
        <td class="bd"><input type="checkbox" name="" class="bd_1"></td>
        <td class="bd">${data.OperationTime[i]}</td>
        <td class="bd">${data.TheOrderNumber[i]}</td>
        <td class="bd">${data.name[i]}</td>
        <td class="bd">${data.HospitalNumber[i]}</td>
        <td class="bd">${data.source[i]}</td>
        <td class="bd">${data.Business[i]}</td>
        <td class="bd">${data.ChargesTotal[i]}</td>
        <td class="bd">${data.PaymentMethods[i]}</td>
        <td class="bd">${data.PaymentAmount[i]}</td>
        <td class="bd">${data.PaymentStatus[i]}</td>
        <td class="bd"><a><span class="iconfont">&#xe633;</span></a></td>
 </tr>
 ` 
    }



    // 跳转第二页面
    
    var rl=document.getElementsByClassName("iconfont");
    for(var i=0;i<rl.length;i++){
    rl[i].onclick=function(){
         window.location.href="tk_2.html";

    }
    }



    //     全选
var qx = document.getElementById("diamonds");
console.log(qx);
 var bd = document.getElementsByClassName("bd_1");
 console.log(bd)
 qx.onclick=function(){
    for( let j=0; j<bd.length; j++){
       
           
           if(qx.checked){
                bd[j].checked = true;
           }else{
                bd[j].checked = false;
           }
    }
    }
