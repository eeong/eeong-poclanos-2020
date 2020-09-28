/*************** COMMON **************/
var $svgs = $(this).find('svg').eq(1);
var $path = $('svg').find("path");
var $line = $('svg').find("line");
var $slide = $(".slide-wrapper");
var $promo = $(".promo-wrapper").find(".promo-wrap");
var $bannerImg = $($promo.find("img"));
var $backToTop = $(".top-scroll");
var $svgs = $('.svgAni');
var $path = $('.svgAni').find("path");
var $line = $('.svgAni').find("line");
var idx = 2;
var lastIdx = $(".slide-wrapper").length - 1;
var init, interval, onSlideInterval, scrollTop, winWid, widHei, onClickTop, backToTop, topCont, html, naviTop, svgAni;

/*************** Function **************/


function init() {
	onClickR();
	onLeave();

}

function ani() {

	function btnSlide() {
		$slide.find(".btn-view").stop().removeClass("slide-ani-up");
		$slide.eq(idx).find(".btn-view").stop().addClass("slide-ani-up");
	}

	$slide.stop().animate({
		opacity: 0
	}, 700);
	$slide.eq(idx).stop().animate({
		opacity: 1
	}, 700);

	$slide.find(".slide-img").stop().removeClass("slide-ani slide-ani-down");
	$slide.eq(idx).find(".slide-img").eq(0).stop().addClass("slide-ani");
	$slide.eq(idx).find(".slide-img").eq(1).stop().addClass("slide-ani-down");
	$slide.find(".slide-left").find("h2").stop().removeClass("slide-ani-up");
	$slide.eq(idx).find(".slide-left").find("h2").stop().addClass("slide-ani-up");
	$slide.find(".slide-desc").find("div").stop().removeClass("slide-ani-up");
	$slide.eq(idx).find(".slide-desc").find("div").stop().addClass("slide-ani-up");

	setTimeout(btnSlide, 300);

}



function backToTop(scrollTop, topCont) {
	if (scrollTop > topCont) $backToTop.css("opacity", 1);
	else $backToTop.css("opacity", 0);
}

/*************** Callback **************/
function onScroll() {
	scrollTop = $(this).scrollTop();
	var promoHei = $(".promo-wrap").eq(0).outerHeight()
	if (winWid > 1024) topCont = $slide.outerHeight();
	else topCont = $slide.outerHeight() + $(".header-wrap").outerHeight();
	backToTop(scrollTop, topCont);
	var naviTop = topCont + promoHei;

	if (scrollTop > topCont && scrollTop < naviTop) $(".header-wrapper").addClass("on").stop().css({
		"top": "-70px",
		"opacity": 0
	});
	else if (scrollTop > naviTop) $(".header-wrapper").addClass("on").stop().css({
		"top": 0,
		"opacity": 1
	});
	else $(".header-wrapper").removeClass("on").stop().css({
		"top": 0,
		"opacity": 1
	});

	if (scrollTop > topCont + naviTop + promoHei) {
		$(".svg-wrap svg").css("opacity",1);
		svgAni()};
}

function onResize() {
	winWid = $(this).outerWidth();
	winHei = $(this).outerHeight();
	if (winWid > 1024) {
		$(".promo-wrap").removeClass("x50 x100").addClass("x33");
		$bannerImg.css({
			width: "599px",
			height: "341px"
		});
		$(".shop-item").removeClass("x33 x50 x100").addClass("x25");
		$(".svg-wrap").removeClass("x50 x100").addClass("x25");
	} else if (winWid < 1025 && winWid > 767) {
		$(".promo-wrap").removeClass("x33 x100").addClass("x50");
		$bannerImg.css({
			width: "300px",
			height: "171px"
		});
		$(".shop-item").removeClass("x25 x50 x100").addClass("x33");
		$(".svg-wrap").removeClass("x25 x100").addClass("x50");
	} else if (winWid < 768 && winWid > 696) {
		$(".promo-wrap").removeClass("x50 x33").addClass("x100");
		$(".shop-item").removeClass("x33 x25 x100").addClass("x50");
		$(".svg-wrap").removeClass("x25 x50").addClass("x100");
	} else if(winWid < 697){
		$(".shop-item").removeClass("x33 x25 x50").addClass("x100");
			}}

function svgAni() {
	
	$svgs.each(function () {
		$path.each(function (i, path) {
			var total_length = path.getTotalLength();
			path.style.strokeDasharray = total_length + " " + total_length;
			path.style.strokeDashoffset = total_length;
			$(path).animate({
				"strokeDashoffset": 0
			}, 1500);
		});
		$line.each(function (i, line) {
			var total_lengthL = line.getTotalLength();
			line.style.strokeDasharray = total_lengthL + " " + total_lengthL;
			line.style.strokeDashoffset = total_lengthL;
			$(line).animate({
				"strokeDashoffset": 0
			}, 1000);
		});
	});
}

function onClickL() {

	idx = idx == 0 ? lastIdx : idx - 1;
	ani();
}

function onClickR() {
	idx = idx == lastIdx ? 0 : idx + 1;
	ani();

}

function onSlideInterval() {
	onClickR();
}

function onEnter() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onSlideInterval, 3500);
}

function triggerTrans() {
	$(this).find("circle").css("transition", "all 1s");
}

function onClickTop() {
	$(window).scrollTop(0);
}


/*************** Execute **************/
init();
$(".arrow-wrap .slide-arrowL").click(onClickL);
$(".arrow-wrap .slide-arrowR").click(onClickR);
$(".slide-arrow").mouseenter(triggerTrans);
$(".home-wrapper").mouseleave(onLeave).mouseenter(onEnter);

$(window).scroll(onScroll).trigger("scroll");
$(window).resize(onResize).trigger("resize");
$backToTop.click(onClickTop);