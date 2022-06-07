
layui.use('element', function () {
    var $ = layui.jquery
        , element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块

    //触发事件
    var active = {
        tabAdd: function () {
            //新增一个Tab项
            element.tabAdd('demo', {
                title: '新选项' + (Math.random() * 1000 | 0) //用于演示
                , content: '内容' + (Math.random() * 1000 | 0)
                , id: new Date().getTime() //实际使用一般是规定好的id，这里以时间戳模拟下
            })
        }
        , tabDelete: function (othis) {
            //删除指定Tab项
            element.tabDelete('demo', '44'); //删除：“商品管理”


            othis.addClass('layui-btn-disabled');
        }
        , tabChange: function () {
            //切换到指定Tab项
            element.tabChange('demo', '22'); //切换到：用户管理
        }
    };

    $('.site-demo-active').on('click', function () {
        var othis = $(this), type = othis.data('type');
        active[type] ? active[type].call(this, othis) : '';
    });

    //Hash地址的定位
    var layid = location.hash.replace(/^#test=/, '');
    element.tabChange('test', layid);

    element.on('tab(test)', function (elem) {
        location.hash = 'test=' + $(this).attr('lay-id');
    });

});



//搜索框
let arr = ['老年人基础套餐A']
let input = document.getElementById('val');
let shou = document.getElementById('shou');
input.onkeyup = function () {
    shou.style.display = 'block';
    // input.value 和 arr的每一项进行匹配 indexOf() 匹配不到 -1
    let str = '';
    arr.forEach((item) => {
        let res = item.indexOf(input.value);
        if (res != -1) {
            str = '<p>' + item + '</p>';
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
input.onblur = function () {
    shou.style.display = 'none';
    input.value = '';
}






layui.use(['dropdown', 'util', 'layer', 'table'], function () {
    var dropdown = layui.dropdown
        , util = layui.util
        , layer = layui.layer
        , table = layui.table
        , $ = layui.jquery;

    //初演示
    dropdown.render({
        elem: '.demo1'
        , data: [{
            title: '男性套餐'
            , id: 100

        }, {
            title: '女性套餐'
            , id: 101
        }, {
            title: '老年人'
            , id: 102
        }, {
            title: '入职套餐'
            , id: 103
        }]

    });


});

layui.use('table', function () {
    var table = layui.table;







    table.render({
        elem: '#test'
        , url: 'physical examination.json'
        , toolbar: '#toolbarDemo'
        , title: '用户数据表'
        , totalRow: true
        , cols: [[
            { type: 'checkbox', fixed: 'left' }

            , { field: 'id', title: '套餐ID', width: 86, align: "center", edit: 'text' }
            , { field: 'username', title: '套餐名称', width: 130, align: "center", edit: 'text' }
            , { field: 'img', title: '套餐图片', width: 100, align: "center", toolbar: '#img_b' }
            , { field: 'type', title: '套餐类型', width: 101, align: "center", edit: 'text' }
            , { field: 'campus', title: '适用院区', width: 100, align: "center", edit: 'text' }
            , { field: 'price', title: '套餐价格(元)', width: 100, align: "center", edit: 'text' }
            , { field: 'project', title: '套餐项目', width: 320, align: "center", edit: 'text' }
            , { field: 'state', title: '套餐状态', width: 82, align: "center", toolbar: '#Packagestatus' }
            , { fixed: 'right', title: '操作', align: "center", toolbar: '#barDemo', width: 149 }
        ]]
        , page: true

    });

    
  

    table.render({
        elem: '#test1'
        , url: 'physical examination copy.json'
        , toolbar: '#toolbarDemo'
        , title: '用户数据表'
        , totalRow: true
        , cols: [[
            { type: 'checkbox', fixed: 'left' }

            , { field: 'id', title: '项目ID', width: 86, align: "center", edit: 'text' }
            , { field: 'username', title: '项目名称', width: 115, align: "center", edit: 'text' }
            , { field: 'img', title: '项目价格(元)', width: 110, align: "center" }
            , { field: 'type', title: '所属套餐', width: 140, align: "center", edit: 'text' }
            , { field: 'campus', title: '项目介绍', width: 324, align: "center", }
            , { field: 'price', title: '注意事项', width: 173, align: "center", edit: 'text' }
            , { field: 'state', title: '项目状态', width: 82, align: "center", toolbar: '#Packagestatus' }
            , { fixed: 'right', title: '操作', align: "center", toolbar: '#barDemo', width: 149 }
        ]]
        , page: true

    });
    
    table.render({
        elem: '#test2'
        , url: 'physical examination copy 2.json'
        , toolbar: '#toolbarDemo'
        , title: '用户数据表'
        , totalRow: true
        , cols: [[
             { field: 'username', title: '类型名称', align: "center"}
            , { field: 'type', title: '套餐数量', width: 162, align: "center" }
            , { field: 'project', title: '包含套餐', width: 676, align: "center"}
            , { field: 'state', title: '状态', width: 82, align: "center", toolbar: '#Packagestatus' }
            , { fixed: 'right', title: '操作', align: "center", toolbar: '#barDemo', width: 149 }
        ]]
        , page: true

    });




    //工具栏事件
    table.on('toolbar(test)', function (obj) {
        var checkStatus = table.checkStatus(obj.config.id);
        switch (obj.event) {
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：' + data.length + ' 个');
                break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选' : '未全选')
                break;
        };
    });
    //监听行工具事件
    table.on('tool(test)', function (obj) {
        var data = obj.data;
        //console.log(obj)
        if (obj.event === 'del') {
            layer.confirm('真的删除行么', function (index) {
                obj.del();
                layer.close(index);
            });
        } else if (obj.event === 'edit') {
            layer.prompt({
                formType: 2
                , value: data.email
            }, function (value, index) {
                obj.update({
                    email: value
                });
                layer.close(index);
            });
        }
    });

    
});


