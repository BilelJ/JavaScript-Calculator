	var newEquation = false;//By default, it changes once equal(=) is pressed.
  $(".number").click(function (){
    if (newEquation==true){$('#total').val("");newEquation = false;} //If True, an operation was done before, erase all.
	if ($(this).text()!="." || $("#inprogress").val().lastIndexOf(".")==-1){//Check for a duplicate .
		if ($("#operator").val()==="" ){ //if Operator is empty
		$("#inprogress").val($("#inprogress").val()+$(this).text())//add input to inprogress
		} else  { //add input to total and add the operator, then empty both operator and inprogress
				$('#total').val($('#total').val()+$('#inprogress').val()+$("#operator").val());
				$("#inprogress").val("");
				$("#operator").val("");
				$("#inprogress").val($("#inprogress").val()+$(this).text())

			}
	}
});

$(".operator").click(function (){
  if (newEquation==true){newEquation=false;}/*If true and an Operator is clicked, then the user
                                            wants to continue from previous equation
                                            ===> then it's not a new equation*/
if (  $('#total').val()===""	&& $('#inprogress').val()===""	){ //if an operator is clicked but no number was input
	$('#total').val($('#total').val()+"0");                        //then take 0 as default
}
if ($('#inprogress').val()!=="-"){ //cannot proceed if only "-" was input by user
		    if ($('#inprogress').val()[0]=="-"){//if number is negative(-), add ()
        $('#inprogress').val("("+$('#inprogress').val()+")"); 
        }
		$('#total').val($('#total').val()+$('#inprogress').val());//add user input to total
		$('#inprogress').val("");
    $("#operator").val($(this).text())
}
});

$('#pn').click(function(){
	if ($('#operator').val()!==""	){ //if Operator is empty
	$('#total').val($('#total').val()+$('#operator').val() );//add input to total and add the operator
	$('#operator').val("");                                  //Then empty operator
	}
	if ($('#inprogress').val()[0] !== "-"){ //if input is not negative, add "-"
	$('#inprogress').val("-"+$('#inprogress').val());
	}else{$('#inprogress').val($('#inprogress').val().replace("-","")); //if negative, delete the "-".
		}
});

$('#c').click(function(){//Clear all inputs
	$('#total').val("");
	$('#operator').val("");
	$('#inprogress').val("");
});

$('#ce').click(function(){//Clear only inprogress
	$('#inprogress').val("");
});

$('#del').click(function(){//Delete last digit from input
		var del = $('#inprogress').val().length-1;
		$('#inprogress').val(   $('#inprogress').val().substr(0,del)   );
});

$('.equal').click(function(){
  if ($('#inprogress').val()[0]=="-"){//if last input from user is negative(-), add ()
    $('#inprogress').val("("+$('#inprogress').val()+")"); 
  }	
	$('#total').val($('#total').val()+$('#inprogress').val());
	$('#inprogress').val("");
	var total = "var abc=" + $('#total').val();
	$.globalEval(total);
	$('#total').val( abc);
  newEquation = true;
  if (isNaN($('#total').val())) {
    $('#total').val("Error!");
  }
});
//Keyboard activator
$(document).keydown(function(e) {
    if(e.which == 13) {
       $('#equal').click();
    }
    if(e.which == 97) {
       $('#one').click();
    }
    if(e.which == 98) {
       $('#two').click();
    }
    if(e.which == 99) {
       $('#three').click();
    }
    if(e.which == 100) {
       $('#four').click();
    }
    if(e.which == 101) {
       $('#five').click();
    }
    if(e.which == 102) {
       $('#six').click();
    }
    if(e.which == 103) {
       $('#seven').click();
    }
    if(e.which == 104) {
       $('#eight').click();
    }
    if(e.which == 105) {
       $('#nine').click();
    }
    if(e.which == 111) {
       $('#divide').click();
    }
    if(e.which == 106) {
       $('#multiply').click();
    }
    if(e.which == 109) {
       $('#minus').click();
    }
    if(e.which == 107) {
       $('#plus').click();
    }
    if(e.which == 110) {
       $('#dot').click();
    }
    if(e.which == 8) {
       $('#del').click();
    }
    if(e.which == 67) {
       $('#c').click();
    }


});
