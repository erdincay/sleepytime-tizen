(function () {
    window.addEventListener('tizenhwkey', function (ev) {
        if (ev['keyName'] === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            }
            catch (ignore) { }
        }
    });
    initL10N();
}());
function initL10N() {
    ['when_to_get_up', 'zzz', 'or', 'wake_up_at', 'calculate', 'hour', 'minute', 'am', 'pm']
        .forEach(function (it) { document.getElementById(it).innerHTML = TIZEN_L10N[it]; });
}
