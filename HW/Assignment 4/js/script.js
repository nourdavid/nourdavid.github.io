$(function(){
  //Hide stuff

  $('#getStarted, #finish, #previous, .hide').hide();


  //alert("hello");
 $('#title').on('mouseover',function(){
   $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
     $('#getStarted').show();
  });

  $('#title').on('mouseleave',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
   });

   $('#getStarted').on('click', function(){
     $('.hide').show();
     $('#getStarted').hide();
   });
   $('#finish').on('click', function(){
     $('.hide, #next, #previous, #finish').hide();
     $('#survey').show();
   });

   //Survey
 $('#yes').on('click',function(){
   $('#surveytitle').css("background-color","green");
   //change multiple css properties notice {} and :
   $('#survey').css({
     "border":"1px solid blue",
     "background":"#ccc"
   });
  });
  $('#no').on('click',function(){
  $('#surveytitle').css("background-color","red");
  //change multiple css properties notice {} and :
  $('#survey').css({
    "border":"1px solid red",
    "background":"#FFFFFF"
    // rgb(255,255,255)
  });
});

   $('#next').on('click',function(){

     var currentItem = $('li.active');
     var nextItem = $('li.active').next();

     currentItem.toggleClass('active');

     nextItem.toggleClass('active');

     // Conditional eval.
     if($('li').last().hasClass('active')) {
       $('#next').hide();
       $('#finish').show();
     } else {
       $('#next').show();


     }

     // Conditional eval.
     if($('li').first().hasClass('active')) {
       $('#previous').hide();
     } else {
       $('#previous').show();

     }

   });

   $('#previous').on('click',function(){

     var currentItem = $('li.active');
     var previousItem = $('li.active').prev();

     currentItem.toggleClass('active');

     PreviousItem.toggleClass('active');

     // Conditional eval.
     if($('li').last().hasClass('active')) {
       $('#next').hide();
       $('#finish').show();
     } else {
       $('#next').show();
     }
     // Conditional eval.
     if($('li').first().hasClass('active')) {
       $('#previous').hide();
     } else {
       $('#previous').show();

     }

   });

});
