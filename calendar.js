var goodDates = ['10/01/2020','10/06/2020','08/23/2020','10/10/2020','10/09/2020','10/08/2020','10/07/2020','10/06/2020','10/05/2020','10/04/2020','10/03/2020','10/02/2020','10/01/2020'];

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
		  var date_ =selectedDate.split("/");
		  var tmpDate = date_[2]+"-"+date_[0]+"-"+date_[1];
		  console.log(tmpDate);
		  plot(tmpDate);
		}
  });
});
