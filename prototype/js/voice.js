// speech synthesis

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
});