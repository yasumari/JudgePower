// navigate on keypress

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

    // get navigate attribute
    var navigate = $(matchingAnimationElements).attr('navigate')

    // check if navigate attrinbute of element is present
    if (typeof navigate !== typeof undefined && navigate !== false) {
        // wait for end of css animation, then navigate to next page
        $(matchingAnimationElements).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function () {
                window.location.href = $('body').attr('next-page');
            });
    }
});