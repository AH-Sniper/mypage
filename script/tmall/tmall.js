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
	//顶部搜索框事件
	$('#top-search input').focus(function() {
		$('#top-search label').css('color','#ccc');
	})
	$('#top-search input').blur(function() {
		$('#top-search label').css('color','#666');
		if(!$('#top-search input').val()) {
			$('#top-search label').css('display','block');
		}
	})
	$('#top-search input').keydown(function() {
		$('#top-search label').css('display','none');
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
		if($('body')){
			$('body').animate({scrollTop:0}, 280);
		}
		if ($('html')) {
			$('html').animate({scrollTop:0}, 280);
		}
	});
	//主导航hover
	$('#main-nav-cont a').each(function(index){
		$(this).hover(function() {
			$('.main-nav-hover').eq(index).stop(true,true)
				.animate({opacity: '1', top: '-10px'}, 150);
		},function() {
			$('.main-nav-hover').eq(index).stop(true,true)
				.animate({opacity: '0', top: '0'}, 150);
		})
	});
	//banner 动画
	var i = 1;
	var btimer = null;
	//鼠标移到 slider-nav 切换到相应的banner图
	$('.slider-nav li').mouseover(function() {
		i = $('.slider-nav li').index(this);
		clearInterval(btimer);
		showBanner(i);
	});

	$('.slider-content').mouseover(function() {
		if(btimer) {
			clearInterval(btimer);
		}
	}).mouseout(function() {
		btimer = setInterval(function(){
			showBanner(i);
			i++;
			if (i > 5) { i = 0;};
		},3000);
	}).trigger('mouseout'); //鼠标移入banner区域，动画暂停,默认触发 mouseleave 即动画自动播放
	//分类列表
	$('.category-list li').hover(function(){
		var i = $('.category-list li').index(this);
		$('.category-detail-box').eq(i).show()
			.siblings().hide();
	},function(){
		var i = $('.category-list li').index(this);
		$('.category-detail-box').eq(i).hide();
	});
	$('.category-detail-box').hover(function(){
		$(this).show();
		var i = $('.category-detail-box').index(this);
		$('.category-list li').eq(i).addClass('hoverli');
	},function(){
		$(this).hide();
		var i = $('.category-detail-box').index(this);
		$('.category-list li').eq(i).removeClass('hoverli');
	});
	// floor 信息滚动
	var timer = setInterval(function(){
			for ( var i = 0; i< 3; i++) {
				var b = $('.slide-item')[i].offsetTop;
					b -= 30;
				if (b<-30) {
				 	b = 30;
				 	$('.slide-item').eq(i).css('top',''+b+''+'px');
				} else { 
					b = b;
					$('.slide-item').eq(i).animate({'top':''+b+''+'px'},300);
				}
			}
// $('.slide-item').eq(a).fadeIn()
// 	.siblings().fadeOut();
	},3000);

});
//浏览器窗口大小发生改变时触发事件
$(window).resize(function() {
	responsiveCheck();
});
//滚动条滚动事件
$(window).scroll(function() {
	var scroll_top = $(document).scrollTop();
	if (scroll_top > 300) {
		$('#bottom').fadeIn();
	} else {
		$('#bottom').fadeOut();
	}
	if (scroll_top > 780) {
		$('#top-searchbar').css('top','0');
	} else {
		$('#top-searchbar').css('top','-50px');
	}
});
//banner动画函数
function showBanner(index) {
	//显示图片
	$('.slider-pannel').eq(index).css({'display':'block','z-index':'1'})
		.stop(true,false).animate({'opacity':'1'},800)
		.siblings().stop(true,false).animate({'opacity':'0'},800,function() {$(this).css({'display':'none','z-index':'0'})});
	//slider-nav 改变样式
	$('.slider-nav li').eq(index).addClass('selected')
		.siblings().removeClass('selected');
}
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
		$header_wraper.css({'width':'982px','left':'0'});
		$('#sitemap').css('width','982px');
		//右侧边栏
		$bgcolor.css('left','35px');
		$('.not-see').css('left','35px');
		$sidebar.unbind('mouseenter').unbind('mouseleave').bind('mouseenter',function() {
			$bgcolor.stop(true,true).animate({left:'0'},300);
			$('.not-see').stop(true,true).animate({left:'0'},300);
		}).bind('mouseleave',function() {
			$bgcolor.stop(true,true).animate({left:'35px'},300);
			$('.not-see').stop(true,true).animate({left:'35px'},300);
		});     // 根据页面宽度决定是否绑定 hover 事件
		//主导航
		$('#main-nav-wraper').css({'width': '982px','padding-right': '0','height':'72px'});
		$('#main-nav-cont').css({'width':'760px','height':'72px'});
		//banner
		$('.vip-pannel').css({'display':'none'});
		$('#vip-pannel-wraper').css({'width': '982px','margin-right': '-495px'});
		$('.small-banner').css({'display':'none'});
		$('.slider-wraper-3').css({'width': '982px','padding-right': '0'});
		$('.slider-wraper-2').css({'width': '982px','padding-right': '0'});
		$('.simple-banner').css({'width': '982px','padding-right': '0'});
		$('.slider-wraper-1').css({'width': '982px','margin-left':'100px'});
		$('.category-wraper').css({'width': '982px','padding-right': '0'});
		$('.category-detail-box').css('width','782px');
		$('.detail-box-left').css('width','511px');
		//通用样式contentwraper
		$('.contentwraper').css({'width': '982px','padding-right': '0'});
		// hotbrand
		$('.brandlist').css({'width':'488px'});
		$('.hotchannel-banner img').css('margin-left','-313.5px');
		// 顶部搜索框
		$('#top-search').css('width','600px');
		$('#top-search input').css('width','503px');
	} else {
		$sn_wraper.css({'width':'1230px','left':'-15px'});
		$header_search.css('width','625px');
		$header_search_input.css('width','491px');
		$header_wraper.css({'width':'1230px','left':'-15px'});
		$('#sitemap').css('width','1198px');
		//右侧边栏
		$bgcolor.css('left',0);
		$sidebar.unbind('mouseenter').unbind('mouseleave');
		$('.not-see').css('left',0);
		//主导航
		$('#main-nav-wraper').css({'width': '1230px','padding-right': '30px','height':'36px'});
		$('#main-nav-cont').css({'width':'1045px','height':'36px'});
		//banner
		$('.vip-pannel').css({'display':'block'});
		$('#vip-pannel-wraper').css({'width': '1230px','margin-right': '-615px'});
		$('.small-banner').css({'display':'block'});
		$('.slider-wraper-3').css({'width': '1230px','padding-right': '30px'});
		$('.simple-banner').css({'width': '1230px','padding-right': '30px'});
		$('.slider-wraper-2').css({'width': '1230px','padding-right': '30px'});
		$('.slider-wraper-1').css({'width': '1120px','margin-left':'0'});
		$('.category-wraper').css({'width': '1230px','padding-right': '30px'});
		$('.category-detail-box').css('width','852px');
		$('.detail-box-left').css('width','583px');
		//通用样式contentwraper
		$('.contentwraper').css({'width': '1230px','padding-right': '30px'});
		// hotbrand
		$('.brandlist').css({'width':'732px'});
		$('.hotchannel-banner img').css('margin-left','-165px');
		// 顶部搜索框
		$('#top-search').css('width','740px');
		$('#top-search input').css('width','640px');
	}

	if(body_height < 506) {
		$top_part.css('top','35px'); 
	} else {
		$top_part.css('top',a); 
	}
};

