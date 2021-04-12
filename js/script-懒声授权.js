var key1
var key2
key1 = http.get("https://gitee.com/yiminxin/automusic/raw/master/keyword/key1.json").body.string();
key2 = http.get("https://gitee.com/yiminxin/automusic/raw/master/keyword/key2.json").body.string();var zuobiaoPath
zuobiaoPath = http.get("https://gitee.com/yiminxin/automusic/raw/master/path.json").body.string();


if (files.exists(zuobiaoPath)) {
    eval(files.read(zuobiaoPath));
	
} else {
    setScreenMetrics(1080, 2340); 
	var moren = "xy=[436,991,696,991,956,991,1216,991,1476,991,1736,991,1996,991,436,878,696,878,956,878,1216,878,1476,878,1736,878,1996,878,436,766,696,766,956,766,1216,766,1476,766,1736,766,1996,766];"
	eval(moren)
}
const keyboard = [{"c":xy[0],"d":xy[2],"e":xy[4],"f":xy[6],"g":xy[8],"a":xy[10],"b":xy[12],"r":0},[xy[1],xy[15],xy[29]]]toast("我他妈的开始了");
console.show();
while (1) {
    log('1');
    sleep(1000);
    log(bh.getViewContent("bh_old"));
}



