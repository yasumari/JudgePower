// speech synthesis with Web Spech API

$(window).on('load', function () {
    // show voice warning when browser == chrome (checking for class that only exists on index.html)
    if ($('.message-container')) {
        if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
            $('.voice-warning').css('visibility', 'visible');
        }
    }

    // cancel ongoing speech utterance on new page
    speechSynthesis.cancel();

    //play tts output after a small timeout (workaround after cancel)
    setTimeout(function () {
        // get all elements that include voice attribute & generate tts output
        $('*[voice]').each(function () {
            var voiceOutput = new SpeechSynthesisUtterance();
            voiceOutput.text = $(this).text();
            voiceOutput.lang = 'de-DE';
            voiceOutput.rate = 1.0;
            speechSynthesis.speak(voiceOutput);
        });
    }, 100);
});