// info.js

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
        
        let jsonObj;

        fetch('./data/storyInSeoul.json')
        .then((res)=>res.json())
        .then((res)=>{
            jsonObj = res;
            letsGo();
        });

        function mars(){

            let win = window.innerWidth;
            let $grid = $('.grid').masonry({

                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true,
                gutter: (win * 0.6) * 0.06

            });

        };

        mars();

        window.onresize = mars;

        function letsGo(){

            const elGrid = document.querySelector(".grid");

            // let itemEa = 4;
            // let tag = "";

            // for (let i = 0; i<itemEa; i++){
            //     tag += 
            //         `a`
            // };

            // elGrid.innerHTML = tag;

            // *** json data 4개 뿌려주기 + 스크롤이 80% 정도 하단에 닿았을 때 추가로 4개씩 뿌려주기 ***

        };
    };

    let pageNum = location.pathname.substr(1);

    switch(pageNum){
        case 'info-graphy.html' : pageGraphy();
        break;

        case 'info-story.html' : pageStory();
        break;

        case 'info-static.html' : break;
    };

};