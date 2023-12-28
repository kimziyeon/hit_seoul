// inlaw.js
const colorHov = document.querySelectorAll('.outer-box > div'),
    colorBar = document.querySelectorAll('.color_click span');
    // emblemText = document.querySelectorAll('.emblem-img > figcaption'),
    // emblemHov = document.querySelectorAll('.emblem-img > img');

function init(){

    // emblemHov.forEach(function(element,key){

    //     element.onmouseover = function(){
    //         emblemText[key].classList.add('active01');
    //     }

    //     element.onmouseleave = function(){
    //         emblemText[key].classList.remove('active01');
    //     }
    // })

    colorBar.forEach(function(element,key){
        element.onmouseover = function(){

            colorHov[key].classList.add('active02');
            
        }
        element.onmouseleave = function(){
            colorHov[key].classList.remove('active02');
        }
    })

}

window.onload = init;