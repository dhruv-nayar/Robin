window.onload = function () {
  var url, 
      i,
      jqxhr;

  for (i = 0; i < 2; i++) {
    url = document.URL + 'upgrade/';
    jqxhr = $.getJSON(url, function(data) {
      console.log('API response received');
  });
}
}