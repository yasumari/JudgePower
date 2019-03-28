// navigate on keypress & set status bar

// set width for status bar (shitty and manually...)
$(window).on('load', function () {
    // fill array with respective pages and calculate bar length
    var questions = ["question-1.html", "question-2.html", "question-3.html", "question-4.html", "end.html"];
    var previousBarLength = (100 / questions.length) * (questions.indexOf(window.location.href.split("/").pop()));
    var barLength = (100 / questions.length) * (questions.indexOf(window.location.href.split("/").pop()) + 1);
    // set previous length of status bar for better transitioning
    $('.status-bar').css('width', previousBarLength + '%');
    //workaround: small timeout because values were set simultaneously
    setTimeout(function () {
        $('.status-bar').css('transition', 'width 0.5s cubic-bezier(0, 1, 0.5, 1)');
        $('.status-bar').css('width', barLength + '%');
    }, 100);
});

// check if element includes key input
$(document).keypress(function (event) {
    // get all elements that include animate-on-keys attribute
    var allAnimationElements = $('*[animate-on-keys]');
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

    // get navigate attribute
    var navigate = $(matchingAnimationElements).attr('navigate')

    // check if navigate attribute of element is present
    if (typeof navigate !== typeof undefined && navigate !== false) {
        // wait for end of css animation, then navigate to next page
        $(matchingAnimationElements).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function () {
                window.location.href = $('body').attr('next-page');
            });
    }
});