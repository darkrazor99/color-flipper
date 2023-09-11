const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


document.getElementById("btn").addEventListener("click", (e) => {
    const rand = "#"+genRandHex(hex).join("");
    document.body.style.backgroundColor = rand;
    document.querySelector('.color').textContent = rand;
});


function genRandHex(arr){
    const indeces=[];
    for(let i=0; i<6; i++){
        indeces.push(arr[genRandNum(arr.length)]);
    } 
    return indeces;
}


function genRandNum(maxLimit){
    return Math.floor(Math.random()*maxLimit);
}
