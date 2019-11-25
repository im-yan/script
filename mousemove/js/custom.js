$(document).ready(function(){

    // parseInt() : 문자열을 정수로 바꾸는 함수입니다. 
    var x_now = parseInt($('.box').css('left'));
    var y_now = parseInt($('.box').css('top'));



  
    $('#wrap').on("mousemove",function(e){

        // e.pageX : 마우스 위치의 x좌표 값
        // e.pageY : 마우스 위치의 Y좌표 값 
        var x = e.pageX/20;
        var y = e.pageY/20;

        $('h1').text(x);
        $('h2').text(y);

        $('.box').css({'left':x_now-x , 'top':y_now-y});
    });


});