function attachEvents() {
   $("a.button").on ("click",function(){
   // Removes the specified class from each of the set of matched elements  
       $(".selected").removeClass("selected") ;
     //$(this)is a jquery wrapper around the elements  that enables usage of all jquery methods .
     //$(this)is a current jquery object you have clicked on present .
       $(this).addClass("selected"); 
       
     
   });
}
