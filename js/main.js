var main_theme = document.getElementById("main_theme");
var main_theme_controler = document.getElementById("main_theme_controler")

function play_main_theme(){
	if(main_theme.paused){
		main_theme_controler.value = "先不要";
		main_theme.play();
	} 
	else {
		main_theme_controler.value = "來去高雄";
		main_theme.pause();
	}
}
