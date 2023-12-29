// inlaw.js
const colorHov = document.querySelectorAll('.outer-box > div'),
    colorBar = document.querySelectorAll('.color_click span');

function init(){

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