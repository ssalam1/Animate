$(document).ready(function(){
	doAnim($('.js--animations').val());
	$('.js--triggerAnimation').click(function(select){
			select.preventDefault();      // To prevent the default action i.e selecting the option
			  var anim = $('.js--animations').val();
			  doAnim(anim);
			});

		$('.js--animations').change(function(){
			  var anim = $(this).val();
			  doAnim(anim);
			});
});
function doAnim(animVal) {
	$('#animationSandbox').removeClass().addClass(animVal + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	  $(this).removeClass();
});
};
