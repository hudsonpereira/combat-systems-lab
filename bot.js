setInterval(() => {
    const huntButton = document.querySelector('#huntButton');
    const reviveButton = document.querySelector('#reviveButton');

    if(! huntButton.disabled) {
        huntButton.click();
    }

    if(! reviveButton.disabled) {
        reviveButton.click();
        huntButton.click();
    }

}, 1000);

setInterval(() => {
    document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'r'}));
}, 1000);