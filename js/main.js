
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
    })  
})

$('.header-nav .nav').tap(
    function(e){
        if(e.target.nodeName == "LI"){
            $('.header-nav .nav li').removeClass('active')
            e.target.classList.add('active')

        }
    }
)

$('.header-nav .more').tap(
    function(){
        this.classList.toggle('rotate')
        $('.header-nav .nav').toggleClass('disnone')
        if($('.boxMore').hasClass('block')){
            $('.moreNav').addClass('fadeOutUp')
            $('.moreNav').one('animationend',function(){
                    $('.moreNav').removeClass('fadeOutUp')
                    $('.boxMore').toggleClass('block')
                }
            )
        }else{
            $('.boxMore').toggleClass('block')
            $('.moreNav').addClass('fadeInDown')
            $('.moreNav').one('animationend',function(){
            $('.moreNav').removeClass('fadeInDown')
        })
        }
        
    }
)
$('.footer li').tap(
    function(e){
        
            $('.footer li').removeClass('active')
            this.classList.add('active')
            
    }
)
$('.moreNav .list div').tap(
    function(e){
            console.log(e.target)
            $('.moreNav .list div').removeClass('active')
            this.classList.add('active')
            
    }
)
