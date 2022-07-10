$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('.column2').toggleClass('col-9');
      $('.column2').toggleClass('col-12');
        $('#sidebar').toggleClass('active');
        $('.maincol').toggleClass('col-3');
        $('.maincol').toggleClass('maincol2');
       

    });
});

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
