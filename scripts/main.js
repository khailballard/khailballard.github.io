var init = function() {
    var current = parseURL();
    var latest = document.getElementById('latestPostNumber').innerHTML;

    console.log(current, latest);

    if (current == 'archive') {
        document.getElementById('arrow_left').style.opacity = 0;
        document.getElementById('arrow_right').style.opacity = 0;
    } else {
        if (parseInt(current) > 1) {
            document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (parseInt(current) - 1) + "/";
        } else {
            document.getElementById('arrow_left').style.opacity = 0.5;
        }

        if (parseInt(current) < parseInt(latest)) {
            document.getElementById('arrow_right').href = "http://www.reconditewoods.com/" + (parseInt(current) + 1) + "/";
        } else {
            document.getElementById('arrow_right').style.opacity = 0.5;
        }
        
    }
};

var parseURL = function() {
    var url = window.location.href.split('/');

    return url[3];
};
