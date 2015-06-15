$(document).ready(function(){

	//var ItIsDay=true;

	$("#daytime").click(function(){
		$("#field").fadeIn();
		$("#daytime").hide();
		$("#nighttime").show();
		$("#stars").hide();
		$("#shootStar").hide();

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

	
	$("#nighttime").click(function(){
		$("#stars").fadeIn();
		$("#nighttime").hide();
		$("#daytime").show();
		$("#field").hide();
		$("#food").hide();

		setTimeout(function(){
			$("#shootStar").fadeIn()
		}, 2000);

		setTimeout(function(){
			$("#shootStar").slideUp()
		}, 4000);

	});



	});
