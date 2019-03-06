//此文件会压缩到static目录下
Nv.add("./js/pro",function(nv,$){
    //常用工具类
    var tools = nv.tools,
        //常用节点控制方法
        dom = nv.dom;
    var $side = $(".nv-layout-side"),
        $nav = $side.find(".nv-nav"),
        $bg = $(".nv-layout").first().find(".nv-layout-side"),
        $layout = $(".nv-layout > .nv-layout"),
        $trigger = $(".nv-layout-trigger"),
        $headerNav = $(".nv-layout-header .nv-nav"),
        $menuIcon = "",
        $sideBg = "";
    /**
     * @Author: zhangjinglin
     * @Email: zhangjinglin@jd.com
     * @Date: Created in 2018/7/16 下午9:26
     * @Description:IE检测
     * @params <String> paramName
     * @paramsDescription  paramName :
     */

    function IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7) {
                return 7;
            } else if(fIEVersion == 8) {
                return 8;
            } else if(fIEVersion == 9) {
                return 9;
            } else if(fIEVersion == 10) {
                return 10;
            } else {
                return 6;//IE版本<=7
            }
        } else if(isEdge) {
            return 'edge';//edge
        } else if(isIE11) {
            return 11; //IE11
        }else{
            return -1;//不是ie浏览器
        }
    }

    var pro = {
        init:function(config){
            var _v = IEVersion();
            if( _v <= 9 && _v > -1){
                $("body").prepend(pro.options.warning);
                return false;
            }
            //初始化方法
            this.events.resizeEvent();
        },
        //临时变量存放处
        options:{
            warning:"<div class='pro-warning-top'>" +
            "<div class=\"nv-alert nv-alert-warning nv-alert-with-icon\">\n" +
            "        <i class=\"nvicon-info\"></i>\n" +
            "        <span class=\"nv-alert-message\">您正在使用的浏览器版本过低，不能正常浏览和使用本系统，请使用<a href='https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads'>IE10以上</a>系统或者<a href='http://www.firefox.com.cn/'>火狐</a>、<a href='https://en.softonic.com/s/chrome?'>Chrome</a></span>\n" +
            "    </div>" +
            "</div>"
        },
        events:{
            resizeEvent:function(){
                var width = $(window).width();
                pro.eventsFn.resizeFn(width);
                $bg.append("<div class='nv-bgground-shadow nv-bgground-show'></div>");
                $headerNav.before("<i class='nvicon-classify-empty'></i>");
                //
                //
                tools.later(function(){
                    $sideBg = $(".nv-bgground-shadow");
                    $menuIcon = $(".nvicon-classify-empty");
                    $sideBg.off("click").on("click",function(){
                        $trigger.click();
                    })
                    $menuIcon.off("click").on("click",function(ev){
                        ev.stopPropagation();
                        if($headerNav.hasClass("nv-nav-block")){
                            $headerNav.removeClass("nv-nav-block");
                        }else{
                            $headerNav.addClass("nv-nav-block");
                        }

                    })
                    $headerNav.on("click",function(ev){
                        ev.stopPropagation();
                    })
                    nv.dom.clickQueen.push(function(){
                        $headerNav.removeClass("nv-nav-block");
                    })



                },0)
                dom.resizeQueen.push(pro.eventsFn.resizeFn)
            }
        },
        eventsFn:{
            resizeFn:function(width){
                if(width <= 479){
                    //手机
                    $side.addClass("nv-layout-collapsedClassName");
                    $nav.addClass("nv-nav-collapsed");
                    $layout.addClass("nv-layout-low")
                }
                if(width >= 480){
                    //pad
                    $side.addClass("nv-layout-collapsedClassName");
                    $nav.addClass("nv-nav-collapsed");
                    $layout.addClass("nv-layout-low");
                }
                if(width >= 992){
                    //pc端
                    $side.removeClass("nv-layout-collapsedClassName");
                    $nav.removeClass("nv-nav-collapsed");
                }

            }
        },
        ajax:{

        }


    }
    //
    pro.init();
    return {
    }
},{requires:["jquery"]})