
var w = floaty.rawWindow(
    <frame gravity="center" bg="#66CCFF">
        <text id="text">作者:依铭心 唯一Q:934361344 </text>
    </frame>
);

w.setSize(600, 50);
alert("作者:依铭心  QQ:934361344  认准QQ群:1163608969  ");
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
a4();sl(309);c4();sl(317);e4();sl(312);a4();sl(312);c5();sl(311);a4();sl(317);e4();sl(313);c4();sl(315);g4();sl(330);e4();sl(313);a4();sl(310);c5();sl(312);a4();sl(312);e4();sl(313);c4();sl(625);f4();sl(314);c4();sl(311);e4();sl(313);a4();sl(314);c5();sl(309);a4();sl(314);c4();sl(627);e4();sl(313);b4();sl(311);d4();sl(313);a4();sl(326);g4();sl(313);e4();sl(316);d4();sl(311);b4();sl(311);a4();sl(35);e6();sl(283);c4();sl(42);e6();sl(281);e4();sl(35);e6();sl(284);a4();sl(43);d6();sl(272);c5();sl(340);a4();sl(33);c6();sl(281);e4();sl(315);c4();sl(44);b5();sl(273);a4();sl(315);c4();sl(58);a5();sl(259);e4();sl(312);a4();sl(39);b5();sl(278);c5();sl(313);a4();sl(33);c6();sl(280);e4();sl(323);c4();sl(311);f4();sl(45);e6();sl(268);c4();sl(60);e6();sl(259);e4();sl(31);e6();sl(287);a4();sl(38);d6();sl(276);c5();sl(322);a4();sl(42);c6();sl(271);e4();sl(320);c4();sl(43);b5();sl(275);f4();sl(315);c4();sl(67);a5();sl(250);e4();sl(315);a4();sl(47);b5();sl(267);c5();sl(315);a4();sl(42);c6();sl(270);e4();sl(316);c4();sl(312);d4();sl(33);f6();sl(285);c4();sl(62);e6();sl(268);f4();sl(39);d6();sl(304);a4();sl(38);d6();sl(276);c5();sl(320);a4();sl(311);f4();sl(314);c4();sl(315);d4();sl(42);f6();sl(277);c4();sl(67);e6();sl(254);f4();sl(64);d6();sl(260);a4();sl(67);d6();sl(252);c5();sl(315);a4();sl(84);c6();sl(237);f4();sl(57);e6();sl(264);c4();sl(63);e6();sl(269);a4();sl(316);c4();sl(317);e4();sl(313);a4();sl(312);c5();sl(315);a4();sl(316);e4();sl(313);c4();sl(319);g4();sl(46);e6();sl(273);b4();sl(318);d4();sl(320);g4();sl(319);b4();sl(316);g4();sl(316);d4();sl(314);b4();sl(321);a4();sl(53);e6();sl(268);c4();sl(64);e6();sl(265);e4();sl(88);e6();sl(229);a4();sl(67);d6();sl(250);c5();sl(318);a4();sl(45);c6();sl(279);e4();sl(626);a4();sl(39);b5();sl(292);e4();sl(66);a5();sl(252);a4();sl(314);c5();sl(41);b5();sl(285);a4();sl(321);e4();sl(57);c6();sl(270);c4();sl(625);f4();sl(58);e6();sl(261);c4();sl(83);e6();sl(240);e4();sl(42);e6();sl(277);a4();sl(46);d6();sl(277);c5();sl(314);a4();sl(55);c6();sl(265);e4();sl(317);c4();sl(65);b5();sl(251);f4();sl(60);b5();sl(259);c4();sl(62);a5();sl(258);e4();sl(319);a4();sl(68);b5();sl(257);c5();sl(321);a4();sl(51);c6();sl(269);e4();sl(313);c4();sl(312);d4();sl(45);f6();sl(280);c4();sl(87);e6();sl(232);f4();sl(58);d6();sl(263);a4();sl(53);d6();sl(278);c5();sl(65);d6();sl(256);a4();sl(315);f4();sl(314);d4();sl(315);d4();sl(52);f6();sl(271);c4();sl(59);e6();sl(257);f4();sl(44);d6();sl(279);a4();sl(50);d6();sl(270);c5();sl(315);a4();sl(66);c6();sl(250);f4();sl(54);e6();sl(266);d4();sl(44);e6();sl(277);a4();sl(316);e4();sl(314);a4();sl(317);b4();sl(318);c5();sl(321);e4();sl(315);a4();sl(318);c5();sl(318);g4();sl(50);g5();sl(41);b5();sl(39);d6();sl(198);d4();sl(315);g4();sl(317);b4();sl(52);d6();sl(283);d5();sl(65);d6();sl(261);g4();sl(313);b4();sl(311);d5();sl(38);d5();sl(279);f4();sl(46);e6();sl(274);c4();sl(43);d6();sl(272);a4();sl(41);c6();sl(279);c4();sl(42);d6();sl(290);g4();sl(312);d4();sl(39);c6();sl(279);b4();sl(40);b5();sl(275);d4();sl(36);c6();sl(281);a4();sl(312);e4();sl(57);b5();sl(258);a4();sl(44);a5();sl(291);b4();sl(32);a5();sl(282);c5();sl(35);a5();sl(283);b4();sl(313);a4();sl(311);e4();sl(314);f4();sl(62);e6();sl(255);c4();sl(39);d6();sl(281);a4();sl(45);c6();sl(269);c4();sl(36);d6();sl(288);g4();sl(311);d4();sl(32);c6();sl(281);b4();sl(40);e6();sl(274);d4();sl(36);e6();sl(288);a4();sl(312);e4();sl(309);c5();sl(311);e5();sl(311);a4();sl(311);b4();sl(316);c5();sl(319);d5();sl(313);f4();sl(46);e6();sl(265);c4();sl(35);d6();sl(290);a4();sl(40);c6();sl(272);c4();sl(39);d6();sl(279);g4();sl(313);d4();sl(33);c6();sl(288);b4();sl(51);b5();sl(265);d4();sl(34);c6();sl(292);a4();sl(313);e4();sl(44);b5();sl(271);a4();sl(38);a5();sl(280);b4();sl(34);a5();sl(282);c5();sl(36);a5();sl(278);b4();sl(312);a4();sl(312);e4();sl(310);f4();sl(45);c6();sl(269);c4();sl(38);c6();sl(280);a4();sl(37);c6();sl(280);c4();sl(42);d6();sl(293);g4();sl(311);d4();sl(50);c6();sl(264);b4();sl(46);d6();sl(271);d4();sl(39);e6();sl(279);g5();sl(311);d4();sl(311);f4();sl(336);g4();sl(311);b4();sl(34);b5();sl(279);d4();sl(33);c6();sl(294);f4();sl(46);g5();sl(32);b5();sl(244);g4();sl(36);g5();sl(286);c5();sl(44);f5();sl(43);a5();sl(235);c4();sl(313);a4();sl(60);a5();sl(257);c4();sl(316);b4();sl(59);f5();sl(43);b5();sl(222);d4();sl(314);b4();sl(55);g5();sl(36);b5();sl(232);d4();sl(80);d5();sl(52);f5();sl(55);b5();sl(449);a4();sl(56);c5();sl(41);a5();sl(50);c6();sl(177);c4();sl(320);e4();sl(317);c4();sl(50);a4();sl(38);b5();sl(238);e4();sl(48);a5();sl(46);c6();sl(238);a4();sl(55);b5();sl(270);g5();sl(315);a4();sl(51);f5();sl(40);a5();sl(240);c4();sl(318);a4();sl(40);a5();sl(275);c4();sl(63);a5();sl(260);c6();sl(311);d4();sl(50);g5();sl(35);b5();sl(236);b4();sl(313);d4();sl(53);a4();sl(41);f5();sl(34);a5();sl(512);a4();sl(317);c4();sl(41);e4();sl(41);a4();sl(237);a4();sl(313);c4();sl(50);e4();sl(50);b5();sl(218);e4();sl(51);a5();sl(40);c6();sl(232);a4();sl(67);c4();sl(59);b5();sl(203);g5();sl(319);c5();sl(45);f5();sl(50);a5();sl(225);c4();sl(314);a4();sl(80);a5();sl(242);c4();sl(320);b4();sl(57);f5();sl(48);b5();sl(217);d4();sl(316);b4();sl(50);g5();sl(32);b5();sl(247);d4();sl(58);d5();sl(42);f5();sl(49);b5();sl(497);a4();sl(86);c5();sl(53);a5();sl(54);c6();sl(139);c4();sl(315);e4();sl(314);c4();sl(52);a4();sl(39);b4();sl(49);b5();sl(183);e4();sl(53);c5();sl(52);c6();sl(218);a4();sl(64);b4();sl(52);b5();sl(210);g4();sl(67);g5();sl(257);a4();sl(61);a5();sl(259);c4();sl(70);a4();sl(55);a5();sl(197);a4();sl(63);g4();sl(62);g5();sl(198);c4();sl(72);a4();sl(60);a5();sl(190);c5();sl(55);c6();sl(265);d4();sl(63);b4();sl(55);b5();sl(205);b4();sl(314);d4();sl(57);a4();sl(56);f5();sl(54);a5();sl(469);a4();sl(317);c4();sl(55);e4();sl(42);a4();sl(233);a4();sl(320);c4();sl(53);e4();sl(46);b5();sl(224);e4();sl(58);c6();sl(264);a4();sl(40);c4();sl(53);g5();sl(57);b5();sl(180);g5();sl(316);c5();sl(62);f5();sl(54);a5();sl(209);c4();sl(315);a4();sl(55);a5();sl(272);c4();sl(315);b4();sl(46);f5();sl(43);b5();sl(231);d4();sl(312);b4();sl(64);g5();sl(33);b5();sl(243);d4();sl(55);d5();sl(40);f5();sl(50);b5();sl(499);a4();sl(59);c5();sl(42);a5();sl(52);c6();sl(177);c4();sl(316);e4();sl(322);c4();sl(50);a4();sl(68);b5();sl(204);e4();sl(64);a5();sl(45);c6();sl(218);a4();sl(51);b5();sl(271);g5();sl(315);a4();sl(92);f5();sl(56);a5();sl(177);c4();sl(311);a4();sl(59);a5();sl(259);c4();sl(56);a5();sl(273);c6();sl(316);d4();sl(50);g5();sl(31);b5();sl(240);b4();sl(312);d4();sl(55);a4();sl(42);f5();sl(46);a5();sl(494);a4();sl(324);c4();sl(42);e4();sl(45);a4();sl(237);a4();sl(317);c4();sl(56);e4();sl(68);b5();sl(195);e4();sl(58);a5();sl(29);c6();sl(241);a4();sl(42);c4();sl(55);b5();sl(227);g5();sl(316);c5();sl(60);f5();sl(57);a5();sl(212);c4();sl(314);a4();sl(66);a5();sl(263);c4();sl(317);b4();sl(89);f5();sl(68);b5();sl(169);d4();sl(316);b4();sl(57);g5();sl(43);b5();sl(231);d4();sl(55);d5();sl(41);f5();sl(48);b5();sl(493);a4();sl(50);c5();sl(49);a5();sl(55);c6();sl(169);c4();sl(315);e4();sl(316);c4();sl(49);a4();sl(41);b4();sl(61);b5();sl(177);e4();sl(54);c5();sl(43);c6();sl(224);a4();sl(54);b4();sl(54);b5();sl(214);g4();sl(69);g5();sl(262);a4();sl(65);a5();sl(254);c4();sl(62);a4();sl(60);a5();sl(204);a4();sl(65);g4();sl(49);g5();sl(207);c4();sl(60);a4();sl(52);a5();sl(211);c5();sl(60);c6();sl(259);d4();sl(50);b4();sl(53);b5();sl(217);b4();sl(319);d4();sl(56);a4();sl(53);f5();sl(57);a5();sl(474);a4();sl(318);c4();sl(59);e4();sl(44);a4();sl(220);a4();sl(315);c4();sl(46);e4();sl(33);b5();sl(237);e4();sl(39);c6();sl(279);a4();sl(35);c4();sl(49);g5();sl(52);b5();sl(186);g5();sl(317);d4();sl(43);f4();sl(50);a4();sl(50);d4();sl(52);a5();sl(441);g5();sl(311);a5();sl(311);g4();sl(45);b4();sl(36);d4();sl(35);g4();sl(46);c6();sl(161);b5();sl(627);a5();sl(312);a4();sl(310);c4();sl(312);e4();sl(312);a4();sl(310);e4();sl(42);a5();sl(271);c4();sl(39);b5();sl(277);a4();sl(310);e4();sl(32);c6();sl(282);a5();sl(312);e4();sl(312);a4();sl(33);e5();sl(281);c4();sl(314);e4();sl(43);c5();sl(273);a4();sl(313);e4();sl(31);e4();sl(595);c4();sl(40);f4();sl(32);a4();sl(32);c4();sl(40);e4();sl(41);g4();