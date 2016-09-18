$().ready(function(){  
		
		$('body').on('click','#mainHeader button', function(){
			if($(this).hasClass('active')){
				$(this).next().stop(true,true).fadeOut('normal');
				$(this).removeClass('active');
			}else{
				$(this).next().stop(true,true).fadeIn();
				$(this).addClass('active');
			}
		});

$( ".input" ).focusin(function() {
  $( this ).find( "span" ).animate({"opacity":"0"}, 200);
});

$( ".input" ).focusout(function() {
  $( this ).find( "span" ).animate({"opacity":"1"}, 300);
});

$(".login").submit(function(){
  $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({"color":"#fff"});
  $(".submit").css({"background":"#2ecc71", "border-color":"#2ecc71"});
  $(".feedback").show().animate({"opacity":"1", "bottom":"-80px"}, 400);
  $("input").css({"border-color":"#2ecc71"});
  return false;
});



		$("main > article").hover(function (e){ // событие клика по веб-документу
			$(this).find("article").stop(true,true).animate({
												      		top: "50px",
												       										       
												       
												        

					     								 }, 500 );
		//$(this).find("img").css("transform","scale3d(1.1,1.1,1)")
			}).mouseleave(function(){
			//	$(this).find("img").css("transform","")
     			$(this).find("article").stop(true,true).animate({
									        top: "80%",									       

									      }, 500 );
    });














});