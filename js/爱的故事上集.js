sleep(100);var window = floaty.window('<frame><vertical><button id="btn" text="暂停"/><horizontal><button id="speedLow" text="减速" w="80"/><button id="speedHigh" text="加速"w="80"/></horizontal><horizontal><button id="speed" text="x1" w="80"/><button id="stop" text="停止"w="80"/></horizontal></vertical></frame>');window.exitOnClose();
window.btn.click(()=>{if (window.btn.getText() != '暂停') {s = 1;window.btn.setText('暂停')} else {s = 0;window.btn.setText('继续')}})
window.speedHigh.click(()=>{speedControl=(speedControl*10+1)/10;window.speed.setText("x"+speedControl)})
window.speedLow.click(()=>{if(speedControl<=0.1){return};speedControl=(speedControl*10-1)/10;window.speed.setText("x"+speedControl)})
window.speed.click(()=>{speedControl=1;window.speed.setText("x"+speedControl)})
window.stop.click(()=>{engines.stopAll()})
var s=1;var speedControl=1;var zuobiaoPath="/sdcard/脚本/zuobiao21.txt";
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
function sl(t) {while (s != 1) {sleep(100)};sleep(t/speedControl)};
f4();sl(42);e6();sl(269);c4();sl(341);f4();sl(38);e6();sl(275);e6();sl(318);g4();sl(40);d6();sl(273);d4();sl(46);d6();sl(272);g4();sl(37);d6();sl(284);e6();sl(315);a4();sl(45);c6();sl(273);c4();sl(37);a5();sl(277);e4();sl(312);c4();sl(311);e4();sl(618);a5();sl(311);a5();sl(310);f4();sl(35);a6();sl(284);c4();sl(35);a6();sl(283);f4();sl(41);a6();sl(275);a6();sl(312);g4();sl(45);g6();sl(266);d4();sl(35);g6();sl(291);g4();sl(41);g6();sl(272);e6();sl(318);c4();sl(312);g4();sl(317);c5();sl(313);g4();sl(309);a4();sl(622);g4();sl(622);f4();sl(34);e6();sl(286);c4();sl(34);e6();sl(298);f4();sl(50);e6();sl(264);e6();sl(315);g4();sl(59);d6();sl(264);d4();sl(38);d6();sl(282);g4();sl(38);d6();sl(278);e6();sl(315);a4();sl(45);c6();sl(267);e4();sl(34);a5();sl(283);a4();sl(312);e4();sl(316);c5();sl(619);a5();sl(311);a5();sl(314);f4();sl(34);b5();sl(278);c4();sl(315);f4();sl(70);b5();sl(250);c6();sl(312);g4();sl(43);d6();sl(271);d4();sl(35);c6();sl(297);g4();sl(45);b5();sl(268);b5();sl(312);a4();sl(36);b5();sl(279);c4();sl(49);a5();sl(266);e4();sl(623);a4();sl(47);a5();sl(1196);f4();sl(53);e6();sl(265);c4();sl(313);f4();sl(317);e6();sl(312);g4();sl(50);e6();sl(270);d4();sl(39);d6();sl(283);g4();sl(52);d6();sl(266);e6();sl(312);a4();sl(53);c6();sl(274);c4();sl(65);a5();sl(255);e4();sl(314);c4();sl(315);e4();sl(636);a5();sl(314);a5();sl(321);f4();sl(51);a6();sl(271);c4();sl(58);a6();sl(259);f4();sl(50);a6();sl(266);a6();sl(317);g4();sl(63);g6();sl(253);d4();sl(58);g6();sl(260);g4();sl(50);a6();sl(277);g6();sl(322);c4();sl(64);e6();sl(252);g4();sl(314);c5();sl(313);g4();sl(317);a4();sl(1240);f4();sl(53);e6();sl(263);c4();sl(50);e6();sl(269);f4();sl(65);e6();sl(256);e6();sl(311);g4();sl(63);d6();sl(256);d4();sl(67);d6();sl(255);g4();sl(56);d6();sl(269);e6();sl(318);a4();sl(73);c6();sl(253);e4();sl(54);a5();sl(265);a4();sl(91);a5();sl(229);e4();sl(313);c5();sl(626);a5();sl(314);a5();sl(312);f4();sl(50);b5();sl(268);c4();sl(89);b5();sl(228);f4();sl(58);b5();sl(258);c6();sl(312);g4();sl(64);d6();sl(255);d4();sl(64);c6();sl(254);g4();sl(91);b5();sl(226);a5();sl(313);a4();sl(313);e4();sl(317);a4();sl(314);c5();sl(318);e5();sl(1240);f4();sl(58);a6();sl(259);c4();sl(315);f4();sl(70);a6();sl(252);a6();sl(314);g4();sl(49);g6();sl(276);d4();sl(75);g6();sl(242);g4();sl(51);a6();sl(267);g6();sl(312);a4();sl(52);e6();sl(264);e4();sl(62);g6();sl(256);a4();sl(62);g6();sl(257);e4();sl(67);g6();sl(253);c5();sl(312);e4();sl(313);a4();sl(312);e4();sl(316);f4();sl(56);f6();sl(271);c4();sl(63);f6();sl(256);f4();sl(55);f6();sl(261);f6();sl(316);g4();sl(67);g6();sl(252);d4();sl(315);g4();sl(66);g6();sl(252);f6();sl(316);a4();sl(49);e6();sl(270);e4();sl(50);a6();sl(267);a4();sl(318);e4();sl(61);a6();sl(258);c5();sl(320);e4();sl(314);a4();sl(316);e4();sl(314);f4();sl(61);a6();sl(262);c4();sl(312);f4();sl(55);a6();sl(266);a6();sl(313);g4();sl(72);b6();sl(250);d4();sl(82);b6();sl(237);g4();sl(38);a6();sl(278);b6();sl(315);c4();sl(49);c6();sl(265);g4();sl(311);c5();sl(43);b6();sl(579);a4();sl(40);a6();sl(272);e4();sl(311);a4();sl(38);a6();sl(275);b6();sl(326);f4();sl(37);c6();sl(276);c4();sl(38);c6();sl(282);f4();sl(38);c6();sl(279);c6();sl(330);g4();sl(37);b6();sl(277);d4();sl(45);a6();sl(268);g4();sl(48);g6();sl(268);a6();sl(333);e4();sl(112);e6();sl(200);b4();sl(334);e4();sl(310);e6();sl(313);e4();sl(311);b4();sl(310);e4();sl(311);g4();sl(312);c4();sl(44);e6();sl(274);g4();sl(325);c4();sl(40);e6();sl(279);g4();sl(39);e6();sl(297);d4();sl(38);d6();sl(278);a4();sl(38);d6();sl(282);d4();sl(40);e6();sl(273);a4();sl(37);d6();sl(280);e4();sl(42);b5();sl(273);b4();sl(38);d6();sl(304);e4();sl(38);d6();sl(277);b4();sl(40);d6();sl(280);g4();sl(311);b4();sl(311);e4();sl(311);b4();sl(311);c4();sl(37);c6();sl(275);g4();sl(32);c6();sl(309);c4();sl(38);c6();sl(276);g4();sl(40);c6();sl(280);d4();sl(33);d6();sl(282);a4();sl(333);d4();sl(38);d6();sl(275);a4();sl(37);c6();sl(278);e4();sl(36);b5();sl(281);b4();sl(33);e6();sl(279);e4();sl(317);b4();sl(51);e6();sl(262);g4();sl(338);b4();sl(311);e4();sl(310);b4();sl(311);c4();sl(43);e6();sl(269);g4();sl(322);c4();sl(38);e6();sl(288);g4();sl(37);e6();sl(284);d4();sl(31);f6();sl(282);a4();sl(39);f6();sl(279);d4();sl(39);e6();sl(275);a4();sl(36);f6();sl(282);g4();sl(31);g6();sl(307);d4();sl(312);g4();sl(50);f6();sl(263);d4();sl(312);e4();sl(43);e6();sl(273);b4();sl(313);e4();sl(46);e6();sl(272);b4();sl(61);f6();sl(255);c4();sl(77);g6();sl(242);g4();sl(52);g6();sl(266);c4();sl(45);g6();sl(271);g4();sl(47);g6();sl(277);d4();sl(51);f6();sl(267);a4();sl(53);e6();sl(268);d4();sl(48);d6();sl(272);a4();sl(314);e4();sl(48);e6();sl(271);b4();sl(314);e4();sl(315);g4();sl(311);e5();