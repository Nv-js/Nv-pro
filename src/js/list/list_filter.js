Nv.add("./js/list/list_filter",function(nv,$,modal){
//常用工具类
    var tools = nv.tools,
        //常用节点控制方法
        dom = nv.dom;
    var list = {
        init:function(config){
            //初始化方法
            this.events.btnToolsEvent();
        },
        //临时变量存放处
        options:{
        },
        //事件方法,建议以event结尾，e.g: domClick => domClickEvent
        events:{
            btnToolsEvent:function(){
                var prompt = modal.init(".nv-modal-prompt"),
                    imports = modal.init(".nv-modal-import");
                $("#newModal").on("click",function(){
                    prompt.show();
                })
                $("#newImport").on("click",function(){
                    imports.show();
                })


            }
        },
        //事件引用方法或者静态方法，建议以fn结尾，e.g: domClick => domClickFn
        eventsFn:{
        },
        //数据请求方法，建议以ajax结尾，e.g: domReload => domReloadAjax
        ajax:{
        }


    }
    list.init();
    //返回暴露的公共方法或者公共变量
    return {
    }


},{requires:["jquery","modal"]})