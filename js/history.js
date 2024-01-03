// history.js
window.onload = function () {

    function pageHisMayor() {
        fetch('./data/mayor.json')
            .then(obj => obj.json())
            .then(history => {
                index = history;
                historyMayor();
            })

        function historyMayor() {
            const mayorInfo = document.querySelector('.mayor-sct-bundle');

            let mayorTag = "";
            index.forEach(function (key) {
                mayorTag += `<div class="mayor-sct">
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
            </div>`;
            });

            mayorInfo.innerHTML = mayorTag;

        }

    };

    function pageHisSeoul() {


        // function bindHistoryListClick() {
            
        // }

        fetch('./data/history.json')
        .then(response => response.json())
        .then(historyData => {
            indexHistory = historyData;


            //여기서 json값을 type별로 묶어준다
            ancient = indexHistory.filter(obj=>obj.type == '고대');
            ancientS = Object.keys(ancient).length;

            MiddleAges = indexHistory.filter(obj=>obj.type == '중세');
            modern = indexHistory.filter(obj=>obj.type == '근대');
            hyundai = indexHistory.filter(obj=>obj.type == '현대');

            //type별로 묶은걸 활용하기 위해서 하나로 다시 묶는다. 그러면 처음에 0~9까지가 아닌 0 1, 0 1 2, 0 1 2, 0 1로 묶여서 4개의 목록에 넣어서 활용하기 용의하다
            hisSeoutlS = [ancient, MiddleAges, modern, hyundai];
    
            historySeoul();
        })

        //li랑 그 안에 이미지를 변경하기 위해서 전부 0으로 설정
    let count = 0,idx=0;;

    
    function historySeoul() {
        const historyPage = document.querySelector('.his-sub-bundle'),
            historyNext = document.querySelector('.sub-history-img-box .next'),
            historyPrev = document.querySelector('.sub-history-img-box .prev'),
            historyList = document.querySelectorAll('.sub-history-list li');
    
    
        historyList.forEach((item, index) => {
            item.addEventListener('click', () => {
                historyList.forEach((li) => {
                    li.classList.remove('active');
                });
    
                item.classList.add('active');
                idx=index;
                count=0;
                historyPrint();
            });
        });
    
        historyNext.onclick = function () {
            if(hisSeoutlS[idx].length > count){
                count++;
            }
            historyPrint();
        }
    
        historyPrev.onclick = function () {
            if(hisSeoutlS[idx].length > count) count--; return;
            historyPrint();
        }

        function historyPrint(){
            const historyTitle = document.querySelector('.sub-history-text-box h3'),
                historyText = document.querySelector('.sub-history-text-box p'),
                hisImg = document.querySelector('.sub-history-img-box > img');
                
            hisImg.setAttribute('src', hisSeoutlS[idx][count].img);
            historyTitle.innerHTML = `<b>${hisSeoutlS[idx][count].name}</b> ${hisSeoutlS[idx][count].subheading}`;
            historyText.innerHTML = `${hisSeoutlS[idx][count].text}`;
        }
    }
    
    // $('body').prepend('<header></header>')
    // $('body').append('<footer></footer>')

    // let nav = function(){
        
    // }

    // $('header').load('../../sub-common.html .inner',nav);
    // $('footer').load('../../sub-common.html .ft-wrap',nav);
    // $('.subcommon-container').load('../../sub-common.html .banner-img',nav);










        

    };



    let pageNum = location.pathname.substr(1);

    switch (pageNum) {
        case 'his-seoul.html': pageHisSeoul();
            break;

        case 'his-mayor.html': pageHisMayor();
            break;
    };

    $('body').prepend('<header></header>')
    $('body').append('<footer></footer>')

    let nav = function(){
        
    }

    $('header').load('../../sub-common.html .inner',nav);
    $('footer').load('../../sub-common.html .ft-wrap',nav);
    $('.subcommon-container').load('../../sub-common.html .banner-img',nav);





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