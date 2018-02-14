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

});
