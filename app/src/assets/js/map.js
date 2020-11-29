global.initMap = () => {
  jQuery( '.map-canvas' ).each( ( index, element ) => {
    let map          = jQuery( element );
    const position   = new google.maps.LatLng(
      map.data( 'latitude' ),
      map.data( 'longitude' )
    );
    const markerIcon = map.data( 'icon' );
    const mapZoom    = map.data( 'zoom' );

    map = new google.maps.Map( element, {
      zoom: mapZoom || 17,
      center: position,
      disableDefaultUI: true
    } );

    new google.maps.Marker( {
      position,
      map,
      icon: markerIcon || ''
    } );
  } );
};
