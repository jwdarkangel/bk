$(document).ready(function($) {	

	//call
	$(".y_call").on("click",function(){
		alert('update...');
	});
	

	//主页标题图片切换
	var a=null;

	$(".y_first_ul>li:gt(0)").hover(function (){

		a=$(this).find('img').attr("src");
		var b=/\d?\./;
		var c=a.replace(b,"2.");
		$(this).find('img').attr("src",c);
		
	},function (){

		$(this).find('img').attr("src",a);

	});

	//主页标题链接
	for(var i=0;i<$(".y_first_ul>li:gt(0)").length;i++){
		
		switch(i){

			case 0:
			$(".y_first_ul>li:gt(0):eq("+i+")").find("a").attr("href","index.html");
			break;

			case 1:
			$(".y_first_ul>li:gt(0):eq("+i+")").find("a").attr("href","gaj.html");
			break;

			case 2:
			$(".y_first_ul>li:gt(0):eq("+i+")").find("a").attr("href","HTML5TeacherList.html");
			break;

			case 3:
			$(".y_first_ul>li:gt(0):eq("+i+")").find("a").attr("href","real-project.html");
			break;

			case 4:
			$(".y_first_ul>li:gt(0):eq("+i+")").find("a").attr("href","learning-world.html");
			break;

			case 5:
			$(".y_first_ul>li:gt(0):eq("+i+")").find("a").attr("href","about-us.html");
			break;

		}
		
	}

	
	//大图切换
	$(".y_point>li").hover(function (){

		$(".y_point>li>img").attr("src","images/bl/point2.png");
		$(this).find("img").attr("src","images/bl/point.png");
		$(".y_big_imgs").stop().animate({left:-$(this).index()*$(".y_big_imgs>li>img").width()-184.5},300);
		
	});

	//返回顶部
	$(".y_btn_up").on("click",function(){

		$("html,body").animate({scrollTop:0},1000);

	});
	$(".y_blue_up").on("click",function(){
		
		$("html,body").animate({scrollTop:0},1000);

	});

	//就业明星鼠标悬停介绍
	$(".y_pa").hover(function (){

		$(this).stop().animate({opacity:1},300);
		$(".y_pa").find(".y_pi_btn").css("display","none");
		$(this).find(".y_pi_btn").css("display","block");
		$(this).find(".y_pi_btn").stop().animate({opacity:1},300);
		
	},function (){

		$(".y_pa").stop().animate({opacity:0},300);
		$(".y_pa").find(".y_pi_btn").stop().animate({opacity:0},300);

	});

	$(".y_pi_btn").on("click",function(){
		
		alert('update...');

	});

	//就业明星左右按钮
	$(".y_start .y_float_l").on("click",function(){	

		$(".y_start .y_contents>ul>li:first-child").css("left","0");
		
		for(var i=0;i<6;i++){
			$(".y_start .y_contents>ul>li:first-child:eq("+i+")").stop().delay(i*100).animate({left:-297},300);
		}			

	});


	$(".y_start .y_float_r").on("click",function(){	

		$(".y_start .y_contents>ul>li:first-child").css("left","-297px");
		
		for(var i=0;i<6;i++){
			$(".y_start .y_contents>ul>li:first-child:eq("+i+")").stop().delay(500-i*100).animate({left:0},300);
		}	
		

	});



	//就业现状左右按键
	var yellow_num=0;
	var btBol=false;

	$(".y_bt_left").on("click",function(){
		if(btBol){
			return;
		}
		btBol=true;
		setTimeout(function(){
			btBol=false;
			$(".y_now>ul>li").css("left","-204px");
		},600);
		$(".y_now>ul>li").animate({left:0},500);

		yellow_num--;
		if(yellow_num<0){
			yellow_num=2;
		}
		if(yellow_num==0){
			$("#y_yellow").animate({bottom:136},500);
			$(".y_yellow_two").animate({height:1},500);
		}else if(yellow_num==1){
			$("#y_yellow").animate({bottom:169},500);
			$(".y_yellow_two").animate({height:34},500);
		}else{
			$("#y_yellow").animate({bottom:212},500);
			$(".y_yellow_two").animate({height:77},500);
		}

	});

	$(".y_bt_right").on("click",function(){
		if(btBol){
			return;
		}
		btBol=true;

		setTimeout(function(){
			btBol=false;
			$(".y_now>ul>li").css("left","-204px");
		},600);
		$(".y_now>ul>li").animate({left:-409},500);

		yellow_num++;
		if(yellow_num>2){
			yellow_num=0;
		}
		if(yellow_num==0){
			$("#y_yellow").animate({bottom:136},500);
			$(".y_yellow_two").animate({height:1},500);
		}else if(yellow_num==1){
			$("#y_yellow").animate({bottom:169},500);
			$(".y_yellow_two").animate({height:34},500);			
		}else{
			$("#y_yellow").animate({bottom:212},500);
			$(".y_yellow_two").animate({height:77},500);
		}

	});

	//就业学员信息滚动
	var messageTimer=setInterval(function(){
		$(".y_move").append($(".y_move ul:first-child"));
		$(".y_move").css("top","0");
		$(".y_move").stop().animate({top:-25},500);
	},1500);

	$(".y_bor").hover(function (){

		clearInterval(messageTimer);
		
	},function (){

		messageTimer=setInterval(function(){
			$(".y_move").append($(".y_move ul:first-child"));
			$(".y_move").css("top","0");
			$(".y_move").stop().animate({top:-25},500);
		},1500);

	});


	//就业课程图片切换
	$(".y_door").hover(function (){

		$(".y_img_left").stop().animate({left:-400},500);
		$(".y_img_right").stop().animate({right:-400},500);
		$(".y_door>img").stop().animate({top:0,left:0,width:800},500);
		
	},function (){

		$(".y_img_left").stop().animate({left:0},500);
		$(".y_img_right").stop().animate({right:0},500);
		$(".y_door>img").stop().animate({top:240,left:400,width:0},500);

	});



	//项目展示 图片蒙版	
	var two=-1;

	$(".y_pasi").hover(function (){

		$(this).stop().animate({opacity:1},500);
		
		
	},function (){

		$(".y_pasi").stop().animate({opacity:0},500);

	});

	//项目左右按钮切换1

	for(var i=0;i<4;i++){
		$(".y_ppa:eq("+i+")").css("top",i%2*290+"px");
	}
	var needBol=false;
	$(".y_detail .y_need .y_float_r").on("click",function(){
		if(needBol){
			return
		}
		needBol=true;
		setTimeout(function(){
			needBol=false;
		},700);
		
		for(var i=0;i<4;i++){
			$(".y_ppa:eq("+i+")").css("top",i%2*290+"px");
		}
		for(var i=0;i<4;i++){
			$(".y_ppa:eq("+i+")").stop().delay(300-i*100).animate({top:i%2*290-290},300);
		}

	});

	$(".y_detail .y_need .y_float_l").on("click",function(){
		if(needBol){
			return
		}
		needBol=true;
		setTimeout(function(){
			needBol=false;
		},700);

		for(var i=0;i<4;i++){
			$(".y_ppa:eq("+i+")").css("top",i%2*290-290+"px");
		}
		for(var i=0;i<4;i++){
			$(".y_ppa:eq("+i+")").stop().delay(i*100).animate({top:i%2*290},300);
		}

	});

	//项目左右按钮切换2
	var zero=null;
	$(".y_detail .y_zero .y_ofh img").on("click",function(){
		zero++;
		if(zero>4){
			return;
		}
		if(zero==1){
			setTimeout(function(){
				zero=0;
			},1000);
		}
		if($(this).index()){

			two++;
			if(two>3){
				two=0;
			}
		
			switch(two){
				case 0:
				$(".y_zero .y_one").css("top","0");
				$(".y_zero .y_one").stop().animate({top:-257},1000);
				break;
				case 1:
				$(".y_zero .y_two").css("top","0");
				$(".y_zero .y_two").stop().animate({top:-257},1000);
				break;
				case 2:
				$(".y_zero .y_three").css("top","0");
				$(".y_zero .y_three").stop().animate({top:-257},1000);
				break;
				case 3:
				$(".y_zero .y_four").css("top","0");
				$(".y_zero .y_four").stop().animate({top:-257},1000);
				break;
			}
		

		}else{
			two--;
			if(two<0){
				two=3;
			}

		
			switch(two){
				case 0:
				$(".y_zero .y_one").css("top","-257px");
				$(".y_zero .y_one").stop().animate({top:0},1000);
				break;
				case 1:
				$(".y_zero .y_two").css("top","-257px");
				$(".y_zero .y_two").stop().animate({top:0},1000);
				break;
				case 2:
				$(".y_zero .y_three").css("top","-257px");
				$(".y_zero .y_three").stop().animate({top:0},1000);
				break;
				case 3:
				$(".y_zero .y_four").css("top","-257px");
				$(".y_zero .y_four").stop().animate({top:0},1000);
				break;
			}
			
		}
	});

	//HTML5课程 讲师图片+文字切换

	var teachersIndex=1;
	var teacherMoveBol=false;
	$(".y_arrow_left").on("click",function(){

		if(teacherMoveBol){
			return
		}
		teacherMoveBol=true;
		setTimeout(function(){
			teacherMoveBol=false;
		},300);

		teachersIndex--;
		if(teachersIndex<0){
			teachersIndex=5;
			$(".y_moving").stop().animate({left:-750},500);
		}
		if(teachersIndex==4){
			$(".y_moving").stop().animate({left:0},500);
		}	

		$(".y_moving img").attr("src","images/pi/t1.png");
		$(".y_moving img:eq("+teachersIndex+")").attr("src","images/pi/t2.png");


		$(".y_teacher_img").attr("src","images/pi/p"+(teachersIndex+1)+".png");
		$(".y_teacher_moving").css("left","-510px");
		$(".y_teacher_moving").stop().animate({left:0},300);

	});

	$(".y_arrow_right").on("click",function(){

		if(teacherMoveBol){
			return
		}
		teacherMoveBol=true;
		setTimeout(function(){
			teacherMoveBol=false;
		},300);
		
		teachersIndex++;
		if(teachersIndex==5){
			$(".y_moving").stop().animate({left:-750},500);
		}
		if(teachersIndex>5){
			teachersIndex=0;		
			$(".y_moving").stop().animate({left:0},500);
		}	

		$(".y_moving img").attr("src","images/pi/t1.png");
		$(".y_moving img:eq("+teachersIndex+")").attr("src","images/pi/t2.png");


		$(".y_teacher_img").attr("src","images/pi/p"+(teachersIndex+1)+".png");
		$(".y_teacher_moving").css("left","0");
		$(".y_teacher_moving").stop().animate({left:-510},300);
		
	});



	//HTML5课程 讲师圆图片切换
	

	$(".y_bt_lefts").on("click",function(){
		teachersIndex--;
		if(teachersIndex<0){
			teachersIndex=5;
			$(".y_moving").stop().animate({left:-750},500);
		}
		if(teachersIndex==4){
			$(".y_moving").stop().animate({left:0},500);
		}	

		$(".y_moving img").attr("src","images/pi/t1.png");
		$(".y_moving img:eq("+teachersIndex+")").attr("src","images/pi/t2.png");
		$(".y_teacher_img").attr("src","images/pi/p"+(teachersIndex+1)+".png");
		$(".y_teacher_moving").css("left","-510px");
		$(".y_teacher_moving").stop().animate({left:0},300);

	});
	$(".y_bt_rights").on("click",function(){

		teachersIndex++;
		if(teachersIndex==5){
			$(".y_moving").stop().animate({left:-750},500);
		}
		if(teachersIndex>5){
			teachersIndex=0;		
			$(".y_moving").stop().animate({left:0},500);
		}	

		$(".y_moving img").attr("src","images/pi/t1.png");
		$(".y_moving img:eq("+teachersIndex+")").attr("src","images/pi/t2.png");
		$(".y_teacher_img").attr("src","images/pi/p"+(teachersIndex+1)+".png");
		$(".y_teacher_moving").css("left","0");
		$(".y_teacher_moving").stop().animate({left:-510},300);
	});

	$(".y_moving li").on("click",function(){
		var t=teachersIndex;
		teachersIndex=$(this).index();
		a=$(this).find("img").attr("src");
		var b=/\d?\./;
		var c=a.replace(b,"2.");
		var d=c.replace(b,"1.");
		$(".y_teachers img").attr("src",d);
		$(this).find("img").attr("src",c);
		$(".y_teacher_img").attr("src","images/pi/p"+(teachersIndex+1)+".png");
		if(Math.max(t,teachersIndex)==t){
			$(".y_teacher_moving").css("left","-510px");
			$(".y_teacher_moving").stop().animate({left:0},300);
		}
		if(Math.max(t,teachersIndex)==teachersIndex){
			$(".y_teacher_moving").css("left","0");
			$(".y_teacher_moving").stop().animate({left:-510},300);			
		}
		

	});

	//校园环境 图片切换

	$(".y_p").hover(function (){

		$(".y_p").css("opacity",0);
		$(this).css("opacity",.5);
		var e=-($(this).parent().index()-1)*960;
		$(".y_moves").stop().animate({left:e},300);
		
	},function (){

		$(".y_p").css("opacity",0);

	});

	//校园环境 新闻 动态

	for(var i=0;i<$(".y_number").length;i++){

		var s=-($(".y_number:eq("+i+")").parent().index())%5*24;
		$(".y_number:eq("+i+")").css("backgroundPosition","0 "+s+"px");
	}

	var newsTimer=setInterval(function(){
		
		for(var i=0;i<3;i++){
			$(".y_number_move:eq("+i+")").append($(".y_number_move:eq("+i+") li:first-child"));
			$(".y_number_move:eq("+i+")").css("top","0");
			$(".y_number_move:eq("+i+")").stop().animate({top:-35},500);
		}
		
	},1500);

	$(".y_number_si").hover(function (){

		clearInterval(newsTimer);
		
	},function (){

		newsTimer=setInterval(function(){
		
			for(var i=0;i<3;i++){
				$(".y_number_move:eq("+i+")").append($(".y_number_move:eq("+i+") li:first-child"));
				$(".y_number_move:eq("+i+")").css("top","0");
				$(".y_number_move:eq("+i+")").stop().animate({top:-35},500);
			}
			
		},1500);

	});

	//其他
	//btn

	clickLeft($(".p2_center_4 .btn_left"),$(".p2_center_4_tu_ul"),"0",-$(".p2_center_4_tu_ul>li").width());
	clickLeft($(".p2_center_4 .btn_right"),$(".p2_center_4_tu_ul"),-$(".p2_center_4_tu_ul>li").width(),"0");


	//加号滚动
	var runBol=true;
	var ballDeg=0;
	var ballTimer;
	$(".ball").on("click",function(){
		if(ballDeg==0||ballDeg==21){
			if(runBol){
				ballTimer=setInterval(function(){
					ballDeg++;
					$(".ball").css("backgroundPosition",-33*(ballDeg%6)+"px 0");
					if(ballDeg>20){
						clearInterval(ballTimer);
					}
				},30);
				$(".p12_center_right_2_ul").animate({height:350},600);
				runBol=false;
			}else{
				ballTimer=setInterval(function(){
					ballDeg--;
					$(".ball").css("backgroundPosition",-33*(ballDeg%6)+"px 0");
					if(ballDeg<1){
						clearInterval(ballTimer);
					}
				},30);
				$(".p12_center_right_2_ul").animate({height:175},600);
				runBol=true;
			}
		}
				


	});

	//左右切换
	var centIndex=1;
	var num=0;
	$(".p3_center_5>img").on("click",function(){

		if($(this).index()==2){
			centIndex++;
			num++;
			if(num>3){
				num=3;
				if(centIndex>3){
				$(".movet").stop().animate({left:-48*(centIndex-3)},300);
			}
			
			}
			if(centIndex==8){
				$(".movet").css("left","0");
				$(".movet").stop().animate({left:-48},300);
				centIndex=4;
			}
			/*p7_center_3_top*/
			$(".p7_center_3_top").css("left","0");
			$(".p7_center_3_top").stop().animate({left:-693},300);
			$(".move").css("left","0");
			$(".move").stop().animate({left:-678},300);
			$(".p11_center_3_middle").css("left","0");
			$(".p11_center_3_middle").stop().animate({left:-619},300);
			$(".movet>img").css("opacity","1");
			$(".movet>img:eq("+centIndex+")").css("opacity",".5");
			
		}else{
			centIndex--;
			num--;
			if(num<=0){
				num=0;
				if(centIndex<0){
					$(".movet").css("left","-192px");
					$(".movet").stop().animate({left:-144},300);
					centIndex=3;
				}
				if(centIndex<4){
					$(".movet").stop().animate({left:-48*centIndex},300);
				}
			}

			if(centIndex==0){
				$(".movet").stop().animate({left:0},300);				
			}
			
			$(".p7_center_3_top").css("left","-693px");
			$(".p7_center_3_top").stop().animate({left:0},300);
			$(".move").css("left","-678px");
			$(".move").stop().animate({left:0},300);
			$(".p11_center_3_middle").css("left","-619px");
			$(".p11_center_3_middle").stop().animate({left:0},300);
			$(".movet>img").css("opacity","1");
			$(".movet>img:eq("+centIndex+")").css("opacity",".5");
			
		}

	});

	//more
	$("img").on("click",function(){

	
		if(/ball_right\.jpg/g.test($(this).attr("src"))){

			if($(this).parent().find('span').html()==undefined){
				
			}else{
				window.open('ProjectList.html','_self');
			}		
			
		}


	});

	//iphone手机切换
	$(".p12_center_3_ball>img").on("click",function(){

		$(".p12_center_3_ball>img").attr("src","images/bl/ball_gray.png");
		$(this).attr("src","images/bl/ball_red.png");
		$(".p12_center_3_p12_center").animate({left:-$(this).index()*$(".p12_center_3_1").width()});
	});

	//其他项目
	$(".p12_center_7_img1").on("click",function(){
		$(".p12_center_7_middle>ul").css("left","0");

		for(var i=0;i<5;i++){
			$(".p12_center_7_middle>ul:eq("+i+")").stop().animate({left:-152},300);
		}
	});
	$(".p12_center_7_img2").on("click",function(){
		$(".p12_center_7_middle>ul").css("left","-152px");

		for(var i=0;i<6;i++){
			$(".p12_center_7_middle>ul:eq("+i+")").stop().animate({left:0},300);
		}
	});

	//就业左右按钮 1
	$(".p1_center_3_2>img").on("click",function(){


		if(!$(this).index()){

			$(".p1_center_3_1_ul_1_ul").css("left","0");			
			for(var i=0;i<6;i++){
				$(".p1_center_3_1_ul_1_ul:eq("+i+")").append($(".p1_center_3_1_ul_1_ul:eq("+i+")>li:first-child"));
				$(".p1_center_3_1_ul_1_ul:eq("+i+")").stop().delay(i*100).animate({left:-300},300);
			}

		}else{

			$(".p1_center_3_1_ul_1_ul").css("left","-600px");			
			for(var i=0;i<6;i++){
				$(".p1_center_3_1_ul_1_ul:eq("+i+")>li:last-child").insertBefore($(".p1_center_3_1_ul_1_ul:eq("+i+")>li:first-child"));
				$(".p1_center_3_1_ul_1_ul:eq("+i+")").stop().delay(i*100).animate({left:-300},300);
			}

		}

	});

	//就业左右按钮 2
	$(".p1_center_5_2>img").on("click",function(){


		if(!$(this).index()){

			$(".p1_center_5_1_ul_1_ul").css("left","0");			
			for(var i=0;i<6;i++){
				$(".p1_center_5_1_ul_1_ul:eq("+i+")").append($(".p1_center_5_1_ul_1_ul:eq("+i+")>li:first-child"));
				$(".p1_center_5_1_ul_1_ul:eq("+i+")").stop().delay(i*100).animate({left:-275},300);
			}

		}else{

			$(".p1_center_5_1_ul_1_ul").css("left","-550px");			
			for(var i=0;i<6;i++){
				$(".p1_center_5_1_ul_1_ul:eq("+i+")>li:last-child").insertBefore($(".p1_center_5_1_ul_1_ul:eq("+i+")>li:first-child"));
				$(".p1_center_5_1_ul_1_ul:eq("+i+")").stop().delay(i*100).animate({left:-275},300);
			}

		}

	});

	//合作企业
	$(".p1_center_11>img").on("click",function(){

		if(!$(this).index()){
			if($(".p1_center_11_logo_wrap").css("left")=="-1480px"){
				$(".p1_center_11_logo_wrap").css("left","-740px");
			}
			var n=$(".p1_center_11_logo_wrap").get(0).offsetLeft-185;

			$(".p1_center_11_logo_wrap").animate({left:n},300);

		}else{
			
			if($(".p1_center_11_logo_wrap").css("left")=="0px"){
				$(".p1_center_11_logo_wrap").css("left","-740px");
			}
			var n=$(".p1_center_11_logo_wrap").get(0).offsetLeft+185;

			$(".p1_center_11_logo_wrap").animate({left:n},300);

		}
	});

	//招聘信息
	var p1_center_12_wrapTimer=setInterval(function(){
		$(".p1_center_12_wrap").append($(".p1_center_12_wrap ul:first-child"));
		$(".p1_center_12_wrap").css("top","0");
		$(".p1_center_12_wrap").stop().animate({top:-39},500);
	},1500);

	$(".y_bor").hover(function (){

		clearInterval(p1_center_12_wrapTimer);
		
	},function (){

		p1_center_12_wrapTimer=setInterval(function(){
			$(".p1_center_12_wrap").append($(".p1_center_12_wrap ul:first-child"));
			$(".p1_center_12_wrap").css("top","0");
			$(".p1_center_12_wrap").stop().animate({top:-39},500);
		},1500);

	});

	//c62
	var imgDis=1;
	$("#btn1").on("click",function(){

		imgDis--;
		if(imgDis<2){
			imgDis=1;
			$("#c62_1").css("left","-177px");
			$("#c62_1").stop().animate({left:0},300);
		}
		$("#c62_1").find("img").attr("src","images/pi/t1.png");
		$("#c62_1").find("img:eq("+(imgDis-1)+")").attr("src","images/pi/t2.png");


	});

	$("#btn2").on("click",function(){

		imgDis++;
		if(imgDis>5){
			imgDis=6;
			$("#c62_1").css("left","0");
			$("#c62_1").stop().animate({left:-177},300);
		}
		$("#c62_1").find("img").attr("src","images/pi/t1.png");
		$("#c62_1").find("img:eq("+(imgDis-1)+")").attr("src","images/pi/t2.png");


	});


	clickLeft($("#btn_left"),$(".p8_center_8_tu_ul"),"0","-154px");
	clickLeft($("#btn_right"),$(".p8_center_8_tu_ul"),"-154px","0");

	//关于我们 就业学员变换
	var peopleTimer=null;

	peopleTimer=setInterval(function(){

		$(".y_cmove").css("left",0);
		$(".y_cmove").stop().animate({left:-196},300);

	},1500);

	$(".y_hid>img").hover(function (){

		clearInterval(peopleTimer);
		$(this).css("opacity",".5");
		
	},function (){	

		peopleTimer=setInterval(function(){

			$(".y_cmove").css("left",0);
			$(".y_cmove").stop().animate({left:-196},300);

		},1500);
		$(".y_hid>img").css("opacity","0");

	});

	//左右按钮
	var btnDis=0;
	var timeBol=false;
	$("#right").on("click",function(){
		if(timeBol){
			return
		}
		timeBol=true;
		setTimeout(function(){
			timeBol=false;
		},300);

		btnDis--;
		var a=$("#middle").css("left");
		if(a=='-2940px'){
			btnDis=0;
		}
		var b=btnDis*980;

		$("#middle").stop().animate({left:b},300);
		$("#button>li").find("div").css("opacity",".5");
		$("#button>li").find("div").eq(-btnDis).css("opacity","0");
	});

	$("#left").on("click",function(){
		if(timeBol){
			return
		}
		timeBol=true;
		setTimeout(function(){
			timeBol=false;
		},300);

		btnDis++;
		var a=$("#middle").css("left");
		if(a=='0px'){
			btnDis=-3;
		}
		var b=btnDis*980;
		$("#middle").stop().animate({left:b},300);
		$("#button>li").find("div").css("opacity",".5");
		$("#button>li").find("div").eq(-btnDis).css("opacity","0");
	});


	$("#button>li").hover(function (){

		btnDis=-$(this).index();
		var a=$("#middle").css("left");
		var b=btnDis*980;

		$("#middle").stop().animate({left:b},300);
		$("#button>li").find("div").css("opacity",".5");
		$("#button>li").find("div").eq(-btnDis).css("opacity","0");
		
	},function (){

		

	});

	clickLeft($(".y_btnleft"),$(".y_moves"),"0","-504px");
	clickLeft($(".y_btnright"),$(".y_moves"),"-504px",0);

	$(".y_cmove").find("img").on("click",function(){
		window.open('gajStudentParticulars.html','_self');
	});
	
	$(".p4_center_5_ul_li3>img").on("click",function(){
		window.open('ProjectListParticulars.html','_self');
	});
	$(".y_pa").find("img").on("click",function(){
		window.open('gajStudentParticulars.html','_self');
	});
	$(".y_pasi").find("img").on("click",function(){
		window.open('ProjectList.html','_self');
	});
	$("#c62_1").find("img").on("click",function(){
		window.open('HTML5TeacherParticulars.html','_self');
	});
	$(".intr1").find("img").on("click",function(){
		window.open('gajActivityListParticulars.html','_self');
	});
	$(".p1_center_3_1_ul_1_ul").find("img").on("click",function(){
		window.open('gajStudentParticulars.html','_self');
	});
	$(".p3_center_3r_li2").find("img").on("click",function(){
		window.open('gajActivityListParticulars.html','_self');
	});
	$(".y_teacher_img").on("click",function(){
		window.open('HTML5TeacherList.html','_self');
	});
	$(".y_moves img").on("click",function(){
		window.open('about-us-environment.html','_self');
	});
	$(".clear .fr>img").on("click",function(){
		window.open('about-us.html','_self');
	});
	
	$(".p8_center_5_ul_li3>img").on("click",function(){
		window.open('ProjectListParticulars.html','_self');
	});
	$(".p8_center_4_ul_img").on("click",function(){
		window.open('HTML5TeacherParticulars.html','_self');
	});
	$(".p11_center_3r_li3>img").on("click",function(){
		window.open('ProjectListParticulars.html','_self');
	});
	$(".y_show .y_teacher_bor img").on("click",function(){
		window.open('ProjectListParticulars.html','_self');
	});
	$(".p8_center_6_ul_li5>img").on("click",function(){
		window.open('gajActivityListParticulars.html','_self');
	});
	$(".p5_center_3_li2>img").on("click",function(){
		window.open('gajJoinUsMessageListParticulars.html','_self');
	});

	function clickLeft(obj,changeObj,startNum,endNum){

		obj.on("click",function(){

			changeObj.css("left",startNum);
			changeObj.stop().animate({left:endNum},300);

		});

	}

});