// show help overlay on key press

var helpKey = 'h'

// show overlay when key is pressed
$(document).on('keydown', function (event) {
    if (event.key === helpKey) {
        $('.help-overlay').css('opacity', '1');
    }
});

// hide overlay when key is not pressed anymore
$(document).on('keyup', function (event) {
    if (event.key === helpKey) {
        $('.help-overlay').css('opacity', '0');
    }
});