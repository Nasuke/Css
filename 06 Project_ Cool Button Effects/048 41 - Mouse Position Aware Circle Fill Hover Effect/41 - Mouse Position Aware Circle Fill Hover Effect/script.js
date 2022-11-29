$(document).ready(function(){
  $('.button.first').on('mouseenter', function(event) {
    $(this).find('.btn-bg').css({top: event.offsetY, left: event.offsetX});
  });
});
