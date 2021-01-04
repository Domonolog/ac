jQuery( $ => {
  let runMaybeNeedClick = false;

  const
    $header = $( '#sticky-header' ),
    fix = 100,
    mediaBreakPoint = 992;

  $( document ).on(
    'click',
    'a[href*="#"]:not([href="#"]):not([href*="popup"]):not(.popup-link)',
    function( e ) {
      if ( $( this ).parent().hasClass( 'popup-link' ) ) {
        return;
      }

      if (
        location.pathname.replace( /^\//, '' ) === this.pathname.replace( /^\//, '' ) &&
        location.hostname === this.hostname
      ) {
        scrollTo( this.hash, e );
      }
    }
  );

  function maybeNeedClick( id, link ) {
    let $links = $( '[href="#' + id + '"]' );
    if ( link ) {
      $links = $links.not( link );
    }

    if ( $links.length ) {
      runMaybeNeedClick = true;
      $links.eq( 0 ).trigger( 'click' );
    }
  }

  function scrollTo( hashOrIdOrName, event ) {
    if ( runMaybeNeedClick ) {
      runMaybeNeedClick = false;
      return;
    }

    if ( hashOrIdOrName.startsWith( '#' ) ) {
      hashOrIdOrName = hashOrIdOrName.slice( 1 );
    }

    maybeNeedClick( hashOrIdOrName, event && event.target );

    let $target = $( '#' + hashOrIdOrName );
    if ( 0 === $target.length ) {
      $target = $( '[name=' + hashOrIdOrName + ']' );
    }

    if ( $target.length ) {
      const offset = $target.offset().top - fix;
      let top = offset;

      if ( $( window ).width() > mediaBreakPoint ) {
        top = offset - $header.outerHeight();
      }

      $( 'html,body' ).animate( { scrollTop: top }, 1000, function() {
        if ( $( window ).width() > mediaBreakPoint ) {
          $( 'html,body' ).animate( { scrollTop: offset - $header.outerHeight() }, 100 );
        }
      } );
    }

    if ( event ) {
      event.preventDefault();
    }
  }
} );
