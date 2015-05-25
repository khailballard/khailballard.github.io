var init = function() {
    var current = parseURL();
    var latest = document.getElementById('latestPostNumber').innerHTML;

    if (current == 'archive') {
        document.getElementById('arrow_left_image').style.opacity = 0;
        document.getElementById('arrow_right_image').style.opacity = 0;
    } else {
        if (current.length) {
            if (parseInt(current) > 1) {
                document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (parseInt(current) - 1) + "/";
            } else {
                document.getElementById('arrow_left_image').style.opacity = 0.5;
            }

            if (parseInt(current) < parseInt(latest)) {
                document.getElementById('arrow_right').href = "http://www.reconditewoods.com/" + (parseInt(current) + 1) + "/";
            } else {
                document.getElementById('arrow_right_image').style.opacity = 0.5;
            }
        } else {
            document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (parseInt(latest) - 1) + "/";
            document.getElementById('arrow_right_image').style.opacity = 0.5;
        }
    }
};

var parseURL = function() {
    var url = window.location.href.split('/');

    return url[3];
};
