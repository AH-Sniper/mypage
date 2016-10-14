$(function () {
    // 主导航菜单点击事件
    $('.topNavLinks a').each(function(i) {
        $(this).click(function(){
            var a = $('.dropNav').eq(i);
            var b = $(this).find('i');  // 主导航的小箭头
            // 主导航小箭头调整
            $(this).siblings().find('i.down').css('visibility','visible');
            $(this).siblings().find('i.up').css('visibility','hidden');
            // droMenu 显示
            if(a.css('display') == 'none') {
                a.slideDown().siblings().slideUp();
                b.eq(0).css('visibility','hidden');
                b.eq(1).css('visibility','visible');
            } else {
                a.slideUp();
                b.eq(1).css('visibility','hidden');
                b.eq(0).css('visibility','visible');
            }
            return false;
        })
    });
    // dropMenu 关闭按钮点击事件
    $('.dropNav .closeBtn').click(function(){
        // dropMenu 关闭
        $('.dropNav').each(function() {
           $(this).slideUp();
        });
        // 主导航小箭头调整
        var b = $('.topNavLinks a');
        b.find('i.down').css('visibility','visible');
        b.find('i.up').css('visibility','hidden');
        return false;
    });
    // menuBtn点击事件
    $('#menuBtn').click(function(){
        var a = $('#sideMenu');
        var b = $('#main');
        var c =$('#nav_menu-xs');
        var w = $(window).width()+17;  // 滚动条宽度
        if (w <= 768) {
            if (c.css('display') == 'block') {
                c.slideUp();
            } else {
                c.slideDown();
            }
        } else {
            if (a.css('left') == '0px') {
                a.css('left','-230px');
                b.css('margin-left','0px');
                return;
            }
            a.css('left','0px');
            b.css('margin-left','230px');
        }
        return false;
    });
    // sideMenu 关闭按钮
    $('#sideMenu .closeBtn').click(function(){
       $('#sideMenu').css('left','-230px');
       $('#main').css('margin-left','0');
        return false;
    });
    // nav_menu-xs 关闭按钮
    $('#nav_menu-xs .closeBtn').click(function() {
       $('#nav_menu-xs').slideUp();
        $('.xs-container').find('div').empty();
        return false;
    });
    // nav_menu-xs 点击菜单动态加载内容
    $('.xs-container a').each(function(i) {
        var a = $('.xs-section').eq(i);
        var b = $('.navContent').eq(i);
       $(this).click(function(){
           if (a.html() == '') {
               a.html(b.html());
           } else {
               a.empty();
           }
           return false;
       });
    });
});
