


layui.use('dropdown', function(){
    var dropdown = layui.dropdown
    dropdown.render({
      elem: '#demo1' //可绑定在任意元素中，此处以上述按钮为例
      ,data: [{
        title: '内科'
        ,id: 100
        ,child: [{
            title: '消化内科'
            ,id: 105
          },{
            title: '血液内科'
            ,id: 106
          },{
            title: '风湿免疫内科'
            ,id: 106
          },{
            title: '肾内科'
            ,id: 106
          }]
      },{
        title: '外科'
        ,id: 101
    
        ,child: [{
            title: '消化外科'
            ,id: 105
          },{
            title: '血液外科'
            ,id: 106
          },{
            title: '风湿免疫外科'
            ,id: 106
          },{
            title: '肾外科'
            ,id: 106
          }]
      }]
      ,id: 'demo1'
      //菜单被点击的事件
      ,click: function(obj){
        console.log(obj);
        layer.msg('回调返回的参数已显示再控制台');
      }
    });
  });


//搜索框
  let arr = ['张三','李四','王五','马六','冯七','王八']
  let input = document.getElementById('val');
  let shou = document.getElementById('shou');
  input.onkeyup = function(){
      shou.style.display = 'block';
      // input.value 和 arr的每一项进行匹配 indexOf() 匹配不到 -1
      let str = '';
      arr.forEach((item )=> {
          let res = item.indexOf(input.value);
          if(res !=-1){
              str = '<p>'+item+'</p>';
          }
      });
  //    console.log(str); 
  // 如果input.value为空或者 str为false 给用户一个提示
  if (!input.value || !str) {
      shou.innerHTML = '<p>暂无结果</p>'
  } else {
      shou.innerHTML = str;
  }
  
  }
  input.onblur = function(){
      shou.style.display = 'none';
      input.value = '';
  }





  var block = document.getElementsByClassName('block')[0];
  // 调用封装的get方法
  get('doctor.json',null,function(req){
    
      
      
    for(var i=0;i<10;i++){
         block.innerHTML += `
           <div class='_title'>
                  <div><input type="checkbox" class="check"  style="zoom:120%"></div>
                  <div class="xm">${req[i].name}</div>
                  <div class="tx"><div ></div></div>
                  <div class="dy">${req[i].campus}</div>
                  <div class="zc">${req[i].professional}</div>
                  <div class="ks">${req[i].section}</div>
                  <div class="bq"><div class="tnb">${req[i].lable}</div><div class="ndz"><span>${req[i].lablee}</span></div><div class="sb"><span>${req[i].lableee}</span></div></div>
                  <div class="ysjj">${req[i].introduction}</div>
                  <div class="cz"><span class="iconfont" id="sss">&#xe606;</span>
                  <span class="iconfont">&#xe655;</span></div>
              
                  
           </div>
         ` 
         success(); 
    }
         
  });

  //   封装get方法
  function get(url,query,callback){
    // 新建XMLHttpRequest对象
    var xhr = new XMLHttpRequest();
    // 获取数据
    xhr.open('get',url);
    // 发送请求
    xhr.send();
    //监听
    xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            // 将获取到的数据（字符串）转换成对象
            var req = JSON.parse(xhr.response);
            // 调用回调函数
            callback(req);
           
        }else{
            alert('显示失败');
        }
    }
}
}

function success(){
  var allcheck = document.getElementById('allcheck');
  var check = document.getElementsByClassName('check');
  var title2 = document.getElementsByClassName('_title');
  

    //所有的复选框
    allcheck.onclick=function(){
      // 遍历小复选框
      for(var i=0;i<check.length;i++){
          // 如果总复选框是选中状态的话
          if(allcheck.checked==true){
              // 所有的小复选框为选中状态
              check[i].checked=true;
              // 选中的那条数据变为灰色
              title2[i].style.backgroundColor = "#f3f8ff";
          }else{
              //如果不是选中状态的话，小复选框为不选中状态
              check[i].checked=false;  
              // 背景颜色为白色
              title2[i].style.backgroundColor = "white"; 
          }
         
      }
  }
  //单击单个复选框
  // 遍历小复选框
  for(var i=0;i<check.length;i++){
     
      check[i].index=i;
      
      check[i].onclick=function(){
         
      if(check[this.index].checked==true){
       
          title2[this.index].style.backgroundColor = "#e2f2ff";
      }else{
          
          title2[this.index].style.backgroundColor = "white"; 
      }
   
  }
  }
var iconfont = document.getElementsByClassName("iconfont")[0]
console.log(iconfont);
for (let i = 0; i < iconfont.length; i++) {
  iconfont.onclick=function(){
    window.location.href="addAdmin.html";
  }
  
}

}





  

 



layui.use(['laypage', 'layer'], function(){
  var laypage = layui.laypage
  // ,layer = layui.layer;
  
 
  
  //完整功能
  laypage.render({
    elem: 'demo7'
    ,count: 100
    ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
    ,jump: function(obj){
      console.log(obj)
    }
  });
  
 
  // //调用分页
  // laypage.render({
  //   elem: 'demo7'
  //   ,count: data.length
  //   ,jump: function(obj){
  //     //模拟渲染
  //     document.getElementById('demo7').innerHTML = function(){
  //       var arr = []
  //       ,thisData = data.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
  //       layui.each(thisData, function(index, item){
  //         arr.push('<li>'+ item +'</li>');
  //       });
  //       return arr.join('');
  //     }();
  //   }
  // });
  
});



