/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 16:16:40
 * @version $Id$
 */
$(function(){
	var number=10;
	var i;
	for(i=1;i<=number;i++){
		$('<img src=""/>').appendTo('.ui-project1-inner');
	}
	$(".ui-project1-inner").children().addClass('ui-project1-inner-pic');

	for(i=0;i<number;i++)
		$(".ui-project1-inner-pic").eq(i).attr("src","img/img-"+(i+1)+".jpg");
})

$(document).ready(function(){

//No.1
$(".ui-project1-inner-pic").click(function(event) {
	$(".ui-project1-outer-img").attr("src",$(this).attr("src"));
	$(".ui-project1-outer-img").css({'left':($(window).width()-400)/2,'top':($(window).height()-$(this).height()*(600/$(this).width()))/2});
	$(".ui-project1-outer").fadeIn('2000');
	/* Act on the event */
	$(".ui-project1-outer").click(function(event) {
	$(this).fadeOut("fast");	/* Act on the event */
	});
});

//No.2
$(".ui-project2-title").click(function(event) {
	$(this).addClass('title-current').siblings('.ui-project2-title').removeClass('title-current');
	$(".ui-project2-content:eq("+$(this).index()+")").show().siblings('.ui-project2-content').hide();
		/* Act on the event */
});

//No.3
$(".ui-project3-row-del").click(function(event) {
	var a=parseInt($(this).parent().children('.ui-project3-row-no').text())-1;
	$(this).parent().nextAll().children('.ui-project3-row-no').text(function(){
		a++;
		return a;

	});
	$(this).parent().remove();
		/* Act on the event */
});

$(".ui-project3-add").click(function(event) {
	var a;
	if(isNaN(parseInt($(this).prev().children().last().children(".ui-project3-row-no").text())))
		a=1;
	else
		a=parseInt($(this).prev().children().last().children(".ui-project3-row-no").text())+1;
	$(this).prev().append('<div class="ui-project3-row"><div class="ui-project3-row-no"></div><div class="ui-project3-row-data"></div><div class="ui-project3-row-del">Delete</div></div>');
	$(this).prev().children().last().children(".ui-project3-row-no").text(a);
	$(".ui-project3-row-del").on('click', function(event) {
		var a=parseInt($(this).parent().children('.ui-project3-row-no').text())-1;
		$(this).parent().nextAll().children('.ui-project3-row-no').text(function(){
			a++;
			return a;
		});
		$(this).parent().remove();
		/* Act on the event */
	});
		/* Act on the event */
});
});
