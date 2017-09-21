// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object


// STEP 16: Change the interval to 5 seconds (set in milliseconds)
$('.carousel').carousel({
    interval: 5000
  })
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
$('#carousel-cars').on('slide.bs.carousel', function(){
    //remove class that zooms caption
    $('.carousel-caption').removeClass('zoomit');
})

$('#carousel-cars').on('slid.bs.carousel', function(){
    //re-add class that zooms caption
    $('.carousel-caption').addClass('zoomit');
})

//Disable arrow keys - with help from StackOverflow
$('#carousel-cars').off('keydown.bs.carousel');
