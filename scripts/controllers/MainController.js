app.controller('MainController', ['$scope', function($scope) {
    $scope.me = {
        pic: '/images/profile_pic.jpg',
        quote: '"I like to code." - Rikin Marfatia'
    };
    
    $scope.projects = [
        {
            title: "THIS SITE",
            description: "This site was built as a means to show off projects as well as test out different web technologies. Currently it is build with HTML/CSS, jQuery, Bootstrap, and Angular.",
            link: "http://www.rikinmarfatia.me"
        },
        {
            title: "FIXD",
            description: "Worked as a Founder/Mobile Engineer for a startup that would help diagnose your vehicle when the check engine light came on. Worked with Android and its Bluetooth API.",
            link: "http://www.fixdapp.com"
        },
        {
            title: "MORE TO COME",
            description: "Got some projects in the works, as well as this site which is still under construction.",
            link: ""
        }
    ]
}]);