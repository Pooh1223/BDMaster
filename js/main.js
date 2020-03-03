var main_theme = document.getElementById("main_theme");
var main_theme_controler = document.getElementById("main_theme_controler")

const keyArray = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5',
'Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','KeyQ','KeyW',
'KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft',
'BracketRight','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL',
'Semicolon','Quote','Enter','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN',
'KeyM','Comma','Period','Slash','Space'];

const SEArray = ['AAAAAAAA','Death is like the wind always by my side亞索開滑','Double Kill',
'FirstBlood','Gank 啊哈','gank鬼叫','GG','HAKAYO',
'Hasaki吹起來聊天室滑起來滑起來','shutdown','又carry了一場媽的',
'又死一次','又贏了爽阿','乞丐大劍','巨錘瑞斯','地版很滑的阿',
'有囉這波有囉','老爸墮起來','你好爛喔','你到底在齁齁齁齁','抓到你囉還敢他媽藍開嘿嘿嘿嘿',
'犽宿第二勝到手哈哈','叔叔開墮囉','拉拉拉拉拉拉拉拉拉拉拉拉','咻',
'哈哈哈又要死囉','度度度','為什麼不幫我發大絕極靈','哼歌','鬼叫',
'爽啦滑哥','聊天室滑起來通通給我滑起來','這什麼到底什麼閃現齁齁齁齁齁',
'給酷','給酷哈哈哈','幹他媽再ban我犽宿阿操','滑!起!來!通通給我滑起來!滑起來!',
'滑滑滑滑滑起來','滑滑滑滑滑起來通通給我滑起來','誇爪哈哈哈哈','赫赫赫赫赫赫',
'墮','墮胎叔叔','模仿犽宿效果音','嬰兒','還敢下來阿冰鳥','轟','魔性笑聲']

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

function play_SE(id){
	if(id >= 48) alert('Error!\n');

	var se = document.createElement('audio');
	se.src = './res/music/' + SEArray[id] + '.mp3';
	se.type = 'audio/mpeg';
	se.autoplay = 'autoplay'
	document.getElementById('line_2').appendChild(se);
}

window.addEventListener('keydown',function(key){
	//console.log(keyArray.indexOf(key.code));
	var se = document.createElement('audio');
	se.src = './res/music/' + SEArray[keyArray.indexOf(key.code)] + '.mp3';
	se.type = 'audio/mpeg';
	se.autoplay = 'autoplay'
	document.getElementById('line_2').appendChild(se);
},false);