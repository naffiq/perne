// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var mistake = 0; var progress = 0; var seconds = 0; var start = false; var pause = false;

$(document).ready(function() {
	// var karaSoz = "Бұл жасқа келгенше жақсы өткіздік пе, жаман өткіздік пе, әйтеуір бірталай өмірімізді өткіздік: алыстық, жұлыстық, айтыстық, тартыстық - әурешілікті көре-көре келдік. Енді жер ортасы жасқа келдік: қажыдық, жалықтық; қылып жүрген ісіміздің баянсызын, байлаусызын көрдік, бәрі қоршылық екенін білдік. Ал, енді қалған өмірімізді қайтіп, не қылып өткіземіз? Соны таба алмай өзім де қайранмын. Ел бағу? Жоқ, елге бағым жоқ. Бағусыз дертке ұшырайын деген кісі бақпаса, не албыртқан, көңілі басылмаған жастар бағамын демесе, бізді құдай сақтасын! Мал бағу? Жоқ, баға алмаймын. Балалар өздеріне керегінше өздері бағар. Енді қартайғанда қызығын өзің түгел көре алмайтұғын, ұры, залым, тілемсектердің азығын бағып беремін деп, қалған аз ғана өмірімді қор қылар жайым жоқ. Ғылым бағу? Жоқ, ғылым бағарға да ғылым сөзін сөйлесер адам жоқ. Білгеніңді кімге үйретерсің, білмегеніңді кімнен сұрарсың? Елсіз-күнсізде кездемені жайып салып, қолына кезін алып отырғанның не пайдасы бар? Мұңдасып шер тарқатысар кісі болмаған соң, ғылым өзі - бір тез қартайтатұғын күйік. Софылық қылып, дін бағу? Жоқ, ол да болмайды, оған да тыныштық керек. Не көңілде, не көрген күніңде бір тыныштық жоқ, осы елге, осы жерде не қылған софылық? Балаларды бағу? Жоқ, баға алмаймын. Бағар едім, қалайша бағудың мәнісін де білмеймін, не болсын деп бағам, қай елге қосайын, қай харекетке қосайын? Балаларымның өзіне ілгері өмірінің, білімінің пайдасын тыныштықпенен керерлік орын тапқаным жоқ, қайда бар, не қыл дерімді біле алмай отырмын, не бол деп бағам? Оны да ермек қыла алмадым. Ақыры ойладым: осы ойыма келген нәрселерді қағазға жаза берейін, ақ қағаз бен қара сияны ермек қылайын, кімде-кім ішінен керекті сөз тапса, жазып алсын, я оқысын, керегі жоқ десе, өз сөзім өзімдікі дедім де, ақыры осыған байладым, енді мұнан басқа ешбір жұмысым жоқ."; 
	$('.untyped').text($('.untyped').text().replace(/(\r\n|\n|\r)/gm,""));
	$('.untyped').width($('.untyped').text().length * 25);

	$(document).keypress(function(event){
		typedChar = String.fromCharCode(event.which);
		toTypeChar = $('.untyped').text().charAt(0);
		isSpace = 0;

		if (!start) {
			setInterval(function() {
				if (!pause) {seconds++;};
				$('#time').text(seconds);
			}, 1000);
			start = true;
		};

		if (typedChar == toTypeChar) {
			$('.typed').text($('.typed').text() + toTypeChar);
			$('.untyped').text($('.untyped').text().substring(1));
			progress++;
		} else { mistake++; }
		$('.untyped').css({'left' : ($('.untyped').text().charAt(0) == ' ')?'325px':'310px'});
		$('.typed').width($('.typed').text().length * 25);
		if ($('.typed').text().slice(-1) == ' ') { isSpace = 15; };
		$('.typed').css({'left' : 310 - $('.typed').width() - isSpace});

		refreshStats();
		if ($('.untyped').text().length == 0 && !pause) {
			alert('Жарайсыз!'); pause = true;
		};
	});

	
});

function refreshStats() {
	$('#mistake').text(mistake);
	$('#time').text(seconds);
	ratio = progress / seconds;
	$('#ratio').text((ratio.toFixed(2) != 'Infinity')?ratio.toFixed(2):progress);
}