function search(){
       //Get the value from input search box and convert to uppercase
        let searchtext=$("#searchText").val().toUpperCase();
        var matches=0;
        //.each function iterates through all elements and  checks if any of the text matches with the input 
       // i-The index position of the element
        $("#towns li").each(function(i,val){
              console.log(i,$(val).text());
                if(val.textContent.toUpperCase().includes(searchtext)){
                  //add the css property to  the matched  element      
                      $(val).css("font-weight","bold") 
                        matches=matches+1;
                }
                else{
                        $(val).css("font-weight","")     
                }
        });
$("#result").text(matches+"matches found");
//remove the enterd text from input field
$("#searchText").val("");

   
}