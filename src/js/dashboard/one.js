Nv.add("./js/dashboard/one",function(nv,$,echarts){
    //拒收退货柱形图
    var refuse = echarts.init(document.getElementById('refuse'));
    var option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            top:'3%',
            width:"100%",
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine:{
                    lineStyle:{
                        color:"#ccc"
                    }
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    lineStyle:{
                        type:"dashed"
                    }
                }
            }
        ],
        series : [
            {
                name:'退货总量',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    refuse.setOption(option);
    //饼形图
    var pie = echarts.init(document.getElementById("pie"));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top:'0',
            width:"100%",
            containLabel: true
        },
        series: [
            {
                type:'pie',
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                radius:["50",'90%'],
                data:[
                    {value:335, name:'直接终止'},
                    {value:310, name:'下单终止'},
                    {value:234, name:'运途终止'},
                    {value:135, name:'技术终止'},
                    {value:1548, name:'其他'}
                ]
            }
        ]
    };
    pie.setOption(option)
    //错误提醒
    var error = echarts.init(document.getElementById('error'));
    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    var option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top:'10%',
            width:"100%",
            containLabel: true
        },
        title: {
            left: 'center',
            text: '异常细节图',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        series: [
            {
                name:'模拟数据',
                type:'line',
                smooth:true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: data
            }
        ]
    };
    error.setOption(option);
    nv.dom.resizeQueen.push(function(){
        refuse.resize();
        pie.resize();
        error.resize();
    })
    $.ajax({
        url:"/dist/js/dashboard/workboard.json",
        type:"post",
        success:function(data){
            console.log(JSON.parse(data));
        }
    })

    return {}
},{requires:["jquery","echarts","mock"]})