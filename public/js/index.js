/*************** COMMON **************/
var $svgs = $(this).find('svg').eq(1);
var $path = $('svg').find("path");
var $line = $('svg').find("line");
var idx = 2;
var lastIdx = $(".slide-wrapper").length - 1;

$slide = $(".slide-wrapper");
/*************** Function **************/



/*************** Callback **************/
onClickR();
function onClickL(){
	idx = idx == 0 ? lastIdx : idx-1;
	ani();
}

function onClickR(){	
	idx = idx == lastIdx ? 0 : idx+1;
	ani();
}

function ani(){

		
	$slide.stop().animate({opacity:0, transform:"scale(0)"} , 600 );
	$slide.eq(idx).stop().animate({opacity:1, transform:"scale(1)" }, 600);

	$slide.find(".slide-img").eq(0).css("right","-100px");
	$slide.eq(idx).find(".slide-img").eq(0).stop().animate({"right":"0"},500,function(){
		$(this).eq(1).css("top","-200px");
	});
	$slide.eq(idx).find(".slide-img").eq(1).stop().animate({"top":"-100px"},500,function(){$(this).eq(0).css("right","-100px");
	
	});
}


function triggerTrans(){
	$(this).find("circle").css("transition", "all 1s");
}

/*************** Execute **************/
$(".arrow-wrap .slide-arrowL").click(onClickL)
$(".arrow-wrap .slide-arrowR").click(onClickR)
$(".slide-arrow").mouseenter(triggerTrans);