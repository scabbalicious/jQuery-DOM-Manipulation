$(document).ready(function() {
	var carouselImages = [
  
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
    title: 'Sunset in the Cascades',
    photographer_id: 'smpoutdoors'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
    title: 'Seljalandsfoss, Iceland',
    photographer_id: 'Robin Kamp'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
    title: 'Gods Rays',
    photographer_id: 'illuminati'
  }
];

var html = carouselImages.map(image => {
  return `
  <div class="slide-in">
  <span class="author">"${image.title}" by <span>${image.photographer_id}</span></span>
  </div>
  `
})

	$('.header').on('click', function() {
		$('.words').removeClass('active')
		$(this).find('+ .words').addClass('active')
	})
	
	})


	$('.next').on('click', function(){
		var currentImg = $('.visible')
		var nextImg = currentImg.next()

		if (nextImg.length) {
			currentImg.removeClass('visible')
			nextImg.addClass('visible')

		}
	})
	$('.prev').on('click', function(){
		var currentImg = $('.visible')
		var prevImg = currentImg.prev()

		if (prevImg.length) {
			currentImg.removeClass('visible')
			prevImg.addClass('visible')

		}
	})