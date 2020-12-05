	//			获取body的宽度  给到下拉框
				var body_width =$("body").width();
				$(".soft_production").width(body_width);
				//获取当前index值
				var index;
	//			滚轮事件   当滚动条大于    的时候头部变化
				$(window).scroll(function(){
//					检测滚动条数值
//					console.log($("html,body").scrollTop());
					if($("html,body").scrollTop()>652){
						$("header").addClass("header_show");
						$(".img_left_show").attr("src","../img/cjc1_logo.png");
						$(".img_right_show").attr("src","../img/cjc1_ckys_04.png");
						$("header>.header_main>nav>.header_nav>li").addClass("li_show");
						$("header>.header_main>nav>.header_nav_right_logo>p").addClass("p_show");
					}else{
						$("header").removeClass("header_show");
						$(".img_left_show").attr("src","../img/cjc1_sldlogo.png");
						$("header>.header_main>nav>.header_nav>li").removeClass("li_show");
						$("header>.header_main>nav>.header_nav_right_logo>p").removeClass("p_show");
						$(".img_right_show").attr("src","../img/cjc2_ckys.png");
					}
				})