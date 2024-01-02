// symbol.js

let color10 = [];
fetch('./data/color.json')

.then(obj => obj.json())
.then(data => {
    color10 = data.color
    colorBest10()
})

