function attachEvents(){
    $( "#items li" ).on( "click", function() {
      //get the element with data selected attribute is true
        var attr = $( this ).attr('data-selected');
        //check for the attribute value
            if( attr == undefined ) {
                $( this ).css("background-color", "#DDD");
              $( this ).attr("data-selected","");
                } else{
              $( this ).css("background-color", "");
              $( this ).removeAttr("data-selected");
          }		
            });
        
        $("#showTownsButton").click(function(){
        $("#selectedTowns").text("Selected Towns:");
              var count=0;
              //get all the  li elements 
          var listItems =$("#items li");
          $.each(listItems ,function( i, val ) {
            //check for the current jquery elements with dataselected attrribute 
          if($( this ).attr('data-selected') != undefined){
              if(count!=0){
              $('#selectedTowns').append(',');
            }
              $('#selectedTowns').append($( val).text());
              count++;
            }});
            });
          
          
      
    }
