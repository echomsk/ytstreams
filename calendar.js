var goodDates = ['10/01/2020','10/06/2020','08/23/2020','10/10/2020','10/09/2020','10/08/2020','10/07/2020','10/06/2020','10/05/2020','10/04/2020','10/03/2020','10/02/2020','10/01/2020','10/01/2020','10/10/2020','10/11/2020','10/19/2020','10/19/2020','10/19/2020','10/19/2020','10/19/2020','10/24/2020','10/29/2020','10/29/2020','10/29/2020','10/29/2020','10/30/2020','10/31/2020','11/01/2020','11/02/2020','11/03/2020','11/04/2020','11/05/2020','11/06/2020','11/07/2020','11/08/2020','11/09/2020','11/10/2020','11/11/2020','11/12/2020','11/13/2020','11/14/2020','11/15/2020','11/16/2020','11/17/2020','11/18/2020','11/19/2020','11/20/2020','11/21/2020','11/22/2020','11/23/2020','11/24/2020','11/25/2020','11/26/2020','11/27/2020','11/28/2020','11/29/2020','11/30/2020','12/01/2020','12/02/2020','12/03/2020','12/04/2020','12/05/2020','12/06/2020','12/07/2020','12/08/2020','12/09/2020','12/10/2020','12/11/2020','12/12/2020','12/13/2020','12/14/2020','12/15/2020','12/16/2020','12/17/2020','12/18/2020','12/19/2020'];

function formatDate(d){
  var date_ =d.split("/");
  var tmpDate = date_[2]+"-"+date_[0]+"-"+date_[1];
  return tmpDate
}

plot(formatDate(goodDates[goodDates.length-1]));

// datepicker
$('#datepicker').datepicker({
    beforeShowDay: function( date ) {
        var highlight = eventDates[date];
        if( highlight ) {
             return [true, "event", 'Tooltip text'];
        } else {
             return [true, '', ''];
        }
    }
});

$("#datepicker")
.datepicker({
    onSelect: function(dateText) {
        console.log("Selected date: " + dateText + "; input's current value: " + this.value);
    }
})
.on("change", function() {
    console.log("Got change event from field");
});


$( function() {
    // An array of dates
    var eventDates = {};
    for(var i=0;i<goodDates.length;i++){
      eventDates[ new Date( goodDates[i] )] = new Date( goodDates[i] );
    }
    
    // datepicker
    $('#datepicker').datepicker({
        beforeShowDay: function( date ) {
            var highlight = eventDates[date];
            if( highlight ) {
                 return [true, "event", 'Tooltip text'];
            } else {
                 return [true, '', ''];
            }
        }
    }).on("change", function() {
		var selectedDate = this.value;
		console.log(selectedDate,goodDates,selectedDate in goodDates);
		if(goodDates.includes(selectedDate)){
		document.getElementById('invalid').innerHTML = 'Wait for it to load..';
		  plot(formatDate(selectedDate));
		}else{
		document.getElementById('invalid').innerHTML = formatDate(selectedDate) + ' is not valid. pick one from … '+goodDates;
		}
  });
});
