window.onload = function () {

    // window.addEventListener('scroll', function () {
    //     console.log('hi');

    // });
    
    $('#fullpage').fullpage({		      
        anchors: ['sct1', 'sct2', 'sct3','sct4','sct5'],
        scrollingSpeed: 1000
    });           


    function runAction(direction) {
        console.log(direction+' 실행 !!!!');
      }
      
      var currentDirection = ''; // 현재의 방향을 나타내는 변수
      var lastScrollTop = 0; // 방향을 구하기 위해 사용되는 변수
      let i = 0;
    //   const sectionS = document.querySelectorAll('.container');
    //   let setTime;
    //   $(window).scroll(function(event){
    //     clearTimeout(setTime);
    //         setTime = setTimeout(function () {
                
    //     var currentPos = $(this).scrollTop();
    //      sectionS.forEach(function(sct,key){
    //         //여기서 down한번에 한개씩
    //         if (currentPos > lastScrollTop){
    //             // 아래로 스크롤 중
    //             if(currentDirection != 'down') { // 마지막 방향 확인
    //             //  currentDirection = 'down';
    //              runAction('down');
    //             }
                
    //         } else {
    //            // 위로 스크롤 중
    //            if(currentDirection != 'up') { // 마지막 방향 확인
    //             //  currentDirection = 'up';
    //              runAction('up');
    //            }
    //         }
    //       })
    //      lastScrollTop = currentPos;
    //     }, 200); // 방향을 구하기 위해 마지막 스크롤 지점을 저장
    //   });








    const scrlTop = document.getElementById('topBtn');

    window.addEventListener('scroll',function(){
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