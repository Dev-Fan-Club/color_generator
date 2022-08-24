// Sliders
const redSliderElement = document.getElementById("red-slider");
const greenSliderElement = document.getElementById("green-slider");
const blueSliderElement = document.getElementById("blue-slider");

// Values
const redValueElement = document.getElementById("red-value");
const greenValueElement = document.getElementById("green-value");
const blueValueElement = document.getElementById("blue-value");

// Color Box
const colorBoxElement = document.querySelector(".color-preview");

// Hex Color Code
const hexColorCodeElement = document.getElementById("color-code");

// Buttons
const copyButtonElement = document.getElementById("copy-button");
const clearButtonElement = document.getElementById("clear-button");

// Message
const messageElement = document.querySelector(".message");

// Red Color Slide Event
redSliderElement.addEventListener("input", () => {
    redValueElement.value = redSliderElement.value;

    rgbToHex(parseInt(redSliderElement.value), parseInt(greenSliderElement.value), parseInt(blueSliderElement.value));
});

// Green Color Slide Event
greenSliderElement.addEventListener("input", () => {
    greenValueElement.value = greenSliderElement.value;

    rgbToHex(parseInt(redSliderElement.value), parseInt(greenSliderElement.value), parseInt(blueSliderElement.value));
});

// Blue Color Slide Event
blueSliderElement.addEventListener("input", () => {
    blueValueElement.value = blueSliderElement.value;

    rgbToHex(parseInt(redSliderElement.value), parseInt(greenSliderElement.value), parseInt(blueSliderElement.value));
});

// Copy Color Code Button Event
copyButtonElement.addEventListener("click", () => {
    navigator.clipboard.writeText(hexColorCodeElement.value);

    messageElement.style.display = "block";
    messageElement.innerText = "Color code copied";
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 3000);
});

clearButtonElement.addEventListener("click", () => {
    redSliderElement.value = redValueElement.value = "255";
    greenSliderElement.value = greenValueElement.value = "0";
    blueSliderElement.value = blueValueElement.value = "0";

    rgbToHex(parseInt(redSliderElement.value), parseInt(greenSliderElement.value), parseInt(blueSliderElement.value));
});

/**
 * RGB To Hex Color Code Converter Function
 * @method
 * @param {Number} red - Red color value
 * @param {Number} green - Green color value
 * @param {Number} blue - Blue color value
 * @returns Hex color code of RGB
 */
const rgbToHex = (red, green, blue) => {
    let redHex = red.toString(16);
    let greenHex = green.toString(16);
    let blueHex = blue.toString(16);

    redHex = redHex.length === 1 ? "0" + redHex : redHex;
    greenHex = greenHex.length === 1 ? "0" + greenHex : greenHex;
    blueHex = blueHex.length === 1 ? "0" + blueHex : blueHex;

    let hexColorCode = "#" + redHex + greenHex + blueHex;
    hexColorCodeElement.value = hexColorCode;

    colorBoxElement.style.backgroundColor = hexColorCode;
};

// Assigning Default Value
rgbToHex(parseInt(redSliderElement.value), parseInt(greenSliderElement.value), parseInt(blueSliderElement.value));
