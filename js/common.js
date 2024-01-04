// common.js
window.addEventListener('DOMContentLoaded',function(){
    let elHead = this.document.querySelector('head');
    let script = this.document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    elHead.prepend(script);
})

window.addEventListener('load',function(){
    
    $('body').prepend('<aside id="topBtn"></aside>')
    $('body').prepend('<header></header>')
    $('body').append('<footer></footer>')

    let nav = function(){
        
        const scrlTop = document.getElementById('topBtn'),
        headerMenu = document.querySelector('header');

        window.addEventListener('scroll',function(){
            if(this.scrollY < 10){
                scrlTop.classList.remove('nohide');
            }else{
                scrlTop.classList.add('nohide');
            }
        });

        let lastScroll = document.documentElement.scrollTop || 0
        document.addEventListener('scroll',function(){
            let scrollTop = document.documentElement.scrollTop

            if(scrollTop > lastScroll) {
                // down
                // console.log('down');
                headerMenu.style = `transform: translateY(-100%)`
            } else {
                //up
                // console.log('up');
                headerMenu.style = `transform: translateY(0)`
            }
            lastScroll = scrollTop

        })


        scrlTop.onclick = function(){
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        }
    }



    $('header').load('../../sub-common.html .inner',nav);
    $('footer').load('../../sub-common.html .ft-wrap',nav);
    $('.subcommon-container').load('../../sub-common.html .banner-img',nav);
    $('aside').load('../../sub-common.html #topBtn img',nav);


   
});

