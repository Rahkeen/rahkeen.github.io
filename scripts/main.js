var colors = ["#FFE11A", "#FD7400", "#BEDB39"];
var index = 0;

$(function () {
    animateName();
});

function animateName() {
    $('.rikin').animate({color: colors[(index++) % colors.length]}, 3000, animateName);
}