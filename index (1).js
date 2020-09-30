$(document).ready(function(){
    $("nav .nav .two a").hover(function(){
        $("nav .nav .line").css('margin-left', '-535px')
    }, function(){
         $("nav .nav .line").css({
            marginLeft: '-645px'
        })
    })
     $("nav .nav .tree a").hover(function(){
        $("nav .nav .line").css({
            marginLeft: '-430px',
            width: '120px'
        })
    }, function(){
         $("nav .nav .line").css({
            marginLeft: '-645px',
            width: '80px'
        })
    })
     $("nav .nav .four a").hover(function(){
        $("nav .nav .line").css({
            marginLeft: '-283px',
            width: '135px'
        })
    }, function(){
         $("nav .nav .line").css({
            marginLeft: '-645px',
            width: '80px'
        })
    })
     $("nav .nav .five a").hover(function(){
        $("nav .nav .line").css({
            marginLeft: '-115px',
            width: '100px'
        })
    }, function(){
         $("nav .nav .line").css({
            marginLeft: '-645px',
            width: '80px'
        })
    })
    $("main .sumaya").hover(function(){
        $(".sumaya .two").css({
            transform: 'skew(9deg)',
            transition: 'ease-out .5s',
            opacity: '0'
        })
    }, function(){
        $('.sumaya .two').css({
            transform: 'skew(0)',
            transition: '.0s',
            opacity: '1'
        })
    })
})