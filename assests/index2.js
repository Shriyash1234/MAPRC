$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('.column2').toggleClass('col-9');
      $('.column2').toggleClass('col-12');
      $('#sidebar').toggleClass('active');
      $('.maincol').toggleClass('col-3');
      $('.maincol').toggleClass('maincol2');
      $('.messsages_col').toggleClass('col-3');
      $('.messsages_col').toggleClass('col-4');
      $('img').toggleClass('image2');
      $('.Person_name').toggleClass('image2');
      $('.Person_bio').toggleClass('image2');


    });
});

$(window).on('resize', function() {
  if($(window).width() < 1100) {
    $('.column2').removeClass('col-9');
    $('.column2').addClass('col-12');
    $('#sidebar').addClass('active');
    $('.maincol').removeClass('col-3');
    $('.maincol').addClass('maincol2');
    $('img').addClass('image2');
    $('.Person_name').addClass('image2');
    $('.Person_bio').addClass('image2');

  }else{
    $('.column2').addClass('col-9');
    $('.column2').removeClass('col-12');
    $('#sidebar').removeClass('active');
    $('.maincol').addClass('col-3');
    $('.maincol').removeClass('maincol2');
    $('img').removeClass('image2');
    $('.Person_name').removeClass('image2');
    $('.Person_bio').removeClass('image2');
  }
})
$('a.nav-link.text-white').on('click', function() {
  $('a.nav-link.active').removeClass('active')
  $('a.nav-link').addClass('text-white')
  $(this).toggleClass('active');

});
$('a.nav-link.active').on('click', function() {
  $('a.nav-link.active').removeClass('active')
  $('a.nav-link').addClass('text-white')
  $(this).toggleClass('active');

});
