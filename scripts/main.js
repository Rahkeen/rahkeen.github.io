var colors = ["#3080e8", "#e83a30", "#e8e230", "#e88c30", "#30e849"];
var index = 0;

$(function () {
    animateName();
});

function animateName() {
    $('.rikin').animate({color: colors[(index++) % colors.length]}, 3000, animateName);
}

