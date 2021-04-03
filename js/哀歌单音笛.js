
toast("笛子模式：音量上停止；音量下暂停、继续");
function zt(){if (s != 1) {s = 1; toast('继续播放')}else{s = 0;toast('已暂停')}};
threads.start(function(){events.observeKey();events.onKeyDown("volume_up",function(event){toast("停止");engines.myEngine().forceStop()});
events.onKeyDown("volume_down",function(event){zt()});});
function g(ids, c) {while (s != 1) { sleep(100)};
if (c == undefined) {c = 1};if (!isNaN(ids)) {ids = [ids]};let cz = "gestures(";
for (var i = 0; i < ids.length; i++) {let id = ids[i];let zb = [xy[id * 2 - 2], xy[id * 2 - 1]];cz += "[" + c + ",[" + zb + "],[" + zb + "]],";};
cz = cz.slice(0,cz.length-1) + ")";eval(cz)}
var t1=335;var t2=168;var t3=670;var t4=100;
var s=1;var xy = [];var zuobiaoPath="/sdcard/脚本/zuobiao21.txt";
if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));//快速适配分辨率
} else {
    setScreenMetrics(1080, 2340); //默认分辨率，以下按键位置基于此分辨率
    var x = [410, 680, 950, 1220, 1490, 1760, 2030];
    var y = [980, 870, 760];
    for(var i = 0; i < 21; i++) {xy.push(x[i % 7], y[parseInt(i / 7)])}
};
function ran(){return Math.random()*20-10};
function pre(id,c){while (s != 1) {sleep(100)};if(c==undefined){c=1};press(xy[id*2-2]+ran(),xy[id*2-1]+ran(),c)}
function c4(t) {pre(1,t)};function d4(t) {pre(2,t)};function e4(t) {pre(3,t)};
function f4(t) {pre(4,t)};function g4(t) {pre(5,t)};function a4(t) {pre(6,t)};
function b4(t) {pre(7,t)};function c5(t) {pre(8,t)};function d5(t) {pre(9,t)};
function e5(t) {pre(10,t)};function f5(t) {pre(11,t)};function g5(t) {pre(12,t)};
function a5(t) {pre(13,t)};function b5(t) {pre(14,t)};function c6(t) {pre(15,t)};
function d6(t) {pre(16,t)};function e6(t) {pre(17,t)};function f6(t) {pre(18,t)};
function g6(t) {pre(19,t)};function a6(t) {pre(20,t)};function b6(t) {pre(21,t)};
b5(670);e6(670);d6(670);a5(670);e6(670);c6(670);a5(670+670);b5(670+670+670+670+670+670+670+670);sleep(1340);e6(670);d6(670);e6(670+670+670);e5(670);b5(670);a5(670);c6(670+670+670);e5(670);b5(670);a5(670);c6(670+670);a5(335);b5(335);c6(335);d6(335);e6(670+670+670);d6(335);e6(335);g6(670+670+670);f6(335);d6(335);e6(670+670+670);d6(335);e6(335);g6(670+670+670);f6(335);d6(335);e6(670);d6(335);c6(335);a5(670+670);sleep(168);a5(670);g5(335);a5(335);b5(670);a5(335);g5(335);e5(670+670);d5(670+670);c5(670+670);a5(335);b5(335);c6(335);d6(335);e6(670+670+670);d6(335);e6(335);g6(670+670+670);f6(335);d6(335);e6(670+670+670);d6(335);e6(335);g6(670+670+670);f6(335);d6(335);e6(670);d6(335);c6(335);a5(670+670+670);g5(335);a5(335);b5(670);a5(335);g5(335);d5(670+670+670+670);c5(670+670+670+670);sleep(1340);e6(670+670+670+670);d6(670);c6(670);b5(670+670+670);g5(670);e5(670+670+670+670);sleep(1340);e6(670+670+670+670);d6(670);c6(670);b5(670+670+670+670+670);sleep(168);b5(670);c6(670);d6(670);e6(670+670+670+670+670+670);d6(670);c6(670);b5(670+670+670);g5(670);e5(670+670);f5(670);g5(670);a5(670+670+670+670+670+670);b5(670);c6(670);b5(670+670+670+670+670+670+670+670);e6(670+670);d6(670);c6(670);a5(670+670+670+670);


exit();