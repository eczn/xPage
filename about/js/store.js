// store.js

function uploadData(name){

	$.ajax({
		type: 'post',
		async: true,
		url: "http://eczn.website:8086", 
		data: {
			name: name,
			test: 8888
		},
		dataType: 'json',
		success: function(data){
			console.log(data);
			console.log("success");
		},
		error: function(data){
			console.warn("faild");
			console.log(data); 
		}
	});
}
