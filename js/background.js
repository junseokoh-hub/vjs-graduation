const bgC = ["blueviolet", "pink", "yellowgreen", "violet", "orange", "yellow"];

function colorsChange() {
    const color_1 = bgC[Math.floor(Math.random()*bgC.length)];
    const color_2 = bgC[Math.floor(Math.random()*bgC.length)];
    const color_3 = bgC[Math.floor(Math.random()*bgC.length)];
    const randomColors = `linear-gradient(to right, ${color_1},${color_2},${color_3})`;
    document.body.style.background = randomColors;
} 

colorsChange();