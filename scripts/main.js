var colors = ["#BDD684", "#95AB63"];
var index = 0;

$(function () {
    animateName();
});

function animateName() {
    $('.rikin').animate({color: colors[(index++) % colors.length]}, 3000, animateName);
}