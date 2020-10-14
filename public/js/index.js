/*************** COMMON **************/
var $svgWrap = $(".svgWrap")
var $svg = $(".svg-wrap svg")
var $svgs = $(this).find('svg').eq(1);
var $path = $('svg').find("path");
var $line = $('svg').find("line");
var $svgs = $('.svgAni');
var $path = $('.svgAni').find("path");
var $line = $('.svgAni').find("line");
var $backToTop = $(".top-scroll");
var $nav = $(".nav > li");
var $slideArrow = $(".slide-arrow");
var $headerWrapper = $(".header-wrapper")
var $headerWrap = $(".header-wrap")
var $subNav = $(".sub-nav")
var $homeWrapper = $(".home-wrapper");
var $arrowL = $(".arrow-wrap .slide-arrowL");
var $arrowR = $(".arrow-wrap .slide-arrowR");
var $slide = $(".slide-wrapper");
var $promoWrap = $(".promo-wrap")
var $promo = $(".promo-wrapper").find(".promo-wrap");
var $bannerImg = $($promo.find("img"));
var $footerImg = $(".footer-slide-wrapper .slide-img img");
var $footerSlide = $(".footer-slide");
var $footerSlideWrap = $(".footer-slide-wrap");
var $webBtnSide = $("#webBtnSide");
var $mobileBtnSide = $("#mobileBtnSide");
var $narrowNavWrapper = $(".narrow-nav-wrapper");
var $narrowNavLi = $(".narrow-nav-wrapper .nav li > a");
var footerSlideArr = [];
var footerSlideHArr = [];
var footerSlideImg=[];
var idx = 2;
var lastIdx = $(".slide-wrapper").length - 1;
var mouseDown = false;
var init, interval, onSlideInterval, scrollTop, winWid, widHei, onClickTop, backToTop, topCont, html, naviTop, svgAni, startX, scrollLeft;

/*************** Function **************/



function init() {
	onClickR();
	onLeave();
	upNarrowNav();
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

	var $slideImg = $slide.find(".slide-img");
	var $slideIdxImg = $slide.eq(idx).find(".slide-img");
	var $slideLeft = $slide.find(".slide-left");
	var $slideIdxLeft = $slide.eq(idx).find(".slide-left");
	var $slideDesc = $slide.find(".slide-desc");
	var $slideIdxDesc = $slide.eq(idx).find(".slide-desc");

	$slideImg.stop().removeClass("slide-ani slide-ani-down");
	$slideIdxImg.eq(0).stop().addClass("slide-ani");
	$slideIdxImg.eq(1).stop().addClass("slide-ani-down");
	$slideLeft.find("h2").stop().removeClass("slide-ani-up");
	$slideIdxLeft.find("h2").stop().addClass("slide-ani-up");
	$slideDesc.find("div").stop().removeClass("slide-ani-up");
	$slideIdxDesc.find("div").stop().addClass("slide-ani-up");

	setTimeout(btnSlide, 300);
}



function backToTop(scrollTop, topCont) {
	if (scrollTop > topCont) $backToTop.css("opacity", 1);
	else $backToTop.css("opacity", 0);
}

/*************** Callback **************/
function onScroll() {
	scrollTop = $(this).scrollTop();
	var promoHei = $promoWrap.eq(0).outerHeight();
	var newsTop = $(".shop-wrapper2").offset().top;
	var newsHei = $(".newsletter").outerHeight();
	var footerTop = $(".subscribe-wrapper").offset().top;
	onAsideNav();
	

	if (winWid > 1024) topCont = $slide.outerHeight();
	else topCont = $slide.outerHeight() + $headerWrap.outerHeight();
	backToTop(scrollTop, topCont);
	var naviTop = topCont + promoHei;

	if (scrollTop > topCont && scrollTop < naviTop) {
		$headerWrapper.addClass("on").stop().css({
			"top": "-70px",
			"opacity": 0
		});
		$subNav.css("top", "109px");
		$nav.eq(2).removeClass("scroll-bg");
	} else if (scrollTop > naviTop) {
		$headerWrapper.addClass("on").stop().css({
			"top": 0,
			"opacity": 1
		});
		$subNav.css("top", "70px");
		$nav.eq(2).addClass("scroll-bg");
	} else {
		$headerWrapper.removeClass("on").stop().css({
			"top": 0,
			"opacity": 1
		});
		$subNav.css("top", "109px");
		$nav.eq(2).removeClass("scroll-bg");
	}

	if (scrollTop > topCont + naviTop + promoHei) {
		$svg.css("opacity", 1);
		svgAni()
	};

	if (scrollTop > newsHei + newsTop) newsAni();

	if (scrollTop > footerTop - 200) $backToTop.css("color", "#fff");
	else $backToTop.css("color", "#000");
}

var $shopItem1 = $(".shop-wrapper1 .shop-item");
var $shopItem2 = $(".shop-wrapper2 .shop-item");

function onResize() {
	winWid = $(this).outerWidth();
	winHei = $(this).outerHeight();
	if (winWid > 1024) {
		$promoWrap.removeClass("x50 x100").addClass("x33");
		$bannerImg.css({
			width: "599px",
			height: "341px"
		});
		$shopItem1.removeClass("x33 x50 x100").addClass("x25");
		$shopItem2.removeClass("x25 x50 x100").addClass("x33-2");
		$svgWrap.removeClass("x50 x100").addClass("x25");
		$webBtnSide.click(onSideNav);
		upNarrowNav();
	} else if (winWid < 1025 && winWid > 767) {
		$promoWrap.removeClass("x33 x100").addClass("x50");
		$bannerImg.css({
			width: "300px",
			height: "171px"
		});
		$shopItem1.removeClass("x25 x50 x100").addClass("x33");
		$svgWrap.removeClass("x25 x100").addClass("x50");
		$mobileBtnSide.click(onNarrowNav);
		onAsideNav();
	} else if (winWid < 768 && winWid > 696) {
		$promoWrap.removeClass("x50 x33").addClass("x100");
		$shopItem1.removeClass("x33 x25 x100").addClass("x50");
		$shopItem2.removeClass("x33-2 x100").addClass("x50");
		$svgWrap.removeClass("x25 x50").addClass("x100");
	} else if (winWid < 697) {
		$shopItem1.removeClass("x33 x25 x50").addClass("x100");
		$shopItem2.removeClass("x33-2 x50").addClass("x100");
	}
}


function onNavEnter() {
	$(this).find("span").removeClass("off");
	$(this).closest("li").siblings().find("span").addClass("off");
}

function onNavLeave() {
	$nav.eq(0).find("span").addClass("off");
	$nav.eq(0).siblings().find("span").removeClass("off");
}

function onSideNav(){
	$(".aside-wrapper").addClass("on");
	$(".aside-nav").click(onAsideNav);
	$(".aside-wrapper .aside-outground").click(function(e){
		e.stopPropagation();
		onAsideNav();
	})
}

function onAsideNav(){
	$(".aside-wrapper").removeClass("on");
}

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

function newsAni() {
	var $news = $(".newsletter").find("p");

	function cbAni(i) {
		$news.eq(i).css({
			transform: "translateY(0)",
			"transition-delay": i * 0.1 + "s"
		});
	}
	$news.each(function (i) {
		cbAni(i);
	});

}
 

function onSlideImg(){
	$(this).toggleClass("on")
	$(this).siblings("img").toggleClass("on");
}

var startX;
var scrollX;

function footerSlideInit(){
	var imgFile ='';
	var imgFileH ='';
	var imgFiles='';
	var $imgSlide=[];
	var currentX =($footerSlideWrap.position().left);
	var currentWid = $footerSlideWrap.width()-90;
	var xInit = (currentX >= 0) ? Math.floor((currentX / currentWid))*currentWid :  Math.ceil((currentX / currentWid))*currentWid 

	for(var i = 1; i < 9; i++){
		 imgFile = "'../img/Client-light-img-"+i+".png'";
		 imgFileH = "'../img/Client-light-img-"+i+"-H.png'";
		 imgFiles += '<div class="slide-img"><img src='+imgFile+' class="on"><img src='+imgFileH+'></div>'
		}
		$imgSlide.push($(imgFiles).clone());
		$(imgFiles).clone().appendTo($footerSlide);
		$(imgFiles).clone().prependTo($footerSlide);

		if(currentX == 0){
			$footerSlideWrap.css({"left":  "0" });
		} else {
			scrollX = currentX - xInit;
			$footerSlideWrap.css({"left": scrollX + "px" });
		}
		console.log(currentX,currentWid,scrollX)
parseInt		
}

function onFooterDown(e){
	mouseDown = true;
	
	$(this).mousemove(onFooterMove);
}

function onFooterUp(e){
	mouseDown = false;
}
	
function onFooterMove(e){
	startX = e.pageX;
	var currentX = $footerSlideWrap.position().left;
	var RestAni=''
	if(mouseDown == true){
	scrollX = currentX - (startX - e.pageX)/70;
	if(scrollX >= 0) RestAni= 45;
	else RestAni = -45; 
	$footerSlideWrap.css({"left":  scrollX + "px" }).stop().animate({"left":scrollX+RestAni+"px"},footerSlideInit)}
	
}

function onFooterLeave(){
	mouseDown = false;
}

function onNarrowNav(){
	$narrowNavWrapper.stop().slideToggle(300);
}

function offNarrowNav(){
	$narrowNavWrapper.find(".sub-nav").stop().slideUp(300);
	$narrowNavWrapper.find(".fa").removeClass("active");
}

function upNarrowNav(){
	$narrowNavWrapper.stop().slideUp(0);
	$narrowNavWrapper.find(".sub-nav").stop().slideUp(300);
	$narrowNavWrapper.find(".fa").removeClass("active");
}

function onNarrowClick(){
	$(this).find(".fa").stop().toggleClass("active");
	$(this).siblings(".sub-nav").stop().slideToggle(300,'linear');
	$(this).parent().siblings().find(".fa").stop().removeClass("active");
	$(this).parent().siblings().find(".sub-nav").stop().slideUp(300);
	
}

/*************** Execute **************/
footerSlideInit();
init();

$arrowL.click(onClickL);
$arrowR.click(onClickR);
$slideArrow.mouseenter(triggerTrans);
$homeWrapper.mouseleave(onLeave).mouseenter(onEnter);
$nav.mouseenter(onNavEnter).mouseleave(onNavLeave);
$footerSlideWrap.mousedown(onFooterDown);
$footerSlideWrap.mouseup(onFooterUp);
$footerSlideWrap.mouseleave(onFooterLeave);
$(".slide-img img").hover(onSlideImg);
$narrowNavLi.click(onNarrowClick);
$(window).scroll(onScroll).trigger("scroll");
$(window).resize(onResize).trigger("resize");
$backToTop.click(onClickTop);
