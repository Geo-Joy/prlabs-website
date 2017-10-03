$(document).ready(function(){	
	clearInterval(myTimer_product);
    var myTimer_product = setInterval(loop_product, 4000);
	$(".pr-prhide").hide();
    $("#pr-prd1").show();
    $('#pr-icon1').addClass( "fa-dot-circle-o" );

    //sync
    clearInterval(myTimer_sync);
    var myTimer_sync = setInterval(loop_sync, 4000);
    $(".prhide-sync").hide();
    $("#prd-sync1").show();
    $('#icon-sync1').addClass( "fa-dot-circle-o" );
    //sync
    //burrow
    clearInterval(myTimer_burrow);
    var myTimer_burrow = setInterval(loop_burrow, 4000);
    $(".prhide-burrow").hide();
    $("#prd-burrow1").show();
    $('#icon-burrow1').addClass( "fa-dot-circle-o" );
    //burrow

    // faith
    clearInterval(myTimer_faith);
    var myTimer_faith = setInterval(loop_faith, 4000);
    $(".prhide-faith").hide();
    $("#prd-faith1").show();
    $('#icon-faith1').addClass( "fa-dot-circle-o" );
    // faith


});




var count_product =1;
function loop_product(){
    $("#pr-prd"+count_product).show().siblings(".pr-prhide").hide();
    $(".fa1" ).removeClass( "fa-dot-circle-o" );
    $("#pr-icon"+count_product).addClass( "fa-dot-circle-o" );
	if(count_product == 4){
		count_product = 1;
	}else{count_product ++;}
}


//sync
	var count_sync =1;
    function loop_sync(){
        $("#prd-sync"+count_sync).show().siblings(".prhide-sync").hide();
        $(".fa-sync" ).removeClass( "fa-dot-circle-o" );
        $("#icon-sync"+count_sync).addClass( "fa-dot-circle-o" );
        if(count_sync == 4){
            count_sync = 1;
        }else{count_sync ++;}
    }
//sync

//burrow

    var count_burrow =1;
    function loop_burrow(){
        $("#prd-burrow"+count_burrow).show().siblings(".prhide-burrow").hide();
        $(".fa-burrow" ).removeClass( "fa-dot-circle-o" );
        $("#icon-burrow"+count_burrow).addClass( "fa-dot-circle-o" );
        if(count_burrow == 6){
            count_burrow = 1;
        }else{count_burrow ++;}
    }
//burrow

// faith
    var count_faith =1;
    function loop_faith(){
        $("#prd-faith"+count_faith).show().siblings(".prhide-faith").hide();
        $(".fa-faith" ).removeClass( "fa-dot-circle-o" );
        $("#icon-faith"+count_faith).addClass( "fa-dot-circle-o" );
        if(count_faith == 5){
            count_faith = 1;
        }else{count_faith ++;}
    }

// faith