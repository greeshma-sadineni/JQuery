function extractText() {
  //Get elements from the html tag li
 var listItems=$("#items li");
 console.log(listItems.length);
 alert('hi');
 $("#result").text("");
 //.each function iterates through over a jQuery object
 $.each(listItems,function(i,val){
   console.log(val);
  if(i!=0){
     $("#result").append(",");
   }
   //return all the items 
$("#result").append($(val).text());
 });

}
