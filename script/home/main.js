
$(function(){


    // 首页 slide
    // 0组动画初始化
    slideIn(0);
    var i = 0;
     var stimer = null;


    $('.slideContainer').hover(function(){
        if(stimer) {
            clearInterval(stimer);
        }
    },function(){
        stimer = setInterval(function(){
            slideOut(i);
            if (i <3) {
                slideIn(i+1);
            } else {
                slideIn(0);
            }
            i++;
            if (i > 3) { i = 0 }
        },6000);
    }).trigger('mouseout');

    $('.slideNav').each(function(index){
        $(this).click(function(){
            if(stimer) {
                clearInterval(stimer);
            }
            slideOut(i);
            slideIn(index);
            i = index;
            $('.slideContainer').trigger('mouseout');
        });
    });

    // pageDown 按钮点击事件
    $('#pageDown').click(function(){
        if($('body')) {
            $('body').animate({scrollTop:616},600);
        }
        if($('html')) {
            $('html').animate({scrollTop:616},600);
        }
        return false;
    });
    // 三门基本功，圆环百分比 hover 事件

    $('.circle').hover(function(){
        $(this).find('img').removeClass('zoomIn').addClass('zoomOut');
        $(this).find('.skillPercent').removeClass('zoomOut').addClass('zoomIn');
    },function(){
        $(this).find('img').removeClass('zoomOut').addClass('zoomIn');
        $(this).find('.skillPercent').removeClass('zoomIn').addClass('zoomOut');
    });

    // 返回顶部按钮
    $('.backToTop').click(function () {
        if($('body')){
            $('body').animate({scrollTop:0}, 880);
        }
        if($('html')) {
            $('html').animate({scrollTop:0}, 880);
        }
    });

    // 导航点击
    var nav = $('#myNav').find('a');
    nav.eq(0).click(function () {
        if($('body')){
            $('body').animate({scrollTop:0}, 880);
        }
        if($('html')) {
            $('html').animate({scrollTop:0}, 880);
        }
        return false;
    });
    nav.eq(1).click(function () {
        if($('body')){
            $('body').animate({scrollTop:616}, 880);
        }
        if($('html')) {
            $('html').animate({scrollTop:616}, 880);
        }
        return false;
    });
    nav.eq(2).click(function () {
        if($('body')){
            $('body').animate({scrollTop:2319}, 880);
        }
        if($('html')) {
            $('html').animate({scrollTop:2319}, 880);
        }
        return false;
    });
    nav.eq(3).click(function () {
        if($('body')){
            $('body').animate({scrollTop:2489}, 880);
        }
        if($('html')) {
            $('html').animate({scrollTop:2489}, 880);
        }
        return false;
    });

    // skillgallery 动画
    var g_n_index = 1;   // gallery-nav-index
    // 初始化
    for( var x=0;x<4;x++) {
        $('.gallery').eq(x).addClass('fadeInUp');
    }
    $('.gallery-nav b').each(function (index) {
       $(this).click(function () {
           var a = $('.gallery-nav b').index($('.current-gallery'));
           if (a != index) {
               $('.skillGallery').find('.fadeInUp').removeClass('fadeInUp').addClass('zoomOut')
                   .css('z-index','0');
               for (var i=index*4; i<(index*4+4); i++) {
                   $('.gallery').eq(i).removeClass('zoomOut').addClass('fadeInUp')
                       .css('z-index','1');
               }
               $('.gallery-nav b').eq(index).addClass('current-gallery')
                   .siblings().removeClass('current-gallery');
               if (index == 0) {
                   g_n_index =1;
                   clearInterval(gtimer);
                   gtimer = setInterval(function () {
                       $('.skillGallery').find('.fadeInUp').removeClass('fadeInUp').addClass('zoomOut')
                           .css('z-index','0');
                       for (var i=g_n_index*4; i<(g_n_index*4+4); i++) {
                           $('.gallery').eq(i).removeClass('zoomOut').addClass('fadeInUp')
                               .css('z-index','1');
                       }
                       $('.gallery-nav b').eq(g_n_index).addClass('current-gallery')
                           .siblings().removeClass('current-gallery');
                       if(g_n_index == 1) {
                           g_n_index =0;
                       } else {
                           g_n_index =1;
                       }
                   },6000);
               } else {
                   g_n_index =0;
                   clearInterval(gtimer);
                   gtimer = setInterval(function () {
                       $('.skillGallery').find('.fadeInUp').removeClass('fadeInUp').addClass('zoomOut')
                           .css('z-index','0');
                       for (var i=g_n_index*4; i<(g_n_index*4+4); i++) {
                           $('.gallery').eq(i).removeClass('zoomOut').addClass('fadeInUp')
                               .css('z-index','1');
                       }
                       $('.gallery-nav b').eq(g_n_index).addClass('current-gallery')
                           .siblings().removeClass('current-gallery');
                       if(g_n_index == 1) {
                           g_n_index =0;
                       } else {
                           g_n_index =1;
                       }
                   },6000);
               }
           }
       });
    });


    // gallery 自动切换定时器
    // 初始化
     var gtimer = setInterval(function () {
            $('.skillGallery').find('.fadeInUp').removeClass('fadeInUp').addClass('zoomOut')
                .css('z-index','0');
            for (var i=g_n_index*4; i<(g_n_index*4+4); i++) {
                $('.gallery').eq(i).removeClass('zoomOut').addClass('fadeInUp')
                    .css('z-index','1');
            }
            $('.gallery-nav b').eq(g_n_index).addClass('current-gallery')
                .siblings().removeClass('current-gallery');
            if(g_n_index == 1) {
                g_n_index =0;
            } else {
                g_n_index =1;
            }
        },6000);

    // demo 点击弹出模态框
    $('.demo-cover').each(function (index) {
       $(this).click(function () {
           if (index == 0) {
               $('#tmallModal').modal();
           } else {
               $('#w3cModal').modal();
           }
       });
    });
    // 滚动条事件
    $(window).scroll(function() {
       var scrollHeight = $(window).scrollTop();
       var windowHeight = $(window).height();

        // 导航条改变样式
       if ( scrollHeight > 560) {
           $('.navbar').css({'padding':'0px','background-color':'rgba(0,0,0,.6)'});
           $('.navbar-header a i').css({'font-size':'50px','color':'#e1e1e2'});
       } else {
           $('.navbar').css({'padding':'20px','background-color':'transparent'});
           $('.navbar-header a i').css({'font-size':'68px','color':'#19B5E7'});
       }
       // 向下翻页按钮
       if ( scrollHeight > 615) {
           $('#pageDown').hide(300);
           $('.backToTop').fadeIn(500);
       } else {
           $('#pageDown').show(300);
           $('.backToTop').fadeOut(500);
       }
       // 三门基本功

        if ( scrollHeight > 168) {
            $('#cont-1').find('h2').addClass('fadeInDown');
        } else {
            $('#cont-1').find('h2').removeClass('fadeInDown');
        }
        if ( scrollHeight >= 300 && scrollHeight <= 900 ) {
            $('#cont-1').find('.animatedBox').removeClass('rotateOutUpRight').addClass('rotateInDownLeft');
            $('.skillBox').find('.right-circle').addClass('startRightCircle');
            $('#skillBox-1').find('.left-circle').addClass('startLeftCircle1');
            $('#skillBox-2').find('.left-circle').addClass('startLeftCircle2');
            $('#skillBox-3').find('.left-circle').addClass('startLeftCircle3');
        } else {
            if($('.rotateInDownLeft').length > 0) {
                $('#cont-1').find('.animatedBox').removeClass('rotateInDownLeft').addClass('rotateOutUpRight');
            }
            $('.skillBox').find('.right-circle').removeClass('startRightCircle');
            $('#skillBox-1').find('.left-circle').removeClass('startLeftCircle1');
            $('#skillBox-2').find('.left-circle').removeClass('startLeftCircle2');
            $('#skillBox-3').find('.left-circle').removeClass('startLeftCircle3');
        }
        // gallery 初始化
        if (scrollHeight >= 580) {
            $('#transSection-2').find('h2').removeClass('fadeOutUp').addClass('fadeInDown');
        } else {
            $('#transSection-2').find('h2').removeClass('fadeInDown').addClass('fadeOutUp');
        }
        // rwd 动画
        if ( scrollHeight >= 1280 && scrollHeight <= 2100) {
            $('#rwd-1').removeClass('fadeOutUp').addClass('fadeInDown');
            $('#rwd-2').removeClass('fadeOutLeft').addClass('fadeInLeft');
            $('#rwd-3').removeClass('fadeOutRight').addClass('fadeInRight');
            $('#rwd-4').removeClass('fadeOutDown').addClass('fadeInUp');
            $('.rwd-desc').find('h2').removeClass('fadeOutUp').addClass('fadeInDown')
                .nextAll('p').removeClass('fadeOutDown').addClass('fadeInUp');
        } else {
            $('#rwd-1').removeClass('fadeInDown').addClass('fadeOutUp');
            $('#rwd-2').removeClass('fadeInLeft').addClass('fadeOutLeft');
            $('#rwd-3').removeClass('fadeInRight').addClass('fadeOutRight');
            $('#rwd-4').removeClass('fadeInUp').addClass('fadeOutDown');
            $('.rwd-desc').find('h2').removeClass('fadeInDown').addClass('fadeOutUp')
                .nextAll('p').removeClass('fadeInUp').addClass('fadeOutDown');
        }
    });


});



// 首页 slide 切换函数
function slideIn(index) {
    var slide1 = $('#slide-1'),
        slide2 = $('#slide-2'),
        slide3 = $('#slide-3'),
        slide4 = $('#slide-4'),
        slide21 = $('#slide-2-1'),
        slide22 = $('#slide-2-2'),
        slide23 = $('#slide-2-3'),
        slide24 = $('#slide-2-4'),
        slide31 = $('#slide-3-1'),
        slide32 = $('#slide-3-2'),
        slide33 = $('#slide-3-3'),
        slide41 = $('#slide-4-1'),
        slide42 = $('#slide-4-2'),
        slide43 = $('#slide-4-3'),
        slide44 = $('#slide-4-4'),
        slide45 = $('#slide-4-5'),
        slide46 = $('#slide-4-6'),
        slideNav = $('.slideNav');

    switch(index){
        case 0:
            // 0组动画进入
            slide1.find('h1').removeClass('zoomOut').addClass('zoomIn');
            slide1.find('p').removeClass('zoomOutDown').addClass('zoomInUp');
            slide1.find('b').removeClass('rollOut').addClass('rollIn');
        break;

        case 1:
            // 1组动画进入
            slide21.removeClass('fadeOutLeftBig').css('animation-delay','.3s').addClass
            ('fadeInLeftBig');
            slide22.removeClass('zoomOut').css('animation-delay','1.8s').addClass('zoomIn');
            slide23.removeClass('fadeOutUpBig').css('animation-delay','.6s').addClass
            ('fadeInDownBig');
            slide24.removeClass('fadeOutRightBig').addClass('fadeInRightBig');
            slide2.find('p').removeClass('fadeOutDown').css('animation-delay','2s').addClass
            ('fadeInUp');
        break;

        case 2:
            // 2组动画进入
            slide31.removeClass('fadeOutLeftBig').addClass('fadeInLeftBig');
            slide32.removeClass('zoomOut').css('animation-delay','1.3s').addClass('zoomIn');
            slide33.removeClass('bounceOutUp').addClass('bounceInDown');
            slide3.find('p').removeClass('fadeOutDown').css('animation-delay','2s').addClass
            ('fadeInUp');
        break;

        case 3:
            // 3组动画进入
            slide41.removeClass('fadeOutDown').addClass('fadeInUp');
            slide42.removeClass('fadeOutUp').addClass('fadeInDown');
            slide43.removeClass('fadeOutRightBig').addClass('fadeInRightBig');
            slide44.removeClass('fadeOutRightBig').css('animation-delay','.3s').addClass
            ('fadeInRightBig');
            slide45.removeClass('fadeOutRightBig').css('animation-delay','.6s').addClass
            ('fadeInRightBig');
            slide46.removeClass('fadeOutRightBig').css('animation-delay','.9s').addClass
            ('fadeInRightBig');
            slide4.find('p').removeClass('fadeOutDown').css('animation-delay','2s').addClass
            ('fadeInUp');
        break;
    }

    slideNav.eq(index).addClass('currentSlide').siblings().removeClass('currentSlide');
    $('.slide').eq(index).css('z-index','1').siblings().css('z-index','0');
}

function slideOut(index) {
    var slide1 = $('#slide-1'),
        slide2 = $('#slide-2'),
        slide3 = $('#slide-3'),
        slide4 = $('#slide-4'),
        slide21 = $('#slide-2-1'),
        slide22 = $('#slide-2-2'),
        slide23 = $('#slide-2-3'),
        slide24 = $('#slide-2-4'),
        slide31 = $('#slide-3-1'),
        slide32 = $('#slide-3-2'),
        slide33 = $('#slide-3-3'),
        slide41 = $('#slide-4-1'),
        slide42 = $('#slide-4-2'),
        slide43 = $('#slide-4-3'),
        slide44 = $('#slide-4-4'),
        slide45 = $('#slide-4-5'),
        slide46 = $('#slide-4-6'),
        slideNav = $('.slideNav');

    switch(index) {
        case 0:
            // 0组动画出去
            slide1.find('h1').removeClass('zoomIn').addClass('zoomOut');
            slide1.find('p').removeClass('zoomInUp').addClass('zoomOutDown');
            slide1.find('b').removeClass('rollIn').addClass('rollOut');
        break;

        case 1:
            // 1组动画出去
            slide21.removeClass('fadeInLeftBig').css('animation-delay','0s').addClass
            ('fadeOutLeftBig');
            slide22.removeClass('zoomIn').css('animation-delay','0s').addClass('zoomOut');
            slide23.removeClass('fadeInDownBig').css('animation-delay','0s').addClass
            ('fadeOutUpBig');
            slide24.removeClass('fadeInRightBig').addClass('fadeOutRightBig');
            slide2.find('p').removeClass('fadeInUp').css('animation-delay','0s').addClass
            ('fadeOutDown');
        break;

        case 2:
            // 2组动画出去
            slide31.removeClass('fadeInLeftBig').addClass('fadeOutLeftBig');
            slide32.removeClass('zoomIn').css('animation-delay','0s').addClass('zoomOut');
            slide33.removeClass('bounceInDown').addClass('bounceOutUp');
            slide3.find('p').removeClass('fadeInUp').css('animation-delay','0s').addClass
            ('fadeOutDown');
        break;

        case 3:
            // 3组动画出去
            slide41.removeClass('fadeInUp').addClass('fadeOutDown');
            slide42.removeClass('fadeInDown').addClass('fadeOutUp');
            slide43.removeClass('fadeInRightBig').addClass('fadeOutRightBig');
            slide44.removeClass('fadeInRightBig').css('animation-delay','0s').addClass
            ('fadeOutRightBig');
            slide45.removeClass('fadeInRightBig').css('animation-delay','0s').addClass
            ('fadeOutRightBig');
            slide46.removeClass('fadeInRightBig').css('animation-delay','0s').addClass
            ('fadeOutRightBig');
            slide4.find('p').removeClass('fadeInUp').css('animation-delay','0s').addClass
            ('fadeOutDown');
        break;
    }
}
