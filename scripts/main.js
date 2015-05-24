var init = function() {
    var param = parseURL();

    if (param == 'archive') {
        document.getElementById('arrow_left').style.opacity = 0;
        document.getElementById('arrow_right').style.opacity = 0;
    } else {
        console.log(parseInt(param));
    }
};

var parseURL = function() {
    var url = window.location.href.split('/');

    return url[3];
};
