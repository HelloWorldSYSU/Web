window.onload = function() {
    create_pic();
   	document.getElementById("restart").addEventListener("click", random_pos);
};

/* 产生拼图 */
function create_pic() {
	picture = document.getElementById("picture");
	for (var i = 1; i <= 16; i++) {
		var part = document.createElement("div");
		part.addEventListener("click", pic_move);
		part.className = "picture_part" + " position_"+i;
		picture.appendChild(part);
		part.id = "_position_"+i;
	}
}

/* 产生随机数列，随机换队法 */
function random_pos(event) {
	for (var i = 1; i <= 16; i++) {
		document.getElementById("_position_"+i).className="picture_part"+" position_"+i;
	}
	var part = document.getElementById("picture").childNodes;
	random_arr = [];
	for (var j = 0; j < 15; j++) {
		random_arr[j] = j+1;
	}
	for (var i = 0, len = random_arr.length; i < len; i++) {
  		// 随机选择一个队友
  		var randomIndex = i + Math.floor(Math.random() * (len - i));
  		// 换换，找别人换过的相当于出列了，因此上面的 randomIndex 需要在剩下的人当中挑选
  		var temp = random_arr[i];
  		random_arr[i] = random_arr[randomIndex];
  		random_arr[randomIndex] = temp;
	}
	for (var i = 0; i < 15; i++) {
		part[i].className = "picture_part" + " position_" + random_arr[i];
	}
}

/* 点击图片触发的事件处理器 ,通过判断位置的offset差来判断是否相邻*/
function pic_move(event) {
	var shift = document.getElementById("_position_16");
	var shiftTop = shift.offsetTop;
	var shiftLeft = shift.offsetLeft;
	var shifttop = this.offsetTop;
	var shiftleft = this.offsetLeft;
	/* 判断点击的图片块是否与空格块相邻 */
	if ((Math.abs(shiftTop-shifttop) == 85 && shiftLeft == shiftleft) ||
		(Math.abs(shiftLeft-shiftleft) == 85 && shiftTop == shifttop)) {
		var name = shift.className;
	shift.className = this.className;
	this.className = name;
        check(); // 检查是否还原原图
    }
}

/* 检查是否还原原图 */
function check() {
	for (var i = 1; i <= 16; i++) {
		var item = document.getElementById("_position_"+i);
		if (item.className != "picture_part" + " position_"+ i) {
		return;
	}
}
document.getElementById("result").innerText = "You Win!";
}
