$(document).ready(function(){
	/* Adds item by pressing "Enter" or clicking "Add Itme" */
	$("#entryForm").submit(function(event){
		if ($("#entry").val().length == 0){
			$(".alert").html("Type something in the field").show();
		}else{ 
			var userInput = $("#entry").val();
			$("ul").prepend("<li><input type=\"checkbox\" class=\"checkbox\">" + userInput + "<div class=\"minus\"><i class=\"fa fa-minus\"></i></div></li>");
			$("#entry").val("");
			$(".alert").hide();
		};
		return false;
	});
	
	/* Crosses off item */
	$("ul").on("click", ".checkbox", function(){
		$(this).parent().toggleClass("strike");
	});

	/* Deletes item */
	$("ul").on("click", ".minus", function(event){
		$(this).parent().remove();
	});

	/* Deletes all checked items */
	$("#clear-checked").on("click", function(){
		$(".strike").remove();
	});

	/* Allows for rearranging list items by clicking and dragging */
	$("ul").sortable({ axis: "y" });

});