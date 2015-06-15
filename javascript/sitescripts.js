$(document).ready(function(){

	$("#daytime").click(function(){
		$("#field").fadeIn();
		$("#daytime").hide();
	});
		setTimeout(function(){
			$("#giraffe").fadeIn();
		}, 2000);
		
		setTimeout(function(){
			$("#feedMe").show();
		}, 3000);

		$("#feedMe").click(function(){
			$("#tree").slideDown();
		});
	



	});
