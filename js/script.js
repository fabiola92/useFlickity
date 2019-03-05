
//Mustache

var templateCarousel = document.getElementById("carousel-template").innerHTML;
var carousel = document.querySelector(".main-carousel");
var carouselElements = "";

for ( var i = 0; i < slideData.length; i++) {
  carouselElements += Mustache.render(templateCarousel, slideData[i]);
}

carousel.innerHTML = carouselElements;


//Use Flickity

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  pageDots: false,
  hash: true
});
//Progress Bar + Restart Button
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

// Google Map
(function() {
  window.initMap = function() {

    var mapLocation = slideData[0].coords;

    // Map zoom and center
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: mapLocation
    });

    var markers = [];
    for ( var i = 0; i < slideData.length; i++ ) {
      markers.push(new google.maps.Marker({
        position: slideData[i].coords,
        map: map,
        id: i
      }))
      markers[i].addListener("click", function() {
        flkty.select(this.id)
      });

      // Change map position after slide change
      flkty.on("change", function(index) {
        map.panTo(slideData[index].coords);
        map.setZoom(12);
      });
    }
  };
})();