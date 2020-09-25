/*************** COMMON **************/
var $svgs = $(this).find('svg').eq(1);
var $path = $('svg').find("path");
var $line = $('svg').find("line");
var $slide = $(".slide-wrapper");
var $promo = $(".promo-wrap");
var idx = 2;
var lastIdx = $(".slide-wrapper").length - 1;
var init,interval,onSlideInterval,sct,winWid,widHei;

/*************** Function **************/
init();

function init(){
	onClickR();	
	onLeave();
}

function ani(){
	
	function btnSlide(){$slide.find(".btn-view").stop().removeClass("slide-ani-up");
	$slide.eq(idx).find(".btn-view").stop().addClass("slide-ani-up");}
		
	$slide.stop().animate({opacity:0} , 700 );
	$slide.eq(idx).stop().animate({opacity:1}, 700);

	$slide.find(".slide-img").stop().removeClass("slide-ani slide-ani-down");
	$slide.eq(idx).find(".slide-img").eq(0).stop().addClass("slide-ani");
	$slide.eq(idx).find(".slide-img").eq(1).stop().addClass("slide-ani-down");
	$slide.find(".slide-left").find("h2").stop().removeClass("slide-ani-up");
	$slide.eq(idx).find(".slide-left").find("h2").stop().addClass("slide-ani-up");
	$slide.find(".slide-desc").find("div").stop().removeClass("slide-ani-up");
	$slide.eq(idx).find(".slide-desc").find("div").stop().addClass("slide-ani-up");
	
	setTimeout(btnSlide,300);
	
}
/*************** Callback **************/
function onScroll(){
	scrollTop = $(this).scrollTop();
	
}
function onResize(){
	winWid = $(this).outerWidth();
	winHei = $(this).outerHeight();

}


function onClickL(){
	
	idx = idx == 0 ? lastIdx : idx-1;
	ani();
}

function onClickR(){	
	idx = idx == lastIdx ? 0 : idx+1;
	ani();
	
}



function onSlideInterval(){
	onClickR();
}

function onEnter() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onSlideInterval,3500);
}


function triggerTrans(){
	$(this).find("circle").css("transition", "all 1s");
}

/*************** Execute **************/
$(".arrow-wrap .slide-arrowL").click(onClickL)
$(".arrow-wrap .slide-arrowR").click(onClickR)
$(".slide-arrow").mouseenter(triggerTrans);
$(".home-wrapper").mouseleave(onLeave).mouseenter(onEnter);

window.onScroll(onScroll);
window.onResize(onResize);



/*************** Responsive **************/
if( winWid < 1025 && winWid > 767) {
	$promo.removeClass("x33").addClass("x50");
	}


if( winWid < 768 && winWid > 698 ) {
	
	}


if( winWid < 697 && winWid > 640 ) {

	}