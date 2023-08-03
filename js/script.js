$(document).ready(function(){
    // alert
    $('#btn').on("click",function(){
        alert("hello world");
    });
    // fade on
    $('#f_sp').on( "click", function() {
    $( "div:hidden" ).first().fadeIn( "slow" );
    } );
    // cansored
    $('#ca').on( "click", function() {
        $('#cdiv').fadeIn( 3000, function() {
            $('#sn').fadeIn( 100 );
        });
        return false;
    });
    // hover
    $('#hp').on( "click", function() {
      $( this ).slideUp();
    } );
    // run
    $('#rbtn').on( "click", function() {
        $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
        $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
    });
    $( "body" ).delegate('#anp' , "click", function() {
        $( this ).after( "<p>Another paragraph!</p>" );
    });
    // hi there
    $( "body" ).delegate('#hip' , "myCustomEvent", function( e, myName, myValue ) {
        $( this ).text( "Hi there!" );
        $('#hspn')
        .stop()
        .css( "opacity", 1 )
        .text( "myName = " + myName )
        .fadeIn( 30 )
        .fadeOut( 1000 );
    });
    $('#hbtn').on( "click", function() {
      $('#hip').trigger( "myCustomEvent" );
    });
    // how are you
    $( "p" ).on( "click", function() {
        $( this ).toggleClass( "off" );
    });
    var p;
    $('#how').on( "click", function() {
        if ( p ) {
            p.appendTo( "body" );
            p = null;
        } else {
            p = $('#howp').detach();
        }
    });
    // empty
    $('#emb').on( "click", function() {
        $('#emp').empty();
    } );
    // display
    $('#dis').on( "click", function( event ) {
        return "hey";
    });
    $('#dis').on( "click", function( event ) {
      $('#dip').html( event.result );
    });
    // eventdis
    var last, diff;
    $('#esd').on( "click", function( event ) {
      if ( last ) {
        diff = event.timeStamp - last;
        $('#esd').append( "time since last event: " + diff + "<br>" );
      } else {
        $('#esd').append( "Click again.<br>" );
      }
      last = event.timeStamp;
    });
    // file focus
    $('#fc').on( "focus", function() {
      $( this ).next('#fspn').css( "display", "inline" ).fadeOut( 1000 );
    } );
    // blur focus
    var focusout = 0,
      blur = 0;
    $('#blp')
      .on( "focusout", function() {
        focusout++;
        $( "#focus-count" ).text( "focusout fired: " + focusout + "x" );
      } )
      .on( "blur", function() {
        blur++;
        $( "#blur-count" ).text( "blur fired: " + blur + "x" );
    } );
    // tag name
    $( "*", document.body ).on( "click", function( event ) {
      event.stopPropagation();
      var domElement = $( this ).get( 0 );
      $('#tns').first().text( "Clicked on - " + domElement.nodeName );
    });













});