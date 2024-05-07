let bgContainer = document.getElementById("bgContainer");
let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
bgContainer.style.backgroundColor = bgColorsArray[0];

function clickMe() {
    let lengthArray = bgColorsArray.length;
    let randomNumberIndex = Math.ceil(Math.random() * lengthArray);
    if (lengthArray === randomNumberIndex) {
        randomNumberIndex = lengthArray - 1;
    }
    let randomColor = bgColorsArray[randomNumberIndex];
    bgContainer.style.backgroundColor = randomColor;
}