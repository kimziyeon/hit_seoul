// symbol.js

function init(){

    const mainColorHov = document.querySelectorAll('.pink_txt, .blue_txt'),
        mainColorBar = document.querySelectorAll('.slogan_color p'),

        wideColorHov = document.querySelectorAll('.yellow_txt, .white_txt, .orange_txt, .sky_txt'),
        wideColorBar = document.querySelectorAll('.wide_color p');

    console.log(mainColorHov)
    console.log(mainColorBar)

    console.log(wideColorHov)
    console.log(wideColorBar)


    
    mainColorBar.forEach(function(el,key){
        el.onmouseover = function(){
            mainColorHov[key].classList.add('active');
        }
        el.onmouseleave = function(){
            mainColorHov[key].classList.remove('active');
        }
    })


    
    wideColorBar.forEach(function(el,key){
        el.onmouseover = function(){
            wideColorHov[key].classList.add('active');
        }
        el.onmouseleave = function(){
            wideColorHov[key].classList.remove('active');
        }
    })





    //json 서울대표색 10

    let colorBest10 = [];
    fetch('/data/color.json')

    .then(obj => obj.json())

    .then(data =>{
        colorBest10 = data.colorBest10
        colorBest10In()
    })


    function colorBest10In(){
        let colorBest10Keys = Object.keys(colorBest10);
        let elColor10 = document.querySelector('.color10_js');
        let tag = '';

        console.log(colorBest10Keys)
        console.log(elColor10)

        colorBest10.forEach(function(el,i){
            tag+= `
                <figure>
                <p><img src="./img/symbol/color/${el.img}" alt=""></p>
                <p style = "${el.color}"></p>
                <figcaption>
                    <p>${el.number}</p>
                    <span>${el.name}</span>
                </figcaption>
            </figure>
            `
        })

        elColor10.innerHTML = tag;
        
    }








    //json 서울지역색 50

    let colorBest50 = [];
    fetch('/data/color.json')

    .then(obj => obj.json())
    .then(data => {
        colorBest50 = data.colorBest50
        colorBest50In()
    })

    function colorBest50In(){
        let colorBest50Keys = Object.keys(colorBest50);
        let elColor50 = document.querySelector('.color50_js div');
        let tag2 = '';

        console.log(colorBest50Keys)
        console.log(elColor50)

        colorBest50.forEach(function(el,i){
            tag2 += `
                    <span style = "${el.backColor}; ${el.fontColor}">
                    ${el.number}
                    </span>
            `
        })

        elColor50.innerHTML = tag2;
    }



}

window.onload = init;