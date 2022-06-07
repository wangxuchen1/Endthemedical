
  // 日期
  layui.use('laydate', function () {
     var laydate = layui.laydate;
     laydate.render({
      elem: '#test1' //指定元素
     });
     });

    //  科室
    layui.use('dropdown', function () {
        var dropdown = layui.dropdown
        dropdown.render({
       elem: '#demo1' //可绑定在任意元素中，此处以上述按钮为例
        ,
       data: [{
        title: '内科',
        id: 100,
        child: [{
         title: '消化内科',
         id: 105
        }, {
        title: '血液内科',
         id: 106
        }, {
         title: '风湿免疫内科',
         id: 106
        }, {
         title: '肾内科',
         id: 106
        }]
       }, {
       title: '外科',
        id: 101
    
      ,
        child: [{
      title: '消化外科',
        id: 105
        }, {
        title: '血液外科',
        id: 106
       }, {
        title: '风湿免疫外科',
        id: 106
       }, {
        title: '肾外科',
        id: 106
       }]
      }],
      id: 'demo1'
       //菜单被点击的事件
       ,
       click: function (obj) {
        console.log(obj);
       layer.msg('回调返回的参数已显示再控制台');
       }
      });
      });
