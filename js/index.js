window.onload = function () {
    var swiper = new Swiper(".mySwiper", {
        watchSlidesProgress: true,
        slidesPerView: 3,
    });

    window.addEventListener('scroll', function () {
        // console.log(window.scrollY);

    });

    //header 메뉴 색상 변경
    const hdMenu = document.querySelectorAll('.container'),
          main = document.querySelector('main'),
        hdMenuA = document.querySelectorAll('.header-menu-item a');

    let inter,num=0;
    window.onscroll = function(){
        
        if(hdMenu[0].getBoundingClientRect().top < 0){
            // hdMenuA.classList.add('active');
        }else{
            // hdMenuA.classList.remove('active');
        }
        // hdMenu.forEach(function(menu,key){
        //     if(menu.getBoundingClientRect().top < window.innerHeight* 0.5){
        //         menu.classList.add('active')
        //     }
        // })

        clearTimeout(inter)
        inter = setTimeout(()=>{
            num++;
            main.style=`position:fixed;width:100%;transform:translateY(-${window.innerHeight * num}px);transition:1s`;
        },300)
        
    }

}