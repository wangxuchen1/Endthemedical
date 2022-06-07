
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





layui.use('table', function(){
  var table = layui.table;
  
  
  table.render({
    elem: '#test'
    ,url:'department.json'
    ,toolbar: '#toolbarDemo'
    ,title: '用户数据表'
    ,totalRow: true
    ,cols: [[
      {type: 'checkbox', fixed: 'left'}
      
      ,{field:'username', title:'医生姓名', width:180,align:"center", edit: 'text'}
      ,{field:'section', title:'科室', width:180,align:"center", edit: 'text'}
      ,{field:'campus', title:'院区', width:180,align:"center", edit: 'text'}
      ,{field:'site', title:'地址', width:200,align:"center", edit: 'text'}
      ,{field:'time', title:'时间', width:250,align:"center", edit: 'text'}
      ,{fixed: 'right', title:'操作',align:"center", toolbar: '#barDemo', width:150}
    ]]
    
   ,skin: 'row' //表格风格
   ,even: true
   ,page: true //是否显示分页
   ,limits: [3,5,10]
   ,limit: 5 //每页默认显示的数量
   
    
    // ,page: true
  });
  
  //工具栏事件
  table.on('toolbar(test)', function(obj){
    var checkStatus = table.checkStatus(obj.config.id);
    switch(obj.event){
      case 'getCheckData':
        var data = checkStatus.data;
        layer.alert(JSON.stringify(data));
      break;
      case 'getCheckLength':
        var data = checkStatus.data;
        layer.msg('选中了：'+ data.length + ' 个');
      break;
      case 'isAll':
        layer.msg(checkStatus.isAll ? '全选': '未全选')
      break;
    };
  });
  //监听行工具事件
  table.on('tool(test)', function(obj){
    var data = obj.data;
    //console.log(obj)
    if(obj.event === 'del'){
      layer.confirm('真的删除行么', function(index){
        obj.del();
        layer.close(index);
      });
    } else if(obj.event === 'edit'){
      layer.prompt({
        formType: 2
        ,value: data.email
      }, function(value, index){
        obj.update({
          email: value
        });
        layer.close(index);
      });
    }
  });
});
