$(document).ready(function(){

var animation_going;

$(".next").on("click",function(){
	if(animation_going == true) return;

	animation_going = true;
	$('ul').css('left', '+=400px');
	$('li:first-child').appendTo('ul');

	$("ul").animate({
		left:"-=400px"
	}, {
		complete: function(){
			animation_going = false;
		}
	})
});

$(".prev").on("click",function(){
	if(animation_going == true) return;
	
	animation_going = true;

	$('ul').css('left', '-=400px');
	$('li:last-child').prependTo('ul');
	$("ul").animate({
		left:"+=400px"
	}, {
		complete: function(){
			animation_going = false;
		}
	})
});

	
});