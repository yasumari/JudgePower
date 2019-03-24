// scale logic

var totalSteps = 0;
var currentStep = 0;

// set content of current-scale-value element
var setScaleValue = function (step) {
    if (step === 0) {
        // set to default value at step 0
        $('.current-scale-value').text($('.step-container').attr('default-value'));
    } else {
        // set to value of respective step (>0)
        $('.current-scale-value').text($('.step:nth-of-type(' + step + ')').attr('step-value'));
    }
}

// initialize total step count & scale value
$(window).on('load', function () {
    totalSteps = $('.step').length;
    setScaleValue(0);
});

// increment or decrement step count on respective key press
$(document).keypress(function (event) {
    switch (event.key) {
        case '1':
            { // red -> minus
                if (currentStep > 0) {
                    changeStep(--currentStep);
                }
                break;
            }
        case '2':
            { // green -> plus
                if (currentStep < totalSteps) {
                    changeStep(++currentStep);
                }
            }
    }
});

// set width of progress bar depending on step & set new content of current-scale-value
var changeStep = function (step) {
    var percentWidth = (100 / totalSteps) * step;
    $('.progress-bar').width(percentWidth + '%');
    setScaleValue(step)
}