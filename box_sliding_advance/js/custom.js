$(document).ready(function(){
	
	/*
	slidingBox('.text1', 1000, '#000', 0);	
	slidingBox('.text2', 500, 'red', 700);
	slidingBox('.text3', 500, '#000', 900);	
	*/

	slidingBox({
		item : '.text1',
		speed : '1000',
		color : '#000',
		delay : 0
	});

	slidingBox({
		item : '.text2',
		color : 'aqua',
		delay : 500
	});



	function slidingBox(options){
		
		// 기존에 있는 defaults 객체를 외부에서 받은 options 객체로 덮어쓰기한 값을 다시 result에 넘겨담음.
		var result = {};
		var defaults = {
			speed : '500',
			color : '#000',
			delay : 0
		};
		$.extend(result, defaults, options);
		console.log(result);

		
		$(result.item).append(
			$('<div class="inner">').css({
				'width':'100%','height':'100%',
				'position':'absolute', 'top':'0px','left':'-100%',
				'background':result.color
			}).delay(result.delay).animate({'left':'0%'},result.speed,'easeOutExpo',function(){
				$(result.item).css({'color':result.color})
				$(this).animate({'left':'100%'},result.speed,'easeInExpo', function(){
					$(this).remove();
				})
			})
		)
	}
	
	
});















