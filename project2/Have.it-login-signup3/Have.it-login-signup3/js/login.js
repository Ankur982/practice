
// Eye Button Show Hide
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// Mobile login Js
$(".mobile-login-box").hide();      
  $(document).ready(function(){
  $("#mobile-login").click(function(){          
    $(".mobile-login-box").show();
    $(".email-login-box").hide();         
  });  
});