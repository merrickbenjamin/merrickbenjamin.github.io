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
  var hero = [
    { e: $(".hero-img-container#fog"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#fog"), p: "transition.slideUpOut", o: { duration: 200 } },
    { e: $(".hero-img-container#tenacity"), p: "transition.slideUpIn", o: { duration: 1500 } }
  ];
  $.Velocity.RunSequence(hero);

});

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
