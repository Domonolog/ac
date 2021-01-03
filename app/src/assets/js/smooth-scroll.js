jQuery( $ => {
  const
    $header = $( '#sticky-header' ),
    fix = 18,
    mediaBreakPoint = 992;

  $( window ).on( 'load', function() {
    setTimeout( function() {
      if ( location.hash ) {
        window.scrollTo( 0, 0 );
        maybeScrollTo( location.hash );
      }
    }, 1 );
  } );
} );
