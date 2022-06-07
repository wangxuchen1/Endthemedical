


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
        url:'../json/Hospitalization.json',
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
         window.location.href="mzxf_2.html";

    }
    }




    
//     全选
var qx = document.getElementById("diamonds");
// console.log(qx);
 var bd = document.getElementsByClassName("bd_1");
//  console.log(bd)
 qx.onclick=function(){
    for( let j=0; j<bd.length; j++){
       
           
           if(qx.checked){
                bd[j].checked = true;
           }else{
                bd[j].checked = false;
           }
    }
    }
    


// 搜索框
// 获取input框
var Search = document.getElementsByClassName("content-module_1_2")[0];
// 获取按钮
var click = document.getElementsByClassName("content-module_1_3")[0];
// 获取表格内容
var tableContents = document.getElementsByClassName("bd")[0];
// console.log(tableContents);

click.onclick = function(){
        
        for(let i=0; i<bd.length; i++){
                if(Search.value==bd[i].innerHTML){
                        alert("显示陈工")      
}
        }
        
}
//     click.onclick=function(){
//            alert(Search.value)
//     }
    

layui.use('dropdown', function(){
        var dropdown = layui.dropdown
        dropdown.render({
          elem: '#demo1' //可绑定在任意元素中，此处以上述按钮为例
          ,data: [{
            title: '内科'
            ,id: 100
            ,child: [{
                title: '呼吸内科'
                ,id: 105
              },{
                title: '消化内科'
                ,id: 106
              },{
                title: '心血管内科'
                ,id: 106
              },{
                title: '神经内科'
                ,id: 106
              }]
          },{
                title: '外科'
                ,id: 100
                ,child: [{
                    title: '泌尿外科'
                    ,id: 105
                  },{
                    title: '神经外科'
                    ,id: 106
                  },{
                    title: '小儿外科'
                    ,id: 106
                  },{
                    title: '胸外科'
                    ,id: 106
                  }]
              }]
         
        });
      });