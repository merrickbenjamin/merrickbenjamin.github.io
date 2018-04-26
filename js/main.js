$(document).ready( function() {

  var hash = window.location.hash;

  if (hash == '#portfolio') {
    //var selectedTab = $('a[href="' + hash + '"]');
    //selectedTab.trigger('click', true);
    $('#portfolio').modal({
      'show': true,
      'backdrop': 'static'
    });
  }

  //Hero img animation
  $(".hero-img-container").velocity("transition.slideUpIn", { duration: 800 } );

});

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
