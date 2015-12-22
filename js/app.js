$(document).ready(function(){

	/* Adds item into list by pressing "Enter" */
	$("#entry").keypress(function(event){
		if (event.which == 13){
		$('ul').prepend('<li><input type="checkbox" class="checkbox">' + $("#entry").val() + '<div class="minus"><i class="fa fa-minus"></i></div></li>');
			$('#entry').val("");
		}/*else{	
		$(("#entry").val().length == 0){
			alert("Type something in the field");
		};*/
	});

	/* Adds item into list by clicking "add item" button */
	$("#add-item").click(function(){
		if ($("#entry").val().length == 0){
			alert("Type something in the field");
		}else{
			$('ul').prepend('<li><input type="checkbox" class="checkbox">' + $("#entry").val() + '<div class="minus"><i class="fa fa-minus"></i></div></li>');
			$('#entry').val("");
		};
	});

	/* Crosses off item */
	$("ul").on("click", ".checkbox", function(){
		$(this).closest("li").toggleClass("strike");
	});

	/* Deletes item */
	$("ul").on("click", ".minus", function(){
		$(this).closest("li").remove();
	});

	/* Deletes all checked items */
	$("#clear-checked").on("click", function(){
		$(".strike").remove();
	})
});