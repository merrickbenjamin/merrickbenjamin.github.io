$(document).ready( function() {

  $(".required.email").keyup( function() {
    $(".user-type-radios").slideDown();
  });

  $("a[data-toggle='tab']").click(function() {
    if ($(this).attr('href') == "#home") {
      $(".site-wrapper").removeClass("no-bg");
    } else {
      $(".site-wrapper").addClass("no-bg");
    }
  });

  var hash = window.location.hash;

  if (hash) {
    var selectedTab = $('a[href="' + hash + '"]');
    selectedTab.trigger('click', true);
  }

});
