
var speedControl=1;var time=447;var time1=223;var time2=895;
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
sleep(100);var window = floaty.window('<frame><vertical><button id="btn" text="暂停"/><horizontal><button id="speedLow" text="减速" w="80"/><button id="speedHigh" text="加速"w="80"/></horizontal><horizontal><button id="speed" text="x1" w="80"/><button id="stop" text="停止"w="80"/></horizontal></vertical></frame>');window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.myEngine().forceStop()});
function t1(c) {sleep(time/speedControl)};//默认间隔-
function t2(c) {sleep(time1/speedControl)};//较短间隔~
function t3(c) {sleep(time2/speedControl)};//较长间隔,
function t4(c) {sleep(100/speedControl)};//自定义间隔*点一下隔100ms
a5();a4();e4();c4();t1();e6();t1();e6();t2();d6();t2();e6();t2();a6();t2();g6();b4();g4();e4();t1();e6();t1();g6();t1();t1();a6();a4();f4();c4();t1();c6();t2();a5();t1();c6();t1();d6();t1();e6();g4();e4();c4();t1();t2();d6();t4();c6();t4();b5();t1();t1();a5();a4();e4();c4();t1();e6();t1();e6();t2();d6();t2();e6();t2();a6();t2();g6();b4();g4();e4();t1();e6();t1();g6();t1();t1();a5();a4();f4();c4();t1();t1();t2();g5();t2();a5();t2();c6();t2();g6();t1();t1();t1();a5();t2();b5();t2();c6();a4();t1();e5();t2();a5();t2();c6();c6();t2();b5();t2();a5();a5();t2();e5();e5();t2();g5();e4();t1();g5();b4();t2();g5();e4();t2();g5();t1();g5();e5();t2();c5();b4();t2();a5();f4();t1();c5();t2();f5();t2();a5();a5();t2();g5();t2();f5();f5();t2();e5();c5();t2();e5();c4();t1();e5();g5();t2();e5();c5();t2();e5();t1();c5();t2();e5();g4();t2();f5();d4();t2();e5();t2();d5();a4();t2();e5();d5();t2();f5();f5();t2();e5();t2();f5();d5();t2();d6();a4();t2();b5();a4();t1();c6();e5();t2();b5();a5();t2();c5();t1();a5();a5();t2();b5();e5();t2();c6();f4();t1();a5();c5();t2();b5();f5();t2();c6();t2();b5();a5();t1();a5();t2();f5();t2();b5();e4();t2();b4();t2();e5();t2();g5();t2();t2();e5();t2();a5();b4();t2();b5();t2();c6();a4();t1();e5();t2();a5();t2();c6();c6();t2();b5();t2();a5();a5();t2();e5();e5();t2();g5();e4();t1();g5();b4();t2();g5();e5();t2();g5();t1();g5();e5();t2();c5();b4();t2();a5();f4();t1();c5();t2();f5();a5();t2();g5();t2();f5();f5();t2();e5();c5();t2();e5();c4();t1();e5();g4();t2();e5();c5();t2();e5();t2();t2();c5();t2();e5();g4();t2();f5();d4();t2();e5();t2();d5();a4();t2();e5();d5();t2();f5();f5();t2();e5();t2();f5();d5();t2();d6();a4();t2();b5();a4();t1();c6();e5();t2();b5();a5();t2();c5();t1();a5();t2();e5();t2();a5();f4();t1();c5();t2();f5();t2();d6();t2();a5();t1();a5();f5();t2();b5();e4();t2();b4();t2();e5();t2();g5();t2();t2();e5();t2();b4();t1();e5();a4();t1();e6();e5();t2();a5();t2();e6();c6();t2();d6();t2();e6();a5();t2();a6();e5();t2();g6();e4();t1();e6();b4();t2();e5();t2();g6();g5();t1();e5();t2();b4();t2();a6();f4();t1();c6();c5();t2();f5();t2();a5();a5();t2();b5();t2();c6();f5();t2();f6();c5();t2();e6();c4();t1();d6();g4();t2();c6();c5();t2();b5();e5();t1();c5();t2();g4();t2();c6();d4();t1();a5();a4();t2();b5();d5();t2();c6();f5();t2();c6();t2();c6();d5();t2();f6();a4();t2();e6();a4();t1();e6();t1();c6();e5();t1();a5();t2();d6();c4();t1();a5();t2();e5();t2();e6();e4();t1();b4();t2();e5();t2();a5();t2();g5();t2();b5();t2();b5();t2();a4();t2();c6();t4();b5();e5();t4();a5();a5();t2();b5();a5();t2();c5();t1();e5();t2();e5();a4();t1();e6();e5();t2();a5();t2();e6();c6();t2();d6();t2();e6();a5();t2();a6();e5();t2();g6();e4();t1();e6();b4();t2();e5();t2();g6();g5();t1();e5();t2();b4();t2();a6();f4();t1();c6();c5();t2();f5();t2();a5();a5();t2();b5();t2();c6();f5();t2();f6();c5();t2();e6();c4();t1();d6();g4();t2();c6();c5();t2();b5();e5();t1();c5();t2();g4();t2();c6();d4();t1();a5();a4();t2();b5();d5();t2();c6();f5();t2();c6();t2();c6();d5();t2();f6();a4();t2();e6();a4();t1();e6();t1();c6();e5();t1();a5();t2();d6();c4();t1();a5();t2();e5();t2();e6();e4();t1();b4();t2();e5();t2();e6();a4();t1();e5();t2();a5();t2();a5();c4();t1();a5();t2();e5();t2();b5();e4();t1();b4();t2();e5();t2();g5();t1();e5();t2();b4();t1();e5();a4();t1();e6();e5();t2();a5();t2();e6();c6();t2();d6();t2();e6();a5();t2();a6();e5();t2();g6();e4();t1();e6();b4();t2();e5();t2();g6();g5();t1();e5();t2();b4();t2();a6();f4();t1();c6();c5();t2();f5();t2();a5();a5();t2();b5();t2();c6();f5();t2();f6();c5();t2();e6();c4();t1();d6();g4();t2();c6();c5();t2();b5();e5();t1();c5();t2();g4();t2();c6();d4();t1();a5();a4();t2();b5();d5();t2();c6();f5();t2();c6();t2();c6();d5();t2();f6();a4();t2();e6();a4();t1();e6();t1();c6();e5();t1();a5();t2();d6();c4();t1();a5();t2();e5();t2();e6();e4();t1();b4();t2();e5();t2();a5();t2();g5();t2();b5();t2();b5();t2();a4();t2();c6();t4();b5();e5();t4();a5();a5();t2();b5();a5();t2();c5();t1();e5();t2();e5();a4();t1();e6();e5();t2();a5();t2();e6();c6();t2();d6();t2();e6();a5();t2();a6();e5();t2();g6();e4();t1();e6();b4();t2();e5();t2();g6();g5();t1();e5();t2();b4();t2();a6();f4();t1();c6();c5();t2();f5();t2();a5();a5();t2();b5();t2();c6();f5();t2();f6();c5();t2();e6();c4();t1();d6();g4();t2();c6();c5();t2();b5();e5();t1();c5();t2();g4();t2();c6();d4();t1();a5();a4();t2();b5();d5();t2();c6();f5();t2();c6();t2();c6();d5();t2();f6();a4();t2();e6();a4();t1();e6();t1();c6();e5();t1();a5();t2();d6();c4();t1();a5();t2();e5();t2();e6();e4();t1();b4();t2();e5();t2();e6();a4();t1();e5();t2();a5();t2();a5();c4();t1();a5();t2();e5();t2();b5();e4();t1();b4();t2();e5();t2();g5();t1();e5();t2();b4();t1();g5();a4();t1();a5();e5();t2();a5();t2();a5();a5();t2();b5();t1();c5();t2();e6();t1();t1();t1();t1();t1();




