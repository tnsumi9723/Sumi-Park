$(function(){
    function mobile1(){
        $(".mobile > .mobile_box > ul").stop().animate({marginTop:-510},function(){
        $(".mobile > .mobile_box > ul > li:first").appendTo(".mobile > .mobile_box > ul")
        $(".mobile > .mobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile1,3000);

    function mobile2(){
        $(".ferranomobile > .ferranomobile_box > ul").stop().animate({marginTop:-510},function(){
        $(".ferranomobile > .ferranomobile_box > ul > li:first").appendTo(".ferranomobile > .ferranomobile_box > ul")
        $(".ferranomobile > .ferranomobile_box > ul").css({marginTop:0})
        })
    }
    setInterval(mobile2,3000);
})