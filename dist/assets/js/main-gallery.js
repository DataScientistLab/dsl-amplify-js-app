$(function() {
  $('.wrapper-gallery').click(function() {
      $('.wrapper-gallery').each(function() {
         $(this).css('z-index', 0); 
      });
      	$(this).css('z-index', 10); 
      	$(this).toggleClass('open');    
  }) 
})