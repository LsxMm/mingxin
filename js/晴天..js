sleep(100);var window = floaty.window(<frame><vertical><button id="btn" text='暂停'/><horizontal><button id="speedLow" text='减速'w="80"/><button id="speedHigh" text='加速'w="80"/></horizontal><horizontal><button id="speed" text='x1'w="80"/><button id="stop" text='停止'w="80"/></horizontal></vertical></frame>);window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.stopAll()})
var s=1;var speedControl=1;var time=333;var time1=166;var time2=666;
var zuobiaoPath = "/sdcard/Download/SkyMsToJs/zuobiao.txt";
if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));
} else {
    setScreenMetrics(1080, 2340);//默认分辨率，以下按键位置基于此分辨率
    var x=[788,912,1053,1194,1335,1473,1615];
    var xz=[823,972,1106,1247,1380,1532,1657];
    var y=[913,730,534];

}
function ran(){return Math.random()*36-18}
function c4() {press(x[0]+ran(),y[0]+ran(),1)}
function d4() {press(x[1]+ran(),y[0]+ran(),1)}
function e4() {press(x[2]+ran(),y[0]+ran(),1)}
function f4() {press(x[3]+ran(),y[0]+ran(),1)}
function g4() {press(x[4]+ran(),y[0]+ran(),1)}
function a4() {press(x[5]+ran(),y[0]+ran(),1)}
function b4() {press(x[6]+ran(),y[0]+ran(),1)}
function c5() {press(xz[0]+ran(),y[1]+ran(),1)}
function d5() {press(xz[1]+ran(),y[1]+ran(),1)}
function e5() {press(xz[2]+ran(),y[1]+ran(),1)}
function f5() {press(xz[3]+ran(),y[1]+ran(),1)}
function g5() {press(xz[4]+ran(),y[1]+ran(),1)}
function a5() {press(xz[5]+ran(),y[1]+ran(),1)}
function b5() {press(xz[6]+ran(),y[1]+ran(),1)}
function c6() {press(x[0]+ran(),y[2]+ran(),1)}
function t1() {while (s != 1) {sleep(100)};sleep(time/speedControl)}//默认间隔-
function t2() {while (s != 1) {sleep(100)};sleep(time1/speedControl)}//较短间隔~
function t3() {while (s != 1) {sleep(100)};sleep(time2/speedControl)}//较长间隔,
function t4() {while (s != 1) {sleep(100)};sleep(100/speedControl)}//自定义间隔*点一下隔100ms
a4();t1();c5();t1();g5();t1();c5();t1();f4();t1();g4();t2();a4();t2();g5();t1();c5();t1();c4();t1();g4();t1();g5();t1();c5();t1();c4();t1();g5();t1();b4();t1();g5();t1();a4();t1();c5();t1();g5();t1();c5();t1();f4();t1();g4();t2();a4();t2();g5();t1();c5();t1();c4();t1();g4();t1();g5();t1();c5();t1();c4();t2();g4();t2();g5();t1();b4();t2();c5();t2();g5();t1();e4();a4();t1();g5();t1();g5();t1();c5();t1();f4();a4();c5();t1();t2();d5();t1();e5();t1();c4();t1();g4();g5();t1();g5();t1();c5();t1();g4();c5();t1();d5();t2();e5();t2();d5();t1();c5();t1();e4();a4();t1();g5();t1();g5();t1();c5();t1();f4();a4();t1();t2();d5();t1();e5();t1();c4();t1();e5();t1();g4();t1();e5();t1();c5();f5();t2();e5();t2();d5();t2();f5();t2();e5();t1();c5();t1();e4();g4();t1();c5();t1();c5();t1();e5();t1();f4();a4();f5();t1();e5();t1();d5();t1();c5();t2();d5();t2();c4();e5();t1();e5();t1();e5();t1();e5();t1();g4();b4();d5();t2();e5();t2();d5();t1();c5();t1();t2();e4();a4();t1();b4();t1();c5();t1();e5();t1();f4();a4();f5();t1();e5();t1();d5();t1();c5();t2();d5();t2();c4();e5();t1();e5();t1();e5();t1();e5();t1();g4();b4();d5();t2();e5();t2();d5();t1();c5();t1();b4();t2();e4();a4();c5();t2();c5();t2();c5();t2();c5();t2();b4();t2();c5();t1();c5();t2();f4();t2();c5();t2();c5();t2();c5();t2();b4();t2();c5();t1();c5();t2();c4();e4();t2();c5();t2();c5();t2();c5();t2();b4();t2();c5();t1();c5();t2();g4();t2();c5();t2();c5();t2();c5();t2();g5();t2();g5();t1();g5();t2();a4();t2();g5();t2();g5();t2();g5();t2();g5();t2();g5();t1();g5();t2();f4();t2();g5();t2();g5();t2();g5();t2();g5();t2();f5();t1();e5();t1();e5();t1();c4();t1();e4();t1();g4();t1();e4();t1();c4();t1();t2();d4();d5();t2();c5();t2();b4();t2();c5();t2();e4();a4();t1();b4();t1();c5();t1();g5();t1();g4();f5();t1();e5();t1();c5();t1();c5();t1();c4();t1();e4();t1();g4();t1();e4();t2();c4();c5();t2();c5();t2();c5();t2();c5();t2();e5();t1();c5();t1();e4();a4();t1();b4();t1();c5();t1();g5();t1();f4();f5();t1();e5();t1();c5();t1();d5();t1();g4();t1();b4();t1();c5();t1();d5();t1();d4();g4();b4();t3();
t2();e4();g4();e5();t1();d5();t1();f5();t1();e5();t1();c4();t1();c5();t1();g5();t1();b5();t1();a4();c6();t1();b5();t1();g5();t1();c5();t1();e4();a4();t1();c5();t1();a5();t1();a5();t1();f4();a4();t1();a5();t1();g5();t1();g5();t1();g4();b4();t1();g5();t1();f5();t1();e5();t1();d4();d5();t1();e5();t1();f5();t1();e5();t1();c4();t1();e4();t1();g4();t1();e4();t1();e4();e5();t1();f5();t1();g5();t1();e5();t1();e4();t1();f5();t1();g5();t1();b5();t1();a4();c6();t1();b5();t1();c6();t1();c6();t1();e4();t1();a4();t1();c5();t1();c6();t1();f4();a4();c6();t1();g5();t1();g5();t1();a5();t1();d4();g5();t1();f5();t1();d5();t1();e5();t1();g4();b4();d5();f5();t1();g5();t1();a5();t1();c5();t1();a5();t1();t2();b5();t2();b5();t1();t2();e4();g4();e5();t1();d5();t1();f5();t1();e5();t1();c4();t1();c5();t1();g5();t1();b5();t1();a4();c6();t1();b5();t1();g5();t1();c5();t1();e4();a4();t1();c5();t1();a5();t1();a5();t1();f4();a4();t1();a5();t1();g5();t1();g5();t1();g4();b4();t1();g5();t1();f5();t1();e5();t1();d4();d5();t1();e5();t1();f5();t1();e5();t1();c4();t1();e4();t1();g4();t1();e4();t1();e4();e5();t1();f5();t1();g5();t1();e5();t1();e4();t1();f5();t1();g5();t1();b5();t1();a4();c6();t1();b5();t1();c6();t1();c6();t1();e4();t1();a4();t1();c5();t1();c6();t1();f4();a4();c6();t1();g5();t1();g5();t1();a5();t1();d4();g5();t1();f5();t1();a4();t1();b4();t1();g4();c5();t1();d5();t1();e5();t1();d5();t1();g4();b4();t3();
e5();t1();c5();t1();c4();t1();e4();t1();g4();t1();b4();t1();c4();e4();g4();c5();
