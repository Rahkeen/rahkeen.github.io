var colors = ["#4747FF", "#E84343", "#19D175"];
var index = 0;

$(function () {
    animateName();
});

function animateName() {
    $('.rikin').animate({color: colors[(index++) % colors.length]}, 3000, animateName);
}