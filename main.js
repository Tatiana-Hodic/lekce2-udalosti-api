// tady je místo pro náš program

let nadpis = document.querySelector('h1');
//nadpis.classList.add('zluty');

//nadpis.classList.remove('zluty');

nadpis.classList.toggle('zluty');


//Funkcia pridava tucne pismo
function tucny() {
    let odstavec = document.querySelector('.odstavec');
    odstavec.classList.toggle('tucny');
}

//Funkcia pridava cervene pismo
function cervena() {
    let barva = document.querySelector('.odstavec');
    barva.classList.toggle('cervena');
}

//Funkcia zvacsuje pismo o 1px
function vetsi() {
    let el = document.querySelector('#vetsi');
    let fontSize = (parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size')) + 1) + 'px';
    el.style.fontSize = fontSize;
}

//Funkcia prehrava audio subor
function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

//Funkcia pozastavi audio subor
function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

//Funkcia stisi audio subor
function min() {
    let minVolume = document.getElementById("audio");
    minVolume.volume = 0;
}

//Funkcia ponecha mid volume na audio subore
function mid() {
    let midVolume = document.getElementById("audio");
    midVolume.volume = 0.5;
}

//Funkcia pusti audio subor na max
function max() {
    let maxVolume = document.getElementById("audio");
    maxVolume.volume = 1;
}

//Funkcia zastavi audio subor
function stop() {
    const audio = document.querySelector("#audio");
    audio.pause();
    audio.currentTime = 0;
}