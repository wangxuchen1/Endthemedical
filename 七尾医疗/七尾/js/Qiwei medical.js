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

layui.use(['jquery', 'table'], function () {
    var $ = layui.$;
    var table = layui.table;

    var totalCount;
    // $.get("json/data.json", function (res) {
    //     console.log(res.length)
    // })
    //第一个实例
    table.render({
        elem: '#demo',
        height: 750,
        width: 0,
        url: 'json/data.json' ,//数据接口
        limit:10,
        limits:[10,15,30,25,30],
        page: true //开启分页
            ,
        cols: [
            [ //标题栏
                {
                    field: 'username',
                    title: '医生姓名',
                    width: 80,
                    rowspan: 2
                } //rowspan即纵向跨越的单元格数
                , {
                    field: 'amount',
                    title: '科室',
                    width: 110,
                    rowspan: 2,
                }, {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                } //colspan即横跨的单元格数，这种情况下不用设置field和width
                , {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                }, {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                }, {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                }, {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                }, {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                }, {
                    align: 'center',
                    title: '2021/01/01 星期一',
                    colspan: 2
                }, {
                    align: 'center',
                    title: '操作',
                    width: 90,
                    rowspan: 2,
                    templet:titleTpl

                }

            ],
            [{
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                },
                {
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                },
                {
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                },
                {
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                }, {
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                },
                {
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                }, {
                    field: 'province',
                    title: '上午',
                    width: 70
                }, {
                    field: 'city',
                    title: '下午',
                    width: 70
                }
            ]
        ],
        request: {
            pageName: '_page' //页码的参数名称，默认：page
                ,
            limitName: '_limit' //每页数据量的参数名，默认：limit
        }

    });

});

layui.use('dropdown', function () {
    var dropdown = layui.dropdown
    dropdown.render({
        elem: '#demo2' //可绑定在任意元素中，此处以上述按钮为例
            ,
        data: [{
            title: '2020',
            id: 100,
            child: [{
                title: '1月',
                id: 105
            }, {
                title: '2月',
                id: 106
            }, {
                title: '3月',
                id: 106
            }, {
                title: '4月',
                id: 106
            }]
        }, {
            title: '2021',
            id: 101

                ,
            child: [{
                title: '1月',
                id: 105
            }, {
                title: '2月',
                id: 106
            }, {
                title: '3月',
                id: 106
            }, {
                title: '4月',
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

layui.use('laydate', function(){
    var laydate = layui.laydate;
   
  //时间选择器
  laydate.render({
    elem: '#test4'
    ,type: 'time'
  });
})  


// layui.use('form', function(){
//     var form = layui.form;
    
//     //监听提交
//     form.on('submit(formDemo)', function(data){
//       layer.msg(JSON.stringify(data.field));
//       return false;
//     });
//   });


$("#icon").click(function(){
    $("#bbox").css({
        "display":"none"
    })
    
    window.location.href="Home-page.html" 
})
$(".layui-contaniner").click(function(){
    $("#bbox").css({
        "display":"block"
    })
})
$("#btn2").click(function(){
    bbox.style.display = "none"
    
    layer.open({
        type: 1, 
        title:"关闭预约确认",
        content: '<h2 style=text-align:center>关闭预约确认</h2><br>关闭后该医生所有的排班将失效，用户将无法从小程序进行预约，确定关闭吗？', //这里content是一个普通的String
        area:["400px","290px"],
        anim:5,
        btn:["取消","确定"]
     

      });
    
})

