var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});


var flkty = new Flickity( '.main-carousel', {
  hash: true,
});


flkty.on( 'scroll', function( progress ) {3});


