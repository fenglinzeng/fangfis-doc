"use strict";define("modules/addTitle",["jquery"],function(n){return console.log("modules/addTitle"),{title:function(n,o){$("body").prepend('<h2 class="'+n+'">'+o+"</h2>")},copyRight:function(n){$("body").append('<p class="copyright">'+n+"</p>")},append:function(n){$("body").append("<span>"+n+"</span>")}}}),define("entry/entry_demo",["jquery","modules/addTitle"],function(n){console.log("demo_entry");var o=n("modules/addTitle");o.title("pageTitle","\u623f\u5929\u4e0b HTML5 \u89c6\u9891\u64ad\u653e\u5668"),o.copyRight("\u623f\u5929\u4e0b\u524d\u7aef @ 2017"),$("#loadV").on("click",function(){n.async("//static.test.soufunimg.com/common_m/pc_public/fangplayer/build/fangPlayer.js",function(n){window.fangPlayer=new n({debug:!0,holder:"#v",poster:"http://7xih9g.com1.z0.glb.clouddn.com/countdown-clock.png",src:"http://106.38.250.142/xdispatch/7xp6cu.dl1.z0.glb.clouddn.com/360.mp4",type:"html5"})})})});
//# sourceMappingURL=../maps/entry/entry_demo.js.map?_7gslkhj3ubo
