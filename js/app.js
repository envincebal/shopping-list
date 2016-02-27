$(document).ready(function(){
	/* Adds item by pressing "Enter" or clicking "Add Itme" */
	$("#entryForm").submit(function(event){
		if ($("#entry").val().length == 0){
			$(".alert").html("Type something in the field").show();
		}else{ 
			var userInput = $("#entry").val();
			$("ul").append("<li><input type=\"checkbox\" class=\"checkbox\">" + userInput + "<div class=\"minus\"><i class=\"icon-trash\"></i></div></li>");
			$("#entry").val("");
			$(".alert").hide();
		};
		return false;
	});

	/* Hides instructions */
	$(".icon-remove").click(function(){
		$(".instructions").slideUp(300);
		$(this).fadeOut(100,function(){
			$(".icon-plus").fadeIn(100);
		});
	});

	/* Shows instructions */
	$(".icon-plus").click(function(){
		$(".instructions").slideDown(300);
		$(this).fadeOut(100,function(){
			$(".icon-remove").fadeIn(100);
		});
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
	$("#clear-checked").click(function(){
		$(".strike").fadeOut().remove();
	});

	/* Allows for rearranging list items by clicking and dragging */
	$("ul").sortable({ axis: "y" });

});