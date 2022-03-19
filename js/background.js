const bgC = ["#f8b195","#f67280","#c06c84","#6c5b7b","#355c7d","#99b898","#feceab","#ff847c","#e84a5f" ,"#2a363b"];
function colorsChange() {
    const color_1 = bgC[Math.floor(Math.random()*bgC.length)];
    const color_2 = bgC[Math.floor(Math.random()*bgC.length)];
    const color_3 = bgC[Math.floor(Math.random()*bgC.length)];
    const randomColors = `linear-gradient(140deg, ${color_1},${color_2},${color_3})`;
    document.body.style.background = randomColors;
} 

colorsChange();