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

  $( document ).on(
    'click',
    'a[href*="#"]:not([href="#"]):not([href*="popup"]):not(.popup-link)',
    function( e, runMaybeNeedClick ) {
      if ( $( this ).parent().hasClass( 'popup-link' ) ) {
        return;
      }

      if (
        location.pathname.replace( /^\//, '' ) === this.pathname.replace( /^\//, '' ) &&
        location.hostname === this.hostname
      ) {
        if ( e ) {
          e.preventDefault();
        }

        maybeScrollTo( this.hash, e, runMaybeNeedClick );
      }
    }
  );
} );
