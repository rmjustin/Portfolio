let isKeyDown = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    '1', '2', '3']
let keyValue = {};
let audio = new Audio('../../piano-mp3-master/piano-mp3/C1.mp3');
let volume = document.getElementById('volume-control');
volume.addEventListener('input', function(e) {
    audio.volume = e.currentTarget.value / 100;
})

window.onload = function load() {
    for (let i = 0; i < isKeyDown.length; i++) {
        keyValue[isKeyDown[i]] = 'false';
    }
}

function highlight(letter) {
    let toHighlight = document.getElementById(letter);
    toHighlight.classList.add('active');
}

function unhighlight(letter) {
    let toUnhighlight = document.getElementById(letter);

    toUnhighlight.classList.remove('active');
}

function play(letter, vol) {
    let note = document.getElementById(letter).getAttribute('name');
    audio = new Audio(`../../piano-mp3-master/piano-mp3/${note}.mp3`);
    audio.volume = vol;
    audio.play();
    
}

window.addEventListener("keydown", function (letter) {
    if (keyValue[letter.key] == 'false') {
        highlight(letter.key);
        play(letter.key, audio.volume);
        keyValue[letter.key] = 'true';
    }
});

window.addEventListener("keyup", function (letter) {
    unhighlight(letter.key);
    keyValue[letter.key] = 'false';
});


