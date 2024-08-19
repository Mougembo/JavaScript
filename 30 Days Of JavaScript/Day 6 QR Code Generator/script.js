
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    console.log(qrText.value)
    imgBox.classList.add("show-img");
})


