var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  pageDots: false,
  hash: true
  flkty.next();
  flkty.select( 3 );
});

flkty.on( 'scroll', function( progress ) {3});

//restart
var restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', function( event ) {
  console.log('klik')
  flkty.next();
});


//progress bar
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});