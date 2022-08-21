$(document).ready(function(){
	$("body").smoothWheel()
	setTimeout(function(){
		$('.section01 em').addClass('on');
	},100);
	setTimeout(function(){
		$('header').addClass('on');
	},2500);
	setTimeout(function(){
		$('html').addClass('on');
	},3000);
	$('.navi_btn').click(function(){
		$('.navigation_wrap').fadeIn();
		$('.navigation_wrap').addClass('on');
	});
	$('.navi_close').click(function(){
		$('.navigation_wrap').fadeOut();
		$('.navigation_wrap').removeClass('on');
	});
	$('.navigation_bg').click(function(){
		$('.navigation_wrap').fadeOut();
		$('.navigation_wrap').removeClass('on');
	});
	let scroll_top = $(window).scrollTop();
	let win_height = $(window).height();
	let	sec_top01 = $('.section01').offset().top;
	let	sec_top02 = $('.section02').offset().top;
	let	sec_top03 = $('.section03').offset().top;
	let	sec_top04 = $('.section04').offset().top;
	let	sec_top05 = $('.section05').offset().top;
	let	sec_top06 = $('.section06').offset().top;
	let	sec_top07 = $('.section07').offset().top;
	let	sec_top08 = $('.section08').offset().top;
	let sec_top02_off = sec_top03 - win_height;
	let sec_top03_off = sec_top04 - win_height;
	let sec_top04_off = sec_top05 - win_height;
	let sec_top05_off = sec_top06 - win_height;
	let sec_top06_off = sec_top07 - win_height;
	$(window).scroll(function(){
		scroll_top = $(window).scrollTop();
		sec_top02 = $('.section02').offset().top;
		sec_top03 = $('.section03').offset().top;
		sec_top04 = $('.section04').offset().top;
		sec_top05 = $('.section05').offset().top;
		sec_top06 = $('.section06').offset().top;
		sec_top07 = $('.section07').offset().top;
		sec_top08 = $('.section08').offset().top;
		sec_top02_off = sec_top03 - win_height;
		sec_top03_off = sec_top04 - win_height;
		sec_top04_off = sec_top05 - win_height;
		sec_top05_off = sec_top06 - win_height;
		sec_top06_off = sec_top07 - win_height;
		$('.section01 em span').eq(0).css({'transform':'translateY('+ (scroll_top * 1.4) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(1).css({'transform':'translateY(-'+ (scroll_top * 1.6) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(2).css({'transform':'translateY('+ (scroll_top * 2) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(3).css({'transform':'translateY(-'+ (scroll_top * 2.2) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(4).css({'transform':'translateY('+ (scroll_top * 1.8) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(5).css({'transform':'translateY(-'+ (scroll_top * 2.4) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(6).css({'transform':'translateY('+ (scroll_top * 2.4) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(7).css({'transform':'translateY(-'+ (scroll_top * 1.2) + 'px)','opacity':1 - (scroll_top * 0.005)});
		$('.section01 em span').eq(8).css({'transform':'translateY('+ (scroll_top * 1.7) + 'px)','opacity':1 - (scroll_top * 0.005)});

		if(scroll_top > sec_top02){
			$('.section01').addClass('off');
			$('.section02').addClass('on');
			$('header nav ul li').removeClass('on').eq(0).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(0).addClass('on');
		}else{
			$('.section01').removeClass('off');
			$('.section02').removeClass('on');
			$('header nav ul li').eq(0).removeClass('on');
			$('.navigation nav ul li').eq(0).removeClass('on');
		}
		if(scroll_top > sec_top02_off){
			$('.section02').addClass('off');
		}else{
			$('.section02').removeClass('off');
		}

		if(scroll_top > sec_top03){
			$('.section03').addClass('on');
			$('header nav ul li').removeClass('on').eq(1).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(1).addClass('on');
		}else{
			$('.section03').removeClass('on');
			$('header nav ul li').eq(1).removeClass('on');
			$('.navigation nav ul li').eq(1).removeClass('on');
		}
		if(scroll_top > sec_top03_off){
			$('.section03').addClass('off');
		}else{
			$('.section03').removeClass('off');
		}

		if(scroll_top > sec_top04){
			$('.section04').addClass('on');
			$('header nav ul li').removeClass('on').eq(2).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(2).addClass('on');
		}else{
			$('.section04').removeClass('on');
			$('header nav ul li').eq(2).removeClass('on');
			$('.navigation nav ul li').eq(2).removeClass('on');
		}
		if(scroll_top > sec_top04_off){
			$('.section04').addClass('off');
		}else{
			$('.section04').removeClass('off');
		}

		if(scroll_top > sec_top05){
			$('.section05').addClass('on');
			$('header nav ul li').removeClass('on').eq(3).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(3).addClass('on');
		}else{
			$('.section05').removeClass('on');
			$('header nav ul li').eq(3).removeClass('on');
			$('.navigation nav ul li').eq(3).removeClass('on');
		}
		if(scroll_top > sec_top05_off){
			$('.section05').addClass('off');
		}else{
			$('.section05').removeClass('off');
		}
		if(scroll_top > sec_top06){
			$('.section06').addClass('on');
			$('header nav ul li').removeClass('on').eq(4).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(4).addClass('on');
		}else{
			$('.section06').removeClass('on');
			$('header nav ul li').eq(4).removeClass('on');
			$('.navigation nav ul li').eq(4).removeClass('on');
		}
		if(scroll_top > sec_top06_off){
			$('.section06').addClass('off');
		}else{
			$('.section06').removeClass('off');
		}
		if(scroll_top > sec_top07 - 300){
			$('.section07').addClass('on');
			$('.section07 ul li').each(function(){
				let idx = $(this).index();
				$('.section07.on ul li').eq(idx).css('transition-delay',0.2 * idx + 's');
			});
			$('header nav ul li').removeClass('on').eq(5).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(5).addClass('on');
		}else{
			$('.section07').removeClass('on');
			$('.section07 ul li').css('transition-delay',0 + 's');
			$('header nav ul li').eq(5).removeClass('on');
			$('.navigation nav ul li').eq(5).removeClass('on');
		}
		if(scroll_top > sec_top08 - 600){
			$('.section08').addClass('on');
			$('header nav ul li').removeClass('on').eq(6).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(6).addClass('on');
		}else{
			$('.section08').removeClass('on');
			$('header nav ul li').eq(6).removeClass('on');
			$('.navigation nav ul li').eq(6).removeClass('on');
		}


	});

	$('.section06 ul li').mouseenter(function(){
		let yaer_btn = $(this).attr('class');
		$('.section06 .horizental_txt p').find('.' + yaer_btn).addClass('over');
	});
	$('.section06 ul li').mouseleave(function(){
		$('.section06 .horizental_txt p span').removeClass('over');
	});
	$('.section06 ul li').click(function(){
		let cnt = $(this).index();
		let yaer_bth_on = $(this).attr('class');
		if(!$(this).hasClass('on')){
			$('.section06 ul li').removeClass('on').eq(cnt).addClass('on');
		}else{
			$('.section06 ul li').removeClass('on');
		}
		
		$('.section06 .horizental_txt p span').removeClass('on');
		$('.section06 .horizental_txt p').find('.' + yaer_bth_on).addClass('on');
	});
	$('header nav ul li,.navigation nav ul li').click(function(){
		let top_index = $(this).index() + 2;
		let sec_num = $('.section0' + top_index).offset().top + 1;
		$('html,body').animate({
			scrollTop: sec_num
		}, 1000);
		return false;
	});
	
	
});
