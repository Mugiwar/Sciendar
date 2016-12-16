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




		
		$('body').on('click','.submit', function(){

			var data_form;

			data_form   = $('.login').serialize();
			$("#dw_create_razdelov").fadeOut("slow");
						
			$.ajax({
				url: document.location.href,
				type: 'POST',
				dataType: 'json',  
				data: data_form,
				success: function(datas){		
					//console.log( datas);

						location.href =document.location.href;

						//console.log( datas['name']);
						/*
					switch (datas['id']){
						case 1:
								drop_this.append("<div    class='cssmenu cart l_menu portlet stretchLeft object'><li class='block_menu has-sub block_sub '  style='background: url(/public/img/front/menu_img/block1.gif) no-repeat'><a class='portlet-header' href='#'><span >"+datas['name']+"</span></a><ul class='portlet-content' ></ul></li></div>");
							break;
						case 2:
								//drop_this.append('<div class="punct_menu_lvl_0 slideUp punct_sub "><a href="">'+datas['name']+'</a></div>');
							break;
						case 3:
								//drop_this.append('<div class="punct_menu_lvl_1 slideUp "><a href="/mychem/adminka-site-udhtu/edit/46">'+datas['name']+'<img class="pulse" src="/public/img/global/icon/info_err.png"></a></div>');
							break;
						case 4:
								
							break;		
						default:
							//alert("4 switch 372  stroka layouta");
							break;
					}*/
				}
			});
		});











});