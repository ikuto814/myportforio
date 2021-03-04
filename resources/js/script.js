$(function(){
	// nav
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

        /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '10px'
    });


    // footer fadeOut
    if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    window.onscroll = function () {
    var check = window.pageYOffset ;       //現在のスクロール地点 
    var docHeight = $(document).height();   //ドキュメントの高さ
    var dispHeight = $(window).height();    //表示領域の高さ

    if(check > docHeight-dispHeight-50){   //判別式　500はフッターからの距離です（ここはサイトのフッターに合わせて変更しましょう）
        $('.introduce-image').fadeOut(100);	//1000 はフェードアウトの速度です。調整可

    }else{
        $('.introduce-image').fadeIn(1000);	//1000 はフェードインの速度です。調整可
    }
    };
    }

	/* Animations */
		$('.js--wp-1').waypoint(function(direction) {
			$('.js--wp-1').addClass('animated fadeIn');
		}, {
			offset: '50%'
		});
		
		$('.js--wp-2').waypoint(function(direction) {
			$('.js--wp-2').addClass('animated fadeInUp');
		}, {
			offset: '50%'
        });
        
$('.open-popup-link').magnificPopup({
    type:'inline'
});


	var body=$(".works_inner");

	var flag=true;
	
	$(body).on("mousemove",function(e){
		if(flag){
			var x=e.clientX;
			var y=e.clientY;

			var shine=$("<p>").attr("class","shine");
			shine.css({
				"top":y+"px",
				"left":x+"px"
			});
			body.prepend(shine);
			setTimeout(function(){
				shine.remove();
			},2000);
			
			flag=false;
			setTimeout(function(){
				flag=true;
			},100);
		}
	});
});


