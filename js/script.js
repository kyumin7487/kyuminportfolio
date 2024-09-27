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

$(function() {
    $('.animate').scrolla({
        moblie: true,
        once: false, 
    }); 
});