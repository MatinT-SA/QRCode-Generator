const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    generateBtn.dataset.clicked="true";
    let qrValue = qrInput.value;
    if (!qrValue) {
        generateBtn.style.transform = "scale(.8)";
        return;
    }

    generateBtn.style.transform = "scale(1)";
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generate QR Code";
    })
    wrapper.classList.add("active");
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
        generateBtn.style.transform = "scale(.8)";
        generateBtn.style.outline = "none";
    }
});

generateBtn.addEventListener("mouseover", () => {
    generateBtn.style.transform = "scale(.9)";
    generateBtn.style.outline = "5px double rgb(28, 117, 49)";
});

generateBtn.addEventListener("mouseout", () => {
    if (!qrInput.value) {
        generateBtn.style.transform = "scale(.8)";
        generateBtn.style.outline = "none";
    } else if (!generateBtn.dataset.clicked) {
        generateBtn.style.transform="scale(.8)";
    } else{
        generateBtn.style.transform="scale(1)";
    }
});

generateBtn.addEventListener("focus", () => {
    if (!qrInput.value) {
        generateBtn.style.outline = "none";
    } else {
        generateBtn.style.outline = "5px double rgb(28, 117, 49)";
    }
})