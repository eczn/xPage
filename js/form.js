// xPageForm a obj to achieve "WELCOME" when click JOIN US and SUCCEED. 
function successInit(){
	var onshow = false; 
	var $success = $("#success"); 
	$success.css("display","none"); 
	function click(){
		if (onshow){
			// from true to false;
			onshow = false;
			$success.css("display","none"); 
		} else {
			// from false to true;
			onshow = true; 
			$success.css("display","block"); 
		}
	}
	this.click = click;
}

function addClass(max){
	var t = $(".classSelect"); 
	var i = 0;
	t.empty(); 
	t.append("<option value='0'>选择班别</option>"); 
	for (i=1;i<=max;i++){
		t.append("<option class='o' value='"+i+"'>"+i+"</option>");
	}
}

$(document).ready(function(){
	$(".proSelect").change(function(){
		//onchange
		var classNumTable = [4, 4, 2, 6]; 
		addClass( classNumTable[$(".proSelect > option:selected").attr('position')] );
		// console.log($(".proSelect > option:selected").attr('position'));
	});

	$(".sent button").click(function(){
		var name= $(".Name").val();
		var phone= $(".Phone").val();
		var intro= $(".Intro").val();
		var qq = $(".QQ").val();
		var email = $(".Email").val();
		var sex = $("input:checked").val(); 
		var pro = $(".proSelect > option:selected").val();
		var classNum = $(".classSelect > option:selected").val();

		
		verify(name,phone,intro,qq,email,sex,pro,classNum);
	});
});

function verify(name,phone,intro,qq,email,sex,pro,classNum) {
	console.log('qq:'+qq);
	console.log('email:'+email);
	if (phone.length != 11 || !(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
		alert("请输入有效的手机号码！");
		return; 
	} else if (intro.length > 255) {
		alert("个人介绍似乎有点长了...");
		return; 
	} else if (name.length > 10) {
		alert("名字很长？");
		return; 
	} 


	var str = "未填写";
	if (qq == "") {
		qq = 0;
	}
	if (email == ""){
		email = 0;
	}
	$.ajax({
		type: 'post',
		async: true,
		url: "http://eczn.website:8086", 
		data: {
			name: name,
			phone: phone,
			intro: intro,
			qq: qq,
			email: email,
			sex: sex,
			pro: pro,
			classNum: classNum
		},
		dataType: 'json',
		success: function(data){
			console.log(data);
			console.log("success");
			alert("报名成功！"); 
			$(".frame").val('');
			xPageForm.click(); 
		},
		error: function(data){
			console.warn("faild");
			console.log("报名失败！ ");
			alert("报名失败！请重试，如果问题依然存在 请将您的报名信息发送邮箱至 eczn@moebaka.com 或者编辑短信发送至 15625058135"); 
			console.log(data); 
		}
	});
}
