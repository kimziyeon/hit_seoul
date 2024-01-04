// info.js
function goTwitter(title,link){
    var w = (screen.width-450)/2;
    var h = (screen.height-450)/2;
    var href = "http://twitter.com/share?text=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(link);
    var a = window.open(href, 'twitter', 'width=450,height=450,left='+w+',top='+h+',scrollbars=0');
    if(a) { a.focus(); }
}

function goFaceBook(msg,url){
    var href ="http://www.facebook.com/sharer.php?u="+encodeURIComponent(url)+"&t="+encodeURIComponent(msg);
    var a = window.open(href,'facebook','');
    if(a){ a.focus();}
}



window.onload = function(){
    
    function pageGraphy (){

        let jsonObj;

        fetch('./data/infography.json')
        .then((res)=>res.json())
        .then((res)=>{
            jsonObj = res;
            letsGo();
        });

        function letsGo(){
            
            const elPage = document.querySelector(".page"),
                elBtn = document.querySelector(".buttons");

            let itemEa = 5;
            let buttonEa = Math.ceil(jsonObj.length / itemEa);
            
            function printData (n=0){
                let tag = "";

                for(let i=itemEa*n; i<itemEa*(n+1); i++){
                tag +=
                    `<a href="${jsonObj[i]["url"]}" target="_self" class="cont">

                        <div class="cont-num">
                            <b>제 ${jsonObj[i]["num"]}호</b>
                        </div>

                        <div class="cont-cont">
                            <b>${jsonObj[i]["title"]}</b>
                            <p>${jsonObj[i]["content"]}</p>
                        </div>

                        <div class="cont-date">
                            <p>${jsonObj[i]["date"]}</p>
                        </div>

                    </a>`        
                };
                elPage.innerHTML = tag;
            };  

            printData();


            let tag2 = "";
            for (let i=0; i<buttonEa; i++){
                tag2 += `<button class="page-btn">${i+1}</button>`
            }
            elBtn.innerHTML = tag2;

            const elPageBtn = document.querySelectorAll(".page-btn");

            elPageBtn.forEach(function(e,k){
                e.onclick = ()=>{printData(k);}
            });

        };
    };
    

/////////////////////storyInSeoul/////////////////////

    function pageStory (){
        
        let jsonObj2;

        fetch('./data/storyInSeoul.json')
        .then((res)=>res.json())
        .then((res)=>{
            jsonObj2 = res;
            letsGo2();
        });

        var $grid;

        function mars(){

            let win = window.innerWidth;

            $grid = $('.grid').imagesLoaded( function() {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-item',
                    percentPosition: true,
                    gutter: (win * 0.6) * 0.06
                });
            });   

        };

        function letsGo2(){

            const elGrid = document.querySelector(".grid");

            let itemEa2 = 4;
            let tag3 = "";

            for (let i = 0; i<itemEa2; i++){
                tag3 += 
                    `<div class="grid-item">

                        <a href="${jsonObj2[i]["url"]}" target="_self" class="page-move">

                            <div class="top-img">
                                <p><img src="${jsonObj2[i]["img"]}" alt=""></p>
                            </div>
                            <div class="sns-btn">
                                <span class="btn-fb">
                                    <img src="./img/info/facebook.svg" alt="" title="${jsonObj2[i]["fb"]}">
                                </span>
                                <span class="btn-tw">
                                    <img src="./img/info/twiter.svg" alt="" title="${jsonObj2[i]["twit"]}">
                                </span>
                            </div>
                            <div class="title-text">
                                <p>${jsonObj2[i]["subtitle"]}</p>
                                <b>${jsonObj2[i]["title"]}</b>
                            </div>
                            <div class="sub-text">
                                <span>${jsonObj2[i]["content"]}</span>
                                <b>${jsonObj2[i]["date"]}</b>
                            </div>
                            
                        </a>

                    </div>`
                    
            };
            
            elGrid.innerHTML = tag3;
            mars();

            const elPageMove = document.querySelectorAll(".page-move");
    
            elPageMove.forEach(function(btn,key){
                btn.onclick = function(e){
                    e.preventDefault();

                    try{
                        if (e.target.getAttribute('src').match('twiter')){
                            eval(e.target.getAttribute('title'));
                        } else if (e.target.getAttribute('src').match('facebook')){
                            eval(e.target.getAttribute('title'));
                        } else {
                            location.href = jsonObj2[key]["url"];
                        };
                    }catch{
                        location.href = jsonObj2[key]["url"];
                    }
                };
            });

            // 스크롤이 90% 정도 하단에 닿았을 때 추가로 4개씩 뿌려주기 ***
            
            let gridItemEa = 4;
            let max = jsonObj2.length;
            let num = 0;

            console.log(max);

            function printData2 (n=0) {
                let tag4 = "";

                for (let i = gridItemEa*(n+1); i<gridItemEa*(n+2); i++){
                    try{
                        tag4 +=
                        `<div class="grid-item">

                        <a href="${jsonObj2[i]["url"]}" target="_self" class="page-move">

                            <div class="top-img">
                                <p><img src="${jsonObj2[i]["img"]}" alt=""></p>
                            </div>
                            <div class="sns-btn">
                                <span class="btn-fb">
                                    <img src="./img/info/facebook.svg" alt="" title="${jsonObj2[i]["fb"]}">
                                </span>
                                <span class="btn-tw">
                                    <img src="./img/info/twiter.svg" alt="" title="${jsonObj2[i]["twit"]}">
                                </span>
                            </div>
                            <div class="title-text">
                                <p>${jsonObj2[i]["subtitle"]}</p>
                                <b>${jsonObj2[i]["title"]}</b>
                            </div>
                            <div class="sub-text">
                                <span>${jsonObj2[i]["content"]}</span>
                                <b>${jsonObj2[i]["date"]}</b>
                            </div>
                            
                        </a>

                    </div>`
                    }catch{}

                }

                let a = $(tag4);
                $grid.append(a)
                $grid.imagesLoaded( function() {
                    $grid.masonry('appended', a );
                });
                
            }

            window.onscroll = function(){
                
                if( window.pageYOffset + window.innerHeight  > document.body.scrollHeight  * 0.9 ){

                    if( Math.ceil(max / 4) > num ){
                        
                    printData2(num);
                    num++;
                    console.log(num);

                    };

                };
                
            };

        };

        window.onresize = mars;

    };

////////////////////static///////////////////////////

    function pageStatic(){
        
    };

    let pageNum = location.pathname.substr(1);

    switch(pageNum){
        case 'info-graphy.html' : pageGraphy();
        break;

        case 'info-story.html' : pageStory();
        break;

        case 'info-static.html' : pageStatic();
        break;
    };

};