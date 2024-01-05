window.onload = function () {
    
    $('#fullpage').fullpage({		      
        anchors: ['sct1', 'sct2', 'sct3','sct4','sct5'],
        scrollingSpeed: 1000,
        afterLoad: function (anchorLink, index) {
			// if(index == 3){
            //     $('.sct3-img-box').addClass('active');
            // }
            if(index == 4){
                $('.sct4-main-text').css(
                    "color","#D9D9D9"  
                )
                $('.s1').css({
                    "color":"#111111",
                    "transition-delay":"1.5s"
                }
                )
                $('.s2').css(
                    {"color":"#111111",
                    "transition-delay":"2.5s"}
                )
                $('.header-menu-item a').css(
                    "color","black"
                )
                $('.header-menu-wrap svg path').css(
                    "fill","black"
                )
                $('.header-search').css(
                    "border","1px solid black"
                )
                $('#header-search-input').css(
                    "color","black"
                )
            }
            if(index == 5){
                $('.sct5-line').css(
                    "transform","translateX(0%)"
                )
                $('.header-menu-item a').css(
                    "color","white"
                )
                $('.header-menu-wrap svg path').css(
                    "fill","white"
                )
                $('.header-search').css(
                    "border","1px solid white"
                )
                $('#header-search-input').css(
                    "color","white"
                )
            }

            if(index == 1){
                $('.header-menu-item a').css(
                    "color","white"
                )
                $('.header-menu-wrap svg path').css(
                    "fill","white"
                )
                $('.header-search').css(
                    "border","1px solid white"
                )
                $('#header-search-input').css(
                    "color","white"
                )
            }
            if(index == 2){
                $('.header-menu-item a').css(
                    "color","black"
                )
                $('.header-menu-wrap svg path').css(
                    "fill","black"
                )
                $('.header-search').css(
                    "border","1px solid black"
                )
                $('#header-search-input').css(
                    "color","black"
                )
            }
            if(index == 3){
                $('.header-menu-item a').css(
                    "color","white"
                )
                $('.header-menu-wrap svg path').css(
                    "fill","white"
                )
                $('.header-search').css(
                    "border","1px solid white"
                )
                $('#header-search-input').css(
                    "color","white"
                )
                

            }
		},

        onLeave: function (origin, index){
            
            if(index == 3){
                $('.sct3-img-box').addClass('active');
            }

            

        }

        

    });           
    
    const sectionFirstTitle = document.querySelector('.first'),
    sectionSecondTitle = document.querySelector('.second'),
    main = document.querySelector('body'),
    sectionS = document.querySelectorAll('.container');
    
    
    function sctTop(){
        let scrollTop = $(sectionS[0]).scrollTop();
        if(scrollTop == 0){
            sectionFirstTitle.style.transform = ('translateX(0%)');
            sectionSecondTitle.style.transform = ('translateX(0%)');
            // sectionSecondTitle.classList.add('activeMove');
        }
    }
    sctTop();
    //fp-completely


    // console.log(sectionS[2].classList.contains('active'));
    if(sectionS[2].classList.contains('active') == true){
        console.log('hi');
    }



    const scrlTop = document.getElementById('topBtn');

    window.addEventListener('scroll',function(){

        console.log('scrol');

        



        if(this.scrollY < 10){
            scrlTop.classList.remove('nohide');
        }else{
            scrlTop.classList.add('nohide');
        }

    });


    scrlTop.onclick = function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
        console.log('dsa');
    }

}