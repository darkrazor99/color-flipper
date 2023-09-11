const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
function genRandNum(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}
document.getElementById("btn").addEventListener("click", (e) => {
    const randIndex = genRandNum(colors.length);
    document.body.style.backgroundColor = colors[randIndex];
    document.querySelector('.color').textContent = colors[randIndex];
});

