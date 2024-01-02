// history.js
window.onload =function(){

    function pageHisSeoul(){};
    function pageHisMayor(){};
    
    let pageNum = location.pathname.substr(1);
    
            switch(pageNum){
                case 'info-graphy.html' : pageGraphy();
                break;
    
                case 'info-story.html' : pageStory();
                break;
            };



    fetch('./data/mayor.json')
    .then(obj => obj.json())
    .then(history =>{
        index = history;
        historyMayor();
    })
    
    function historyMayor(){
        const mayorInfo = document.querySelector('.mayor-sct-bundle');
    
        let mayorTag = "";
        index.forEach(function(key){
            mayorTag +=`<section class="mayor-sct">
            <div class="mayor-bundle">
                <div class="mayor-text-box">
                    <div class="mayor-info">
                        <h2 class="mayor-name">${key.name}</h2>
                        <p>${key.a}</p>
                    </div>
                    <div class="mayor-policy">
                        <b>주요 직책</b>
                        <p>${key.policy}</p>
                    </div>
                </div>
                <div class="mayor-img-box">
                    <img src="./img/history/page2/${key.img}" alt="">
                </div>
            </div>
        </section>`;
        });
    
        mayorInfo.innerHTML = mayorTag;
    
    }
    
    fetch('./data/history.json')
    .then(obj => obj.json())
    .then(history2 =>{
        indexHistory = history2;
        historySeoul();
    })
    
    let count = 0;
    let ancient = historySeoul.filter(obj=>obj.type == '고대');
    console.log(ancient);
    
    function historySeoul(){
        const historyPage = document.querySelector('.his-sub-bundle'),
            historyList = document.querySelectorAll('.sub-history-list li'),
            historyNext = document.querySelector('.sub-history-img-box .next'),
            historyPrev = document.querySelector('.sub-history-img-box .prev');

        console.log(historyList);
        historyList.onclick = function(){
            // this.classList.add('sub-history-list-li');
            
            console.log('click');
        }

        indexHistory.forEach(function(key,i){
            // count = i;
            
            historyNext.onclick = function(){
                const historyTitle = document.querySelector('.sub-history-text-box h3'),
                    historyText =document.querySelector('.sub-history-text-box p'),
                    hisImg = document.querySelector('.sub-history-img-box > img');
                if(count === 9){
                    return;
                }
                count++;
                hisImg.setAttribute(`src`,`${indexHistory[count].img}`);
                historyTitle.innerHTML =`<b>${indexHistory[count].name}</b> ${indexHistory[count].subheading}`;
                historyText.innerText =`${indexHistory[count].text}`;
                
            }
    
            historyPrev.onclick = function(){
                const historyTitle = document.querySelector('.sub-history-text-box h3'),
                historyText =document.querySelector('.sub-history-text-box p'),
                hisImg = document.querySelector('.sub-history-img-box > img');

                if(count === 0){
                    return;
                }
                count--;
                hisImg.setAttribute(`src`,`${indexHistory[count].img}`);
                historyTitle.innerHTML =`<b>${indexHistory[count].name}</b> ${indexHistory[count].subheading}`;
                historyText.innerText =`${indexHistory[count].text}`;
            }
    
        })
    }
    
}
//저게 1 2 첫번째 목록에서 이동하고 두번째는 3 4 세번째는 5 6 네번째는 7 8 그러면 두번째 목록부터 n+2로 하면 
// 1 2
// 3 4
// 5 6
// 7 8 


//next랑 prev를 누르면 밑에 제목과 글 교체
//그러면 next를 누르면 다음게 나오면 됨 대신 시대 갯수에 맞게 나와야함 고대는 3개 나머지는 2개 어캐?
//next를 클릭하면 실행
//옆에 목록 누르면 시대에 맞는 그거 나오고


//    /his-seoul.html

/* 
let pageName = location.pathname,
    pageIdx = pageName.indexOf('.'),
    pageStr = pageName.substring(1,pageIdx);

    switch(pageStr){
        case 'his-mayor': 함수실행; break;
        case 'his-mayor': 함수실행; break;
    }
 */
    // let param = new URLSearchParams(location.search);
    // console.log(
    //     param.get('code')
    // )



// let da = [{
//     "id" : 10,
//     "img" : "img_mayor5.png",
//     "name" : "제30대 서울시장 조 순",
//     "a" : "1995. 7. 1. ~ 1997. 9. 9.",
//     "policy" : [
//         "시정을 시민중심으로 전환하고 시정운영 3개년 계획과 부문별 중장기 계획 수립 추진","당산철교 재시공 등 각종 도시시설물의 안전점검과 보수 추진","환경기본조례제정, 환경헌장 제정. 서울의제 21 등 환경정책 적극 추진",
//         "전국 최초로 사회복지조사 실시하여 시민복지 5개년 계획 수립"
//     ]
// },{type:'고대'},{type:'중세'}]
// let aaa = da.filter(obj=>obj.type == '고대')