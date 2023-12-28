// info.js

window.onload = function(){
    
    let jsonObj;

    fetch('./data/infography.json')
    .then((res)=>res.json())
    .then((res)=>{
        jsonObj = res;
        letsGo();
    });

    function letsGo(){
        
        const elPage = document.querySelector(".page");
        const elBtn = document.querySelector(".buttons")

        let itemEa = 5;
        let buttonEa = Math.ceil(jsonObj.length / itemEa);
        let tag = "";

        for(let i=0; i<itemEa; i++){
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

        let tag2 = "";

        for (let i=0; i<buttonEa; i++){
            tag2 += `<button>${i+1}</button>`
        }

        elBtn.innerHTML = tag2;

        };
    };

    // 버튼을 눌렀을 때 페이지 이동하기 (제이슨 데이터값 바꾸기)