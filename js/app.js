$(document).ready(function(){
	/* Adds item by pressing "Enter" or clicking "Add Itme" */
	$(".entryForm").submit(function(event){
		event.preventDefault();
		var userInput = $(".entry").val();
		if (userInput.length === 0){
			$(".alert").html("Type something in the field").show();
		}else{ 
			$(".item-list").append("<li><input type=\"checkbox\" class=\"checkbox\">" + userInput + "<div class=\"minus\"><i class=\"icon-trash\"></i></div></li>");
			$(".entry").val("");
			$(".alert").hide();
		};
	});

	/* Toggle instructions */
	$(".icon-plus").click(function(){
		$(".instructions").slideToggle(300);
	});

	/* Crosses off item */
	$("ul").on("click", ".checkbox", function(){
		$(this).parent().toggleClass("strike");
	});

	/* Deletes item */
	$("ul").on("click", ".minus", function(){
		var fadeItem = $(this).parent();
		fadeItem.fadeOut(function(){
			$(this).remove();
		});
	});

	/* Deletes all checked items */
	$(".clear-checked").click(function(){
		$(".strike").fadeOut().remove();
	});

	/* Allows for rearranging list items by clicking and dragging */
	$("ul").sortable({ axis: "y" });

});