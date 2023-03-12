$(document).ready(function(){
  $("#vertical-menu-btn").click( function() {
    $me = $(this);
      $me.toggleClass('off');
        if($me.is(".off")){
      $(".new-link-btn").text("+");
        }else {
      $(".new-link-btn").text("Create New");
    }
  });

  // Contact Card Js
  $(".card-content-fill").hide();
    $("#choose_contact").click(function(){
      $(".card-content").hide();
      $(".card-content-fill").show();
  });

  // Advance-Filter Js
  $(".advance-filter").hide();
    $("#adv_filter").click(function(){      
      $(".advance-filter").toggle();
  });
});

  
  


 
