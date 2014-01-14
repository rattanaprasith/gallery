/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  /**
   * Gallery. 
   */
  var galleryInit = function() {
    var current = null;

    $('.gallery-all img').each(function() {
      $(this)
        .attr('src', $(this).attr('src1') + '?w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
        .click(function() {
          if(!current) {
            current = this;
            console.log("Set current.");
          } else {
            $(current).toggleClass('selected');
            current = this;
            console.log("Toogled current");
          }
          $(this).toggleClass('selected');
          $('.gallery-current img').attr('src', $(this).attr('src1') + '?w=' + $('.gallery-current').width() + '&h=' + $('.gallery-current').height());
          console.log("Click on mini image.");
        });
      console.log("Gallery image was initiated.");
    });
    
    $('.gallery-all img').first().trigger('click');
  };
  galleryInit();
  
});

