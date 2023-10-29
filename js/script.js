// slider part start
$('.opular_destination_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
});

// counter part start
$('.count').counterUp({
  delay: 10,
  time: 2000,
});
AOS.init();
