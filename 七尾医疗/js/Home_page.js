var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '近7日挂号预约情况'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日"]
    },
    yAxis: {},

    series: [{
        name: '预约人数',
        type: 'bar',
        text: "日期",
        barWidth: 10,//柱图宽度
        data: [5600, 7600, 3600, 5000, 7800, 5600, 6200],
        color:"blue",
        itemStyle:{
            normal:{
                label:{
                    formatter:"{c}",
                    show:true,
                    position: 'top',
                    textStyle:{
                        fontWeight:"bolder",
                        fontSize:"12",
                        close:"#fff"
                        
                    }
                }
            }
        }
        }
]

};





// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('main1'));
var option1 = {
    title: {
        text: '近7日门诊充值趋势'
    },
    xAxis: {
        type: 'category',
        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', '1月7日'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [20600,21000,59600 ,21000 , 78000,30000 , 21000],
            type: 'line',
        },
    ],
};
myChart.setOption(option1);






let data = null;
$.ajax({
    url: 'json/Home_page.json',
    async: false,
    success: function(res) {
        data = res[0];
    }
});

var u5031 = document.getElementsByClassName("u5031_div")[0];
for(var i=0;i<data.name.length;i++){
    u5031.innerHTML+=`
    <div class="content_u5031_div">
        <div class='tx'><div><img src="../img/useravatar.jpg"></div></div>
        <div class=''>${data.name[i]}</div>
        <div class=''>${data.mobile[i]}</div>
        <div class=''>${data.department[i]}</div>
        <div class=''>${data.expenses[i]}</div>
        <div class=''>${data.RegistrationTime[i]}</div>
    </div>
    `
}
var div = document.getElementsByClassName("u5031_div-div2")[0];
for(var i=0;i<data.name.length;i++){
    div.innerHTML+=`
    <div class="content_u5031_div">
        <div class='pm'>${data.ranking[i]}</div>
        <div class='ks'>${data.Departments[i]}</div>
        <div class='gh'>${data.RegisteredAmount[i]}</div>
    </div>
    `
}
var div = document.getElementsByClassName("u5031_div-div3")[0];
for(var i=0;i<data.name.length;i++){
    div.innerHTML+=`
    <div class="content_u5031_div">
        <div class='pm'>${data.ranking[i]}</div>
        <div class='ks'>${data.patientName[i]}</div>
        <div class='gh'>${data.RegisteredAmount[i]}</div>
    </div>
    `
}