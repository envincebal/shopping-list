$(document).ready(function(){
	/* Adds item by pressing "Enter" or clicking "Add Itme" */
	$("#entryForm").submit(function(event){
		if ($("#entry").val().length == 0){
			$(".alert").html("Type something in the field");
		}else{
			$('ul').prepend('<li><input type="checkbox" class="checkbox">' + $("#entry").val() + '<div class="minus"><i class="fa fa-minus"></i></div></li>');
			$('#entry').val("");
		};
		return false;
	});
	
	/* Crosses off item */
	$("ul").on("click", ".checkbox", function(){
		$(this).parent().toggleClass("strike");
	});

	/* Deletes item */
	$("ul").on("click", ".minus", function(){
		$(this).parent().remove();
	});

	/* Deletes all checked items */
	$("#clear-checked").on("click", function(){
		$(".strike").remove();
	})
});