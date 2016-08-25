
// xPageForm a obj to achieve "WELCOME" when click JOIN US and SUCCEED. 

function successInit(){
	// 点下join us 成功的时候 onshow置于true，否则置于false，用来标识是否打开了welcome界面
	var onshow = false; 
	var $success = $("#success"); 

	$success.css("display","none"); 

	// when clicking join us
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

	$(".sent").click(function(){
		

		var name= $(".Name").val();
		var phone= $(".Phone").val();
		var intro= $(".Intro").val();
		verify(name,phone,intro);
	});


});

//verify the form
function verify(name,phone,intro) {
	if (phone.length != 11 || !(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
			alert("请输入有效的手机号码！");
			return; 
		} 
		else if (intro.length > 255) {
			alert("个人介绍似乎有点长了...");
			return; 
		}
        else if (name.length > 10) {
			alert("名字填写错误");
			return; 
		}
		$.ajax({
			type: 'post',
			async: true,
			url: "http://eczn.website:8086", 
			data: {
				name: name,
				phone: phone,
				intro: intro
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
				alert("报名失败！ "); 
				console.log(data); 
			}
		});
}

