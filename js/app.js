$(document).ready(function(){
	/* Adds item by pressing "Enter" or clicking "Add Itme" */
	$("#entryForm").submit(function(event){
		if ($("#entry").val().length == 0){
			$(".alert").html("Type something in the field").show();
		}else{ 
			var userInput = $("#entry").val();
<<<<<<< HEAD
			$("ul").prepend("<li><input type=\"checkbox\" class=\"checkbox\">" + userInput + "<div class=\"minus\"><i class=\"fa fa-minus\"></i></div></li>");
=======
			$("ul").append("<li><input type=\"checkbox\" class=\"checkbox\">" + userInput + "<div class=\"minus\"><i class=\"icon-remove\"></i></div></li>");
>>>>>>> master
			$("#entry").val("");
			$(".alert").hide();
		};
		return false;
	});

	/* Toggles instructions in and out */
	$(".icon-plus").click(function(){
		$(".instructions").fadeToggle();
	})

	/* Crosses off item */
	$("ul").on("click", ".checkbox", function(){
		$(this).parent().toggleClass("strike");
	});

	/* Deletes item */
<<<<<<< HEAD
	$("ul").on("click", ".minus", function(event){
		$(this).parent().remove();
	});

	/* Deletes all checked items */
	$("#clear-checked").on("click", function(){
		$(".strike").remove();
=======
	$("ul").on("click", ".minus", function(){
		$(this).parent().fadeOut();
	});

	/* Deletes all checked items */
	$("#clear-checked").click(function(){
		$(".strike").fadeOut();
>>>>>>> master
	});

	/* Allows for rearranging list items by clicking and dragging */
	$("ul").sortable({ axis: "y" });

});