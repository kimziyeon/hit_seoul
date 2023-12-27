window.onload = function(){

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
        console.log('dsa');
    }
    console.log(scrollY);
    
    
    console.log('live');
}
