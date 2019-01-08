var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  pageDots: false,
  hash: true
});
var progressBar = document.querySelector('.progress-bar');
var restartButton = document.querySelector('#restart-button');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

restartButton.addEventListener('click', function( event ) {
  console.log('klik');
  flkty.select( 0 );
});