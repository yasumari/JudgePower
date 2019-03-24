// audio & animation effects

var audioElement;

// create html5 audio element
$(window).on('load', function () {
    audioElement = document.createElement('audio');
    // set source of audio element
    if (window.location.href.includes('index.html')) {
        audioElement.setAttribute('src', 'assets/sound/punch.wav');
    } else {
        audioElement.setAttribute('src', '../assets/sound/punch.wav');
    }
});

// play audio
function play(audioElement) {
    // workaround: pause and reset sound on next key press
    if (audioElement.paused) {
        audioElement.play();
    } else {
        audioElement.currentTime = 0
    }
}

// check if element includes key input
$(document).keypress(function (event) {
    // get all elements that include animate-on-keys attribute
    var allAnimationElements = $('*[animate-on-keys]');
    console.log(allAnimationElements);
    // get all elements that include key input in attribute value
    var matchingAnimationElements = Object.values(allAnimationElements).filter(element => {
        var allowedKeys = $(element).attr('animate-on-keys');
        // allAnimationElements is a key-value-object that also includes some shit next to the actual elements, so allowedKeys can be undefined
        if (allowedKeys) {
            allowedKeys = allowedKeys.split(',').map(str => str.trim());
            // return true if it includes key input
            return allowedKeys.some(allowedKey => allowedKey === event.key);
        } else {
            return false;
        }
    });

    // trigger effects for all elements that passed the filter criteria (= all that include key input in attribute value)
    $(matchingAnimationElements).removeClass('selected');
    // workaround: add timeout to cancel and reset animation on next key press
    setTimeout(function () {
        $(matchingAnimationElements).addClass('selected');
        // only play audio for keys included in animate-on-keys attributes
        if (matchingAnimationElements.length) {
            play(audioElement);
        }
    }, 25);
});