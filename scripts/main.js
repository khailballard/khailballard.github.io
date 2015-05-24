var init = function() {
    var param = parseURL();

    if (param == 'archive') {
        document.getElementById('arrow_left').style.display = 'none';
        document.getElementById('arrow_right').style.display = 'none';
    }
};

var parseURL = function() {
    var url = window.location.href.split('/');

    return url[3];
};
