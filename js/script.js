$(function() {
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $('.u-tel-number').each(function() {
      var str = $(this).html();
      $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
    });
  }
});
