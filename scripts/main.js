var init = function() {
    console.log(parseURL());
};

var parseURL = function() {
    var url = window.location.href.split('/');

    return url[3];
};
