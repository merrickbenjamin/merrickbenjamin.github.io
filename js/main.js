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
    { e: $(".hero-img-container#austria"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#austria"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#autumn"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#autumn"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#boston"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#boston"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#fog"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#fog"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#hk"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#hk"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#iceland1"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#iceland1"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#iceland2"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#iceland2"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#kauai"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#kauai"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#patagonia1"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#patagonia1"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#patagonia2"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#patagonia2"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#patagonia3"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#patagonia3"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#patagonia4"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#patagonia4"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#pattern"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#pattern"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#tunnel"), p: "transition.slideUpIn", o: { duration: 1500 } },
    { e: $(".hero-img-container#tunnel"), p: "transition.slideUpOut", o: { duration: 200, delay: 3000 } },
    { e: $(".hero-img-container#valparaiso"), p: "transition.slideUpIn", o: { duration: 300 } }
  ];
  $.Velocity.RunSequence(hero);

});

[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});
