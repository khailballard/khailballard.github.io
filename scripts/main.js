var init = function() {
    var url = window.location.href.split('/');

    var current = parseInt(url[3]);
    var latest = parseInt(document.getElementById('latestPostNumber').innerHTML);

    var disabledOpacity = 0.25;

    if (current > 0) {
        document.getElementById('arrow_left_image').style.opacity = 1;
        document.getElementById('arrow_right_image').style.opacity = 1;

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
    } else {
        document.getElementById('arrow_left_image').style.opacity = 1;
        
        document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (latest - 1) + "/";
        document.getElementById('arrow_right_image').style.opacity = disabledOpacity;
    }
};
