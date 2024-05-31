document.addEventListener("DOMContentLoaded", function () {
    const desc1 = document.getElementById("desc1");
    const desc2 = document.getElementById("desc2");
    const desc3 = document.getElementById("desc3");
    const desc4 = document.getElementById("desc4");
    desc1.style.display = 'none';
    desc2.style.display = 'none';
    desc3.style.display = 'none';
    desc4.style.display = 'none';
})

function toggleDesc() {
    const divElement = document.getElementById('desc1');
    if (divElement.style.display == 'none') {
        divElement.style.display = '';
        document.getElementById("plus-icon").src="../icon/minus.png"
    }
    else {
        divElement.style.display = 'none';
        document.getElementById("plus-icon").src="../icon/plus.png"
    }
}

function toggleDesc2() {
    const divElement = document.getElementById('desc2');
    if (divElement.style.display == 'none') {
        divElement.style.display = '';
        document.getElementById("plus-icon2").src="../icon/minus.png"
    }
    else {
        divElement.style.display = 'none';
        document.getElementById("plus-icon2").src="../icon/plus.png"
    }
}

function toggleDesc3() {
    const divElement = document.getElementById('desc3');
    if (divElement.style.display == 'none') {
        divElement.style.display = '';
        document.getElementById("plus-icon3").src="../icon/minus.png"
    }
    else {
        divElement.style.display = 'none';
        document.getElementById("plus-icon3").src="../icon/plus.png"
    }
}

function toggleDesc4() {
    const divElement = document.getElementById('desc4');
    if (divElement.style.display == 'none') {
        divElement.style.display = '';
        document.getElementById("plus-icon4").src="../icon/minus.png"
    }
    else {
        divElement.style.display = 'none';
        document.getElementById("plus-icon4").src="../icon/plus.png"
    }
}