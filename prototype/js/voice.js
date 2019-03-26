// speech synthesis with Web Spech API

// play tts output
$(window).on('load', function () {
    // get all elements that include voice attribute & generate tts output
    $('*[voice]').each(function () {
        var voiceOutput = new SpeechSynthesisUtterance();
        voiceOutput.text = $(this).text();
        voiceOutput.lang = 'de-DE';
        voiceOutput.rate = 1.0;
        speechSynthesis.speak(voiceOutput);
    });

    // show voice warning when browser == chrome (only on index.html)
    if (window.location.href.includes('index.html')) {
        if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
            $('.voice-warning').css('visibility', 'visible');
        }
    }
});