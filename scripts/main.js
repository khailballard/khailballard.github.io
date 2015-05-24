var init = function() {
    var param = parseURL();

    if (param == 'archive') {
        document.getElementById('arrow_left').style.opacity = 0;
        document.getElementById('arrow_right').style.opacity = 0;
    } else {
        console.log(param);
        document.getElementById('arrow_left').href = "http://www.reconditewoods.com/" + (parseInt(param) - 1) + "/";
        document.getElementById('arrow_right').href = "http://www.reconditewoods.com/" + (parseInt(param) + 1) + "/";
    }
};

var parseURL = function() {
    var url = window.location.href.split('/');

    return url[3];
};
