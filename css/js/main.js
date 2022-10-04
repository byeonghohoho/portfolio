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
	let win_height02 = win_height * 3;
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
	let sec_top03_off02 = sec_top04 - win_height02;
	let sec_top04_off = sec_top05 - win_height;
	let sec_top04_off02 = sec_top05 - win_height02;
	let sec_top05_off = sec_top06 - win_height;
	let sec_top05_off02 = sec_top06 - win_height02;
	let sec_top06_off = sec_top07 - win_height;
	let sec_top06_off02 = sec_top07 - win_height02;
	function main_scroll(){
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
		

		txt_slide01 = scroll_top - sec_top03;
		$('.section03 .txt_slide_wrap .txt_slide').eq(0).css({'transform':'translateX(-'+ (txt_slide01 * 0.03) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(1).css({'transform':'translateX('+ (txt_slide01 * 0.05) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(2).css({'transform':'translateX(-'+ (txt_slide01 * 0.02) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(3).css({'transform':'translateX('+ (txt_slide01 * 0.04) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(4).css({'transform':'translateX(-'+ (txt_slide01 * 0.03) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(5).css({'transform':'translateX('+ (txt_slide01 * 0.05) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(6).css({'transform':'translateX(-'+ (txt_slide01 * 0.06) + '%)'});
		$('.section03 .txt_slide_wrap .txt_slide').eq(7).css({'transform':'translateX('+ (txt_slide01 * 0.05) + '%)'});
		
		txt_slide02 = scroll_top - sec_top04;
		$('.section04 .txt_slide_wrap .txt_slide').eq(0).css({'transform':'translateX(-'+ (txt_slide02 * 0.03) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(1).css({'transform':'translateX('+ (txt_slide02 * 0.05) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(2).css({'transform':'translateX(-'+ (txt_slide02 * 0.02) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(3).css({'transform':'translateX('+ (txt_slide02 * 0.04) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(4).css({'transform':'translateX(-'+ (txt_slide02 * 0.03) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(5).css({'transform':'translateX('+ (txt_slide02 * 0.05) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(6).css({'transform':'translateX(-'+ (txt_slide02 * 0.03) + '%)'});
		$('.section04 .txt_slide_wrap .txt_slide').eq(7).css({'transform':'translateX('+ (txt_slide02 * 0.05) + '%)'});

		txt_slide03 = scroll_top - sec_top05;
		$('.section05 .txt_slide_wrap .txt_slide').eq(0).css({'transform':'translateX(-'+ (txt_slide03 * 0.06) + '%)'});
		$('.section05 .txt_slide_wrap .txt_slide').eq(1).css({'transform':'translateX('+ (txt_slide03 * 0.08) + '%)'});
		$('.section05 .txt_slide_wrap .txt_slide').eq(2).css({'transform':'translateX(-'+ (txt_slide03 * 0.05) + '%)'});
		$('.section05 .txt_slide_wrap .txt_slide').eq(3).css({'transform':'translateX('+ (txt_slide03 * 0.07) + '%)'});
		
		txt_slide04 = scroll_top - sec_top06;
		$('.section06 .txt_slide_wrap .txt_slide').eq(0).css({'transform':'translateX(-'+ (txt_slide04 * 0.03) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(1).css({'transform':'translateX('+ (txt_slide04 * 0.05) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(2).css({'transform':'translateX(-'+ (txt_slide04 * 0.02) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(3).css({'transform':'translateX('+ (txt_slide04 * 0.04) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(4).css({'transform':'translateX(-'+ (txt_slide04 * 0.03) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(5).css({'transform':'translateX('+ (txt_slide04 * 0.05) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(6).css({'transform':'translateX(-'+ (txt_slide04 * 0.06) + '%)'});
		$('.section06 .txt_slide_wrap .txt_slide').eq(7).css({'transform':'translateX('+ (txt_slide04 * 0.05) + '%)'});

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
			//$('.section03').addClass('on');
			$('.section03').addClass('on02');
			$('header nav ul li').removeClass('on').eq(1).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(1).addClass('on');
		}else{
			//$('.section03').removeClass('on');
			$('.section03').removeClass('on02');
			$('header nav ul li').eq(1).removeClass('on');
			$('.navigation nav ul li').eq(1).removeClass('on');
		}
		if(scroll_top > sec_top03_off){
			$('.section03').addClass('off');
		}else{
			$('.section03').removeClass('off');
		}

		if(scroll_top > sec_top03_off02){
			$('.section03').addClass('on');
			$('.section03').removeClass('on02');
		}else{
			$('.section03').removeClass('on');
		}

		if(scroll_top > sec_top04){
			//$('.section04').addClass('on');
			$('.section04').addClass('on02');
			$('header nav ul li').removeClass('on').eq(2).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(2).addClass('on');
		}else{
			//$('.section04').removeClass('on');
			$('.section04').removeClass('on02');
			$('header nav ul li').eq(2).removeClass('on');
			$('.navigation nav ul li').eq(2).removeClass('on');
		}
		if(scroll_top > sec_top04_off){
			$('.section04').addClass('off');
		}else{
			$('.section04').removeClass('off');
		}

		if(scroll_top > sec_top04_off02){
			$('.section04').addClass('on');
			$('.section04').removeClass('on02');
		}else{
			$('.section04').removeClass('on');
		}

		if(scroll_top > sec_top05){
			//$('.section05').addClass('on');
			$('.section05').addClass('on02');
			$('header nav ul li').removeClass('on').eq(3).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(3).addClass('on');
		}else{
			//$('.section05').removeClass('on');
			$('.section05').removeClass('on02');
			$('header nav ul li').eq(3).removeClass('on');
			$('.navigation nav ul li').eq(3).removeClass('on');
		}
		if(scroll_top > sec_top05_off){
			$('.section05').addClass('off');
		}else{
			$('.section05').removeClass('off');
		}

		if(scroll_top > sec_top05_off02){
			$('.section05').addClass('on');
			$('.section05').removeClass('on02');
		}else{
			$('.section05').removeClass('on');
		}

		if(scroll_top > sec_top06){
			$('.section06').addClass('on02');
			$('header nav ul li').removeClass('on').eq(4).addClass('on');
			$('.navigation nav ul li').removeClass('on').eq(4).addClass('on');
		}else{
			$('.section06').removeClass('on02');
			$('header nav ul li').eq(4).removeClass('on');
			$('.navigation nav ul li').eq(4).removeClass('on');
		}
		if(scroll_top > sec_top06_off){
			$('.section06').addClass('off');
		}else{
			$('.section06').removeClass('off');
		}

		if(scroll_top > sec_top06_off02){
			$('.section06').addClass('on');
			$('.section06').removeClass('on02');
		}else{
			$('.section06').removeClass('on');
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
	}
	main_scroll();
	$(window).scroll(function(){
		main_scroll();
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
		let winW = $(window).width();
		let nav_cnt = $(this).index();
		if(nav_cnt == 0 || nav_cnt == 5 || nav_cnt == 6){
			let top_index = $(this).index() + 2;
			let sec_num = $('.section0' + top_index).offset().top + 1;

			$('html,body').animate({
				scrollTop: sec_num
			}, 1000);
			return false;
		}else{
			if(winW > 1024){
				let top_index = $(this).index() + 2;
				let win_height02 = win_height * 3;
				let sec_num = $('.section0' + top_index).offset().top + win_height02 + 1;
				$('html,body').animate({
					scrollTop: sec_num
				}, 1000);
				return false;
			}else{
				let top_index = $(this).index() + 2;
				let sec_num = $('.section0' + top_index).offset().top + 1;

				$('html,body').animate({
					scrollTop: sec_num
				}, 1000);
				return false;
			}
		}
		
		
	});
	
	
});
