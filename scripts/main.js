var init = function() {
    var param = window.location.href.split('/')[3];
    var current = parseInt(param[3]);
    var latest = parseInt(document.getElementById('latestPostNumber').innerHTML);

    var enabledOpacity = 1;
    var disabledOpacity = 0;

    console.log(param, current, current.length);

    if (current > 0) {
        document.getElementById('arrow_left_image').style.opacity = enabledOpacity;
        document.getElementById('arrow_right_image').style.opacity = enabledOpacity;

        if (current > 1) {
            document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (current - 1) + "/";
        } else {
            document.getElementById('arrow_left_image').style.opacity = disabledOpacity;
        }

        if (current < latest) {
            document.getElementById('arrow_right').href = "http://www.reconditewoods.com/" + (current + 1) + "/";
        } else {
            document.getElementById('arrow_right_image').style.opacity = disabledOpacity;
        }
    } else if (current.length === 0) { // If we're on the homepage
        document.getElementById('arrow_left_image').style.opacity = enabledOpacity;

        document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (latest - 1) + "/";
        document.getElementById('arrow_right_image').style.opacity = disabledOpacity;
    }
};
