// Add your custom JS code here
var slick_team_carousel = $('.team-carousel__content');

if (slick_team_carousel.exists()) {

    var slideNum = 0,
        tmp = document.location.search.match(/slide=(\d+)/);

    if (tmp && tmp[1]) {
        slideNum = tmp[1];
    }

    slick_team_carousel.slick({
        initialSlide: slideNum,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        centerPadding: 0,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        customPaging: function (slick, index) {
            var icon = slick.$slides.get(index).dataset.icon;
            return '<svg role="img" class="df-icon df-icon--' + icon + '"><use xlink:href="' + icon + '"/></svg>';
        },

        responsive: [{
            breakpoint: 1200,
            settings: {
                vertical: false,
                verticalSwiping: false,
            }
        }]
    });

    slick_team_carousel.on('breakpoint', function (e) {
        reRenderSVG();
    });

}
