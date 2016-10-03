$(document).ready(function() {
	var $header_search_input = $('#mq'),
		$header_search_placeholder = $('.combobox-placeholder');

	//搜索框事件
	$header_search_input.focus(function() {
		$header_search_placeholder.css('color','#ccc');
	})
	$header_search_input.blur(function() {
		$header_search_placeholder.css('color','#666');
		if(!$header_search_input.val()) {
			$header_search_placeholder.css('display','block');
		}
	})
	$header_search_input.keydown(function() {
		$header_search_placeholder.css('display','none');
	})
	//窗口响应事件
	responsiveCheck();
	//右侧边栏相关动画
	$('.tip-need').each(function(i){	
		$(this).mouseover(function() {
			$('.box-tip').eq(i).css('display','block').stop(true,true)
				   .animate({'opacity': '1', 'right': '35px'}, 360);
		});
		$(this).mouseout(function() {
			$('.box-tip').eq(i).stop(true,true)
				   .animate({'opacity': '0', 'right': '70px'}, 360).css('display','none');
		});
	});	
	$('#bottom2').mouseover(function() {
		setTimeout(function(){$('#qrcode-tip').css('display','block');},260)
	}).mouseout(function() {
		setTimeout(function(){$('#qrcode-tip').css('display','none');},260)
	});
	//返回顶部按钮
	$('#bottom').click(function() {
		$('body').animate({scrollTop:0}, 300);
	});

});
//浏览器窗口大小发生改变时触发事件
$(window).resize(function() {
	responsiveCheck();
});
//响应浏览器窗口宽度函数
function responsiveCheck() {
	// var body_width = document.body.clientWidth;
	var body_width = $(window).width(),
		body_height = $(window).height(),
		$sn_wraper = $('#sn-wraper'),
		$header_search = $('#header-search'),
		$header_search_input = $('#mq'),
		$header_wraper = $('.header-wraper'),
		$header_search_placeholder = $('.combobox-placeholder'),
		$sidebar = $('#sidebar'),
		$bgcolor = $('#bgcolor'),
		$top_part = $('#top-part');

	var a = body_height * 0.18;    //右侧边栏 top-part 距顶部的距离
	//右侧边栏
	$sidebar.css('height',body_height);	
	$bgcolor.css('height',body_height);	

	//重置样式响应宽度
	if (body_width < 1260) {
		$sn_wraper.css({'width':'982px','left':'0'});
		$header_search.css('width','410px');
		$header_search_input.css('width','276px');
		$header_wraper.css({'width':'990px','left':'0'});
		
		$bgcolor.css('left','35px');
		$('.not-see').css('left','35px');
		$sidebar.unbind('mouseenter').unbind('mouseleave').bind('mouseenter',function() {
			$bgcolor.stop(true,true).animate({left:'0'},300);
			$('.not-see').stop(true,true).animate({left:'0'},300);
		}).bind('mouseleave',function() {
			$bgcolor.stop(true,true).animate({left:'35px'},300);
			$('.not-see').stop(true,true).animate({left:'35px'},300);
		});     // 根据页面宽度决定是否绑定 hover 事件

	} else {
		$sn_wraper.css({'width':'1230px','left':'-15px'});
		$header_search.css('width','625px');
		$header_search_input.css('width','491px');
		$header_wraper.css({'width':'1230px','left':'-15px'});
		
		$bgcolor.css('left',0);
		$sidebar.unbind('mouseenter').unbind('mouseleave');
		$('.not-see').css('left',0);
	}

	if(body_height < 506) {
		$top_part.css('top','35px'); 
	} else {
		$top_part.css('top',a); 
	}
};

