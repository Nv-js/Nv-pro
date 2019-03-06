Nv.add("./js/dashboard/workboard",function(nv,$,echarts){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('leida'));

    // 指定图表的配置项和数据
    var option =  {
        radar: [
            {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            {
                indicator: [
                    { text: 'URL', max: 150 ,color:"#000"},
                    { text: '完成需求书', max: 150 ,color:"#000"},
                    { text: '任务OTD', max: 150 ,color:"#000"},
                    { text: '代码行', max: 120 ,color:"#000"},
                    { text: '内部缺陷', max: 108 ,color:"#000"}
                ],
                center: ['50%', '50%'],
                radius: 120
            }
        ],
        series: [
            {
                name: '成绩单',
                type: 'radar',
                radarIndex: 1,
                data: [
                    {
                        value: [90, 113, 140, 30, 70],
                        name: '李四',
                        areaStyle: {
                            normal: {
                                opacity: 0.9,
                                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                    {
                                        color: 'rgba(228,99,87,0.72)',
                                        offset: 0
                                    },
                                    {
                                        color: 'rgba(228,99,87,0.72)',
                                        offset: 1
                                    }
                                ])
                            }
                        }
                    }
                ]
            }
        ]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    //印象图
    nv.dom.resizeQueen.push(function(){
        myChart.resize()
    })
    //
    return {

    }
},{requires:["jquery","echarts","mock"]})