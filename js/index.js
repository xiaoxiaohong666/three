/**
 * Created by Administrator on 2016/12/8.
 */
//window.onload=function(){
//    var navButton = document.getElementsByClassName("NavButton");
//    navButton.onclick = function(){
//        var nav = document.getElementsByName("nav");
//        nav.style.display='block';
//    }
//};
$(document).ready(function(){
    $(".NavButton").click(function(){
        if($(".nav").css('display')=="none"){
            $(".nav").slideDown();
        }
        else{
            $(".nav").slideUp();
        }

    });
    $(function(){
        for(var i=0;i<$(".ImgOut li").length;i++){
            $(".circle").append("<li></li>");
        }
        $(".circle li").first().addClass("active");
        //   ���Ƶ�һ����Ƭ
        var firstimg=$(".ImgOut li").first().clone();
//        ������ͼƬ�����������棬��ul�Ŀ����ó�ͼƬ����*ͼƬ���
        $(".ImgOut").append(firstimg).width($(".ImgOut li").length*($(".ImgOut img").width()));
        //  �����һ��rightbutton
//        $(".rightButton").click(function(){
//            i++;
//            if(i==$(".ImgOut li").length){
//                i=1;
//                $(".ImgOut").css("left",0);
//            }
//
//            $(".ImgOut").stop().animate({left:-i*600},1000);
////            ���СԲ�����ʽ
//            if(i==$(".ImgOut li").length-1){
//                $(".circle li").eq(0).addClass("active").siblings().removeClass("active");
//            }else{
//                $(".circle li").eq(i).addClass("active").siblings().removeClass("active");
//            }
//        });
////        �����һ��leftButton
//        $(".leftButton").click(function(){
//            i--;
//            if(i==-1){
//                i=$('.ImgOut li').length-2;
//                $('.ImgOut').css({left:-($('.ImgOut li').length-1)*600});
//            }
//            $(".ImgOut").stop().animate({left:-i*600},1000);
//            $(".circle li").eq(i).addClass("active").siblings().removeClass("active");
//        });
//        $(".wrap").hover(function(){
//            $(".Button").show();
//        },function(){
//            $(".Button").hide();
//        })
//        ��껮��Բ��
        $(".circle li").mouseover(function(){
            var _index = $(this).index();
            $(".ImgOut").stop().animate({left:-_index*600},2000);
            $(".circle li").eq(_index).addClass("active").siblings().removeClass("active");
        });

//        ��ʱ���Զ�����
        var timer=setInterval(function(){
            i++;
            if(i==$(".ImgOut li").length){
                i=1;
                $('.ImgOut').css({left:0});
            }
            $(".ImgOut").stop().animate({left:-i*600},2000);
            if(i==$(".ImgOut li").length-1){
                $(".circle li").eq(0).addClass("active").siblings().removeClass("active");
            }else{
                $(".circle li").eq(i).addClass("active").siblings().removeClass("active");
            }
        },3000);
        $(".wrap").hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(function(){
                i++;
                if(i==$(".ImgOut li").length){
                    i=1;
                    $('.ImgOut').css({left:0});
                }
                $(".ImgOut").stop().animate({left:-i*600},2000);
                if(i==$(".ImgOut li").length-1){
                    $(".circle li").eq(0).addClass("active").siblings().removeClass("active");
                }else{
                    $(".circle li").eq(i).addClass("active").siblings().removeClass("active");
                }
            },3000);
        })
    })
});