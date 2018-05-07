//jquery way - short hand
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// javascript way
// check off specific to do by clicking
// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		//turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} else {
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

// Click on x to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text
		var todoText = ($(this).val());
		//clears input 
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$('#plus-toggle').click(function(){
	$("input[type='text']").fadeToggle();
});