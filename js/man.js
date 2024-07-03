
$(".close").on("click", function() {
  $(".link").animate({ left : "-100%"}, 1000, function(){
    $(".contact-home").css("marginLeft", "0", 1000)
  })
   
  })
 
   
    
   
    

$(".menu").on("click", function() {
  $(".link").animate({left : "0"}, 1000)
    $(".contact-home").css("marginLeft", "250px", 3000)
  

   
})

// slideDown 

$(".title1").on("click", function(){
    $(".text").eq(0).slideToggle(1000 )
        
    })
   

$(".title2").on("click", function(){
    $(".text").eq(1).slideToggle(1000)
  
})
$(".title3").on("click", function(){
    $(".text").eq(2).slideToggle(1000)
  
})
$(".title4").on("click", function(){
    $(".text").eq(3).slideToggle(1000)
  
})

// count 



  $("#getting-started")
  .countdown("2024/10/25", function(event) {
    $("#day").text(
      event.strftime('%D')
    );
    $("#houres").text(
        event.strftime('%H')
      );
      $("#minutes").text(
        event.strftime('%M')
      );
      $("#seconds").text(
        event.strftime('%S')
      );
  });


  // Characyer Reamining
  function count() {
    var max = $(this).attr("maxlength");
    var length = $(this).val().length;
    var counter = max - length;
    var helper = $(this).next("#number");

    if (counter !== 1) {
        helper.text(counter );
    } else {
        helper.text(counter );
    }
  }

  $(document).ready(function () {
    $(".form-control").keyup(count);
});


// scroll 

$(".links").on("click", function(e){

 let sectionId = $(e.target).attr("href");


 let aboutOffset = $(sectionId).offset().top;


  $("html").animate({scrollTop : aboutOffset}, 3000)

})