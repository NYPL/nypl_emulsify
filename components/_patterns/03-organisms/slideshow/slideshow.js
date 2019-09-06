$(document).ready(function(){
  $('.slideshow').each(function() {
    var currentViewer = $('.slideshow__viewer', this)
    var currentTitle = $('.slideshow__image-title', this)
    var currentCarousel = $('.slideshow__carousel', this)
    // The Viewer at the top
    currentViewer.not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slideshow__carousel, .slideshow__image-title'
    });
    currentTitle.not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    });
    // The Carousel at the bottom
    currentCarousel.not('.slick-initialized').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      accessibility: true,
      mobileFirst: true,
      asNavFor: '.slideshow__viewer, .slideshow__image-title',
      prevArrow: $('.slideshow__nav--prev', this),
      nextArrow: $('.slideshow__nav--next', this),
      centerMode: true,
      focusOnSelect: true
    });
  });
});
