// 不能用 window.onload 页面准备完再执行
document.addEventListener("keydown",function(e) {
  // 如果是mac，ctrl变为花键
  var ck = navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey;

 /*
  if(!(ck && e.keyCode == 86) || !(e.keyCode == 8) || !(e.keyCode == 46) ){ // 屏蔽所有键，除了 ctrl+v、 backspace、delete
    return e.preventDefault();
  }
 */

  if (e.keyCode == 123){ // 屏蔽 F12
    e.preventDefault();
  }
  else if (ck && e.keyCode == 83) { // 屏蔽保存 Ctrl+s
    e.preventDefault();
  }
  else if ((ck && e.keyCode == 67)) { // 屏蔽保存 Ctrl+c
    e.preventDefault();
  }
  else if ((ck && e.keyCode == 80)) { // 屏蔽保存 Ctrl+p
    e.preventDefault();
  }
  else if ((ck) && (e.shiftKey) && (e.keyCode == 73)){ // 屏蔽 Ctrl+Shift+I
    e.preventDefault();
  }
  else if ((ck) && (e.keyCode == 85)){ // 屏蔽 Ctrl+u
    e.preventDefault();
  }
  else if ((ck && e.shiftKey) || (ck && e.altKey) || (e.shiftKey && e.altKey)){ // 屏蔽 Ctrl+shift, Ctrl+alt, shift+alt
    e.preventDefault();
  }
  else if ((e.shiftKey) && (e.keyCode == 121)){  // 屏蔽 Shift+F10
    e.preventDefault();
  }

}, false);

// 屏蔽右键单击
document.oncontextmenu = function() {
  return false;
};

/*
// 屏蔽复制
document.body.oncopy = function (evt){
  return evt.preventDefault();
};
document.body.onpaste = function(){
  return true;
};
// 不建议连选中文本都不行
document.onselectstart = function(evt){
   evt.preventDefault();
};
*/
