// 스플리팅 호출
document.addEventListener("DOMContentLoaded", function() {
    Splitting();
});

// 헤더 스크롤 방향 이벤트
$(function() {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function() {
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
});

// scrolla.js
$(function() {
    $('.animate').scrolla({
        moblie: true,
        once: false, 
    }); 
});

// svg path 길이 구하기
$(function() { 
    $('.svgAni').find('#svgAni6').each(function(i, path) {
        var length = path.getTotalLength();
        // alert(length)
    });
});