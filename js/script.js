var ZAKOJIFARMAPP = ZAKOJIFARMAPP || {};

ZAKOJIFARMAPP.namespace = function(ns_string){
  var parts = ns_string.split('.'),
      parent = ZAKOJIFARMAPP,
      i,n;

  if ( parts[0] === "ZAKOJIFARMAPP"){
    parts = parts.slice(1)
  }

  for ( i = 0, n = parts.length; i < n; ++i){
    if ( typeof parent[parts[i]] === "undefined"){
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }

  return parent;
};

(function($){
  $(function() {
    $("#header").load("/common/header.html");
    $("#footer").load("/common/footer.html");

    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      $('.u-tel-number').each(function() {
        var str = $(this).html();
        $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
      });
    }
  });
})(jQuery);
