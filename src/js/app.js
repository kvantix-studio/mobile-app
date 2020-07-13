$('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true
});

$('.card-product-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

$('.similar-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 2
          }
        }
      ]
});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled !== 0) {
    document.querySelector('.header--card').classList.remove('header--transparent');
  } else {
    document.querySelector('.header--card').classList.add('header--transparent');
  }
};