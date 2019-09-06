$(document).ready(function(){
  $('.slideshow').each(function() {
    var currentViewer = $('.slideshow__viewer', this)
    var currentCarousel = $('.slideshow__carousel', this)
    // The Viewer at the top
    currentViewer.not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slideshow__carousel'
    });
    // The Carousel at the bottom
    currentCarousel.not('.slick-initialized').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      accessibility: true,
      mobileFirst: true,
      asNavFor: '.slideshow__viewer',
      centerMode: true,
      focusOnSelect: true
    });
  });
});
