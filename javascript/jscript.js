// Start nICE Select
  $(document).ready(function() {
    $('select').niceSelect();
       });
// End nICE Select

// Start Date Picker
$(".datepic").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
// End Date Picker

// Start Pre loader
$(document).ready(function() {
  $(".preloader").delay(2000).fadeOut('slow');
});

var waitting = "<h1>Please Wait..</h1>";
document.getElementById("vs").innerHTML = waitting;
// End Pre loader


var egyptcur = "جنيه مصري";
document.getElementById("wos").innerHTML = egyptcur;


$('select').niceSelect();
$('#datetimepicker11,#datetimepicker1').datetimepicker({
    daysOfWeekDisabled: [0, 6]
});
