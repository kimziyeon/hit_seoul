// inlaw.js
function init(){
    let data;
    fetch('./data/inlaw.json')
    .then(res => res.json())
    .then(res=>{
        data = res;  
        
        let pageNum = location.pathname.substr(1);

        switch(pageNum){
            case 'inlaw-brand.html' : pageBrand();
            break;

            case 'inlaw-drape.html' : pageDrape();
            break;

            case 'inlaw-symb.html' : pageSymb();
            break;
        };


    })

    function pageBrand(){

        const pictoCont = document.querySelector('.pictoall');

        insertInfo = () => {
            let inputInfo = '';
            
            data.pictos.forEach((i) => {
                inputInfo +=
                `<div class="pictobox">
                    <figure class="friend">
                        <img src="${i.img1}" alt="">
                        <figcaption>
                            <p>&lt;${i.name}&gt;</p><br>
                            <p>${i.descript1}</p>
                        </figcaption>
                    </figure>
                    <figure class="trait">
                        <img src="${i.img2}" alt="">
                        <figcaption>${i.descript2}</figcaption>
                    </figure>
                </div>`
            })
            pictoCont.innerHTML = inputInfo;
        }
        insertInfo();
    };

    function pageDrape(){

        const colorHov = document.querySelectorAll('.outer-box > div'),
        colorBar = document.querySelectorAll('.color_click span');

        colorBar.forEach(function(element,key){
            element.onmouseover = function(){
    
                colorHov[key].classList.add('active02');
                
            }
            element.onmouseleave = function(){
                colorHov[key].classList.remove('active02');
            }
        })
    };

    function pageSymb(){
        
        const symbCont = document.getElementsByClassName('whole-symb');
        
        
        insertInfo = () => {
            let inputInfo = '';
            data.items.forEach((i) => {
                inputInfo += 
                `<div class="symb"><figure><img src="${i.img}" alt=""></figure>
                <article class="circ">
                <p class="tit">${i.name}</p>
                <p class="content">
                ${i.content}
                </p>
                </article></div>`
            })
            symbCont[0].innerHTML += inputInfo;
        }
        insertInfo();
        
        
    };



}

window.onload = init;