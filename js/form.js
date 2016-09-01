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

$(document).ready(function(){
	$(".sent button").click(function(){
		var name= $(".Name").val();
		var phone= $(".Phone").val();
		var intro= $(".Intro").val();
		var qq = $(".QQ").val();
		var email = $(".Email").val();
		var sex = $("input:checked").val(); 

		// console.log([name,phone,intro,qq,email,sex]);
		verify(name,phone,intro,qq,email,sex);
	});
});

function verify(name,phone,intro,qq,email,sex) {
	if (phone.length != 11 || !(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
		alert("请输入有效的手机号码！");
		return; 
	} else if (intro.length > 255) {
		alert("个人介绍似乎有点长了...");
		return; 
	} else if (name.length > 10) {
		alert("名字很长？");
		return; 
	} else if (qq.length == undefined) {
		qq = "dis-input"; 
	} else if (email.length == undefined){
		email = "dis-input";
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
			sex: sex
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
