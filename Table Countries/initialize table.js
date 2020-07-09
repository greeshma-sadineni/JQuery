function initializeTable(){
        $('#createLink').on( 'click',createCountry);
        function createCountry(){
                let country=$('#newCountryText').val();
                let capital=$('#newCapitalText').val();
                addCountry(country,capital,true);
                $('#newCountryText').val("");
                $('#newCapitalText').val("");
                fixedRowlinks();

        }
        function addCountry(country,capital) {
                let tr=$('<tr>')
                .append($('<td>').text(country))
                .append($('<td>').text(capital))
                .append($('<a href="#" >[Up]</a>').click(moveup))
                .append($('<a href="#" >[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow));
               tr.css("background","#ddd");
               $('#countriesTable').append(tr);


        }
        function deleteRow(){
                let row=$(this).parent();
               row.remove();
               fixedRowlinks();
        }
        function moveup(){
                let row=$(this).parent();
                row.insertBefore(row.prev());
                fixedRowlinks();
                      
        }
        function moveDown(){
                //get current row of the table
                let row=$(this).parent();
                row.insertAfter(row.next());
                fixedRowlinks();     
        }
           
                                 
      function fixedRowlinks(){
              $('#countriesTable a').css('display','inline');
              // Hide the [up] link in the last row 
             let tableRows = $('#countriesTable tr');
              $(tableRows[2]).find("a:contains('Up')")
                      .css('display', 'none');
       
              // Hide the [Down] link in the last row 
              $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
                      .css('display', 'none');
           //   $('countriesTable tr:nth-child(3) td a:contains("UP")').css('display','none');
              //$('countriesTable tr:last-child td a:contains("Down")').css('display','none');
      }
}