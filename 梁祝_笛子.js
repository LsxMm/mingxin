var t1=250;var t2=125;var t3=500;var t4=100;
var s=1;var zuobiaoPath="/sdcard/脚本/zuobiao21.txt";
if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));//快速适配分辨率
} else {
    setScreenMetrics(1080, 2340); //默认分辨率，以下按键位置基于此分辨率
    var x = [410, 680, 950, 1220, 1490, 1760, 2030];
    var y = [980, 870, 760];
    var xy = [];for(var i = 0; i < 21; i++) {xy.push(x[i % 7], y[parseInt(i / 7)])}
}
function ran(){return Math.random()*20-10}
function pre(id,c){while (s != 1) {sleep(100)};if(c==undefined){c=1};press(xy[id*2-2]+ran(),xy[id*2-1]+ran(),c)}
function c4(t) {pre(1,t)};function d4(t) {pre(2,t)};function e4(t) {pre(3,t)};
function f4(t) {pre(4,t)};function g4(t) {pre(5,t)};function a4(t) {pre(6,t)};
function b4(t) {pre(7,t)};function c5(t) {pre(8,t)};function d5(t) {pre(9,t)};
function e5(t) {pre(10,t)};function f5(t) {pre(11,t)};function g5(t) {pre(12,t)};
function a5(t) {pre(13,t)};function b5(t) {pre(14,t)};function c6(t) {pre(15,t)};
function d6(t) {pre(16,t)};function e6(t) {pre(17,t)};function f6(t) {pre(18,t)};
function g6(t) {pre(19,t)};function a6(t) {pre(20,t)};function b6(t) {pre(21,t)};
function zt(){if (s != 1) {s = 1; toast('继续播放')}else{s = 0;toast('已暂停')}}
threads.start(function(){events.observeKey();events.onKeyDown("volume_up",function(event){toast("停止");engines.stopAll()});
events.onKeyDown("volume_down",function(event){zt()});});
toast("笛子模式：音量上停止；音量下暂停、继续");
g5(t3);e5(t3);d5(t3);c5(t3+t3+t3+t3);sleep(500);d5(t3);b4(t3);a4(t3);g4(t3+t3+t3+t3);sleep(500);b5(t3);a5(t3);b5(t3);g5(t3+t1);a5(t1);f5(t3);e5(t3);d5(t1);e5(t1);f5(t1);e5(t1);g5(t3+t1);e5(t1);d5(t1);e5(t1);g5(t1);d5(t1);e5(t1);f5(t1);e5(t1);d5(t1);c5(t3+t3+t3);g5(t3);b4(t3);d5(t3);a4(t3);c5(t3);g4(t3+t3+t3);a4(t1);c5(t1);g4(t3+t3+t3+t3);e4(t3+t3);g4(t3+t1);a4(t1);c5(t3+t1);d5(t1);a4(t1);c5(t1);g4(t3);g5(t3+t1);c6(t1);a5(t1);g5(t1);e5(t1);g5(t1);d5(t3+t3+t3+t3);d5(t3);d5(t1);e5(t1);b4(t3);a4(t3);g4(t3+t1);a4(t1);c5(t3);d5(t3);e4(t3);c5(t3);a4(t1);g4(t1);a4(t1);c5(t1);g4(t3+t3+t3+t3);e5(t3+t1);g5(t1);b4(t3);d5(t3);a4(t1);c5(t1);g4(t3+t3+t3);e4(t1+t2);g4(t2);e4(t3);g4(t1+t2);a4(t2);b4(t1);d5(t1);a4(t3+t3+t3);g4(t1);a4(t1);c5(t3+t1);d5(t1);g5(t3);e5(t3);d5(t3);e5(t1);d5(t1);c5(t3);a4(t1);g4(t1);e4(t3+t3);c5(t3+t3);a4(t1+t2);c5(t2);a4(t1);g4(t1);e4(t1);g4(t1);a4(t1);c5(t1);g4(t3+t3+t3);e6(t1);g6(t1);d6(t1);e6(t1);d6(t1);c6(t1);b5(t3);a5(t3);g5(t3+t3+t3);e5(t1);g5(t1);d5(t1);e5(t1);d5(t1);c5(t1);b4(t3);a4(t3);e4(t3+t3);g4(t3+t1);a4(t1);c5(t3+t1);d5(t1);a4(t1);c5(t1);g4(t3);g5(t3+t1);c6(t1);a5(t1);g5(t1);e5(t1);g5(t1);d5(t3+t3+t3+t3);d5(t3);d5(t1);e5(t1);b4(t3);a4(t3);g4(t3+t1);a4(t1);c5(t3);d5(t3);e4(t3);c5(t3);a4(t1);g4(t1);a4(t1);c5(t1);g4(t3+t3+t3+t3);e5(t3+t1);g5(t1);b4(t3);d5(t3);a4(t1);c5(t1);g4(t3+t3+t3);e4(t1+t2);g4(t2);e4(t3);g4(t1+t2);a4(t2);b4(t1);d5(t1);a4(t3+t3+t3);g4(t1);a4(t1);c5(t3+t1);d5(t1);g5(t3);e5(t3);d5(t3);e5(t1);d5(t1);c5(t3);a4(t1);g4(t1);e4(t3+t3);c5(t3+t3);a4(t1+t2);c5(t2);a4(t1);g4(t1);e4(t1);g4(t1);a4(t1);c5(t1);g4(t3);g5(t3+t3);a5(t1);c6(t1);g5(t3+t3+t3+t3);g5(t3);a5(t1);c6(t1);a5(t1);g5(t1);e5(t3);d5(t3+t1);e5(t1);g5(t3);e5(t3);d5(t1+t2);e5(t2);g5(t1);c6(t1);a5(t1);g5(t1);e5(t1);d5(t1);c5(t3+t3+t3);e5(t1);d5(t3+t1);e5(t1);d5(t3);b4(t3);a4(t3);d5(t1);b4(t3);a4(t3);g4(t3+t3+t3+t3);
