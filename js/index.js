/*$(document).ready(function(){
	if ($('#alo').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTrigger2 = 600
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger && scrollTop < scrollTrigger2) {
					$('#alo').addClass('show');
				} else {
					$('#alo').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
});
*/
$(document).ready(function(){
	$(window).scroll(function() {
		$(".slideanim").each(function(){
		  var pos = $(this).offset().top;

		  var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
			  $(this).addClass("slide");
			}
		});
	});
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
});

$(document).ready(function(){
    $('#overlay').delay(5000).fadeOut('fast');
    $('.miguel').delay(5000).fadeOut('fast');
    $('body').fadeIn('slow');
});

$(document).ready(function(){
		$('.coluna2').click(function()
	{
		$('svg').addClass('ativo');
		var $svg = $('svg').drawsvg({
			duration: 3e3, callback: function() {
				$('svg').removeClass('ativo');
				}
		});
	$svg.drawsvg('animate');
	}).hover(function()
	{

	});
});
