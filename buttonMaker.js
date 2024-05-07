let backGroundColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function buttonMaker() {
    let bgColorValue = backGroundColor.value;
    let fontColorValue = fontColor.value;
    let fontSizeValue = fontSize.value;
    let fontWeightValue = fontWeight.value;
    let paddingValue = paddingInput.value;
    let borderRadiusValue = borderRadius.value;
    customButton.style.backgroundColor = bgColorValue;
    customButton.style.color = fontColorValue;
    customButton.style.fontSize = fontSizeValue;
    customButton.style.fontWeight = fontWeightValue;
    customButton.style.padding = paddingValue;
    customButton.style.borderRadius = borderRadiusValue;
}