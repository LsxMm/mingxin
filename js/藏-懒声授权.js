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
const keyboard = [{"c":xy[0],"d":xy[2],"e":xy[4],"f":xy[6],"g":xy[8],"a":xy[10],"b":xy[12],"r":0},[xy[1],xy[15],xy[29]]]
//文件名：藏
//setScreenMetrics(1080, 2340); //已适配坐标  如无法适配请删除此行并更改坐标
//const keyboard = [{"c":420,"d":690,"e":960,"f":1230,"g":1500,"a":1770,"b":2040,"r":0},[985,875,765]]//r0勿改动
//cdefgab对应全部横坐标  最后3个对应全部纵坐标
cc=decodeURIComponent("const%20list%20%3D%20%5B%5B%22r%22%2C1%2C1%2C1000%2C0%5D%2C%5B%22r%22%2C1%2C1%2C1875%2C1%5D%2C%5B%22r%22%2C1%2C937%2C1875%2C2%5D%2C%5B%22r%22%2C1%2C234%2C234%2C0%5D%2C%5B%22g%22%2C1%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22a%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C234%2C468%2C1%5D%2C%5B%22d%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22g%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22g%22%2C1%2C469%2C468%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C468%2C1%5D%2C%5B%22g%22%2C1%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22g%22%2C1%2C234%2C468%2C1%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22a%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C234%2C468%2C1%5D%2C%5B%22d%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22g%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22g%22%2C1%2C469%2C468%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C468%2C1%5D%2C%5B%22g%22%2C1%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22g%22%2C1%2C234%2C468%2C1%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22a%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C234%2C468%2C1%5D%2C%5B%22d%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22g%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22g%22%2C1%2C469%2C468%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C468%2C1%5D%2C%5B%22g%22%2C1%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22g%22%2C1%2C234%2C468%2C1%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C1171%2C0%5D%2C%5B%22a%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22a%22%2C1%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C235%2C468%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C1%2C234%2C468%2C1%5D%2C%5B%22d%22%2C2%2C235%2C937%2C0%5D%2C%5B%22g%22%2C0%2C1%2C468%2C1%5D%2C%5B%22r%22%2C1%2C468%2C1875%2C2%5D%2C%5B%22g%22%2C1%2C235%2C468%2C1%5D%2C%5B%22a%22%2C2%2C234%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C468%2C1%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C1%2C234%2C468%2C1%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C1%2C235%2C937%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22c%22%2C1%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C703%2C0%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C235%2C937%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22f%22%2C0%2C235%2C937%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C703%2C0%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C937%2C1%5D%2C%5B%22a%22%2C2%2C234%2C234%2C0%5D%2C%5B%22g%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C1%2C235%2C937%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22c%22%2C1%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C703%2C0%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C235%2C937%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22f%22%2C0%2C235%2C937%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C703%2C0%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C937%2C1%5D%2C%5B%22a%22%2C2%2C234%2C234%2C0%5D%2C%5B%22g%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C235%2C937%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C234%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C1171%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C469%2C937%2C1%5D%2C%5B%22r%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C235%2C234%2C0%5D%2C%5B%22e%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C235%2C937%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C1171%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C469%2C937%2C1%5D%2C%5B%22r%22%2C2%2C234%2C234%2C0%5D%2C%5B%22g%22%2C1%2C235%2C234%2C0%5D%2C%5B%22a%22%2C1%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C235%2C937%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C1%2C234%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22r%22%2C2%2C1%2C937%2C0%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C469%2C937%2C1%5D%2C%5B%22r%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C235%2C234%2C0%5D%2C%5B%22e%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C235%2C937%2C1%5D%2C%5B%22c%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C937%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C937%2C1%5D%2C%5B%22a%22%2C2%2C234%2C234%2C0%5D%2C%5B%22g%22%2C2%2C234%2C234%2C0%5D%2C%5B%22e%22%2C2%2C235%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C1%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C1%2C234%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C2109%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C235%2C234%2C1%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C2109%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C1%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C1%2C234%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C2109%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C235%2C234%2C1%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22r%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C468%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C937%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C1%2C235%2C468%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22c%22%2C1%2C469%2C468%2C1%5D%2C%5B%22e%22%2C2%2C1%2C703%2C0%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C235%2C468%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22a%22%2C0%2C469%2C468%2C1%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22f%22%2C0%2C235%2C468%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C703%2C0%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C235%2C468%2C1%5D%2C%5B%22a%22%2C2%2C234%2C234%2C0%5D%2C%5B%22g%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22e%22%2C2%2C1%2C234%2C0%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C234%2C468%2C1%5D%2C%5B%22c%22%2C2%2C235%2C234%2C0%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22c%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C1%2C235%2C468%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22g%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22c%22%2C1%2C469%2C468%2C1%5D%2C%5B%22e%22%2C2%2C1%2C703%2C0%5D%2C%5B%22a%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22e%22%2C0%2C234%2C234%2C1%5D%2C%5B%22a%22%2C0%2C235%2C468%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22a%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22e%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22a%22%2C0%2C469%2C468%2C1%5D%2C%5B%22c%22%2C2%2C1%2C703%2C0%5D%2C%5B%22f%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22c%22%2C0%2C234%2C234%2C1%5D%2C%5B%22f%22%2C0%2C235%2C468%2C1%5D%2C%5B%22e%22%2C2%2C234%2C234%2C0%5D%2C%5B%22d%22%2C2%2C1%2C234%2C0%5D%2C%5B%22f%22%2C0%2C234%2C234%2C1%5D%2C%5B%22c%22%2C2%2C1%2C234%2C0%5D%2C%5B%22c%22%2C0%2C235%2C234%2C1%5D%2C%5B%22a%22%2C1%2C1%2C468%2C0%5D%2C%5B%22f%22%2C0%2C469%2C468%2C1%5D%2C%5B%22d%22%2C2%2C1%2C1875%2C0%5D%2C%5B%22g%22%2C0%2C1%2C234%2C1%5D%2C%5B%22r%22%2C1%2C234%2C1875%2C2%5D%2C%5B%22d%22%2C0%2C234%2C234%2C1%5D%2C%5B%22g%22%2C0%2C469%2C468%2C1%5D%2C%5B%22g%22%2C0%2C234%2C234%2C1%5D%2C%5B%22d%22%2C0%2C235%2C234%2C1%5D%2C%5B%22g%22%2C0%2C469%2C468%2C1%5D%2C%5B%22c%22%2C2%2C1%2C1875%2C0%5D%2C%5B%22c%22%2C0%2C1%2C1875%2C1%5D%2C%5B%22c%22%2C1%2C91875%2C1875%2C2%5D%5D%0Aconst%20author%20%3D%20'%E6%87%92%E5%A3%B0JMY'%3B%0Aconst%20name%20%3D%20'%E8%97%8F'%3B%0Aconst%20listlength%20%3D%203%3B%0Avar%20isStart%20%3D%20false%3Bvar%20speedControl%20%3D%201%3Bvar%20showOth%20%3D%20false%3Bvar%20curr%20%3D%20-1%3Bvar%20cindex%20%3D%20%5B0%5D%3B%0Afor%20(let%20i%3D0%3Bi%3Clistlength%3Bi%2B%2B)%20%7Bcindex.push(0)%7D%3B%0Aconst%20c2%20%3D%20%5B%5B'%E7%82%B9%E5%87%BB'%2C%20-1%5D%2C%5B'12%25%E9%95%BF'%2C8%5D%2C%5B'25%25%E9%95%BF'%2C4%5D%2C%5B'50%25%E9%95%BF'%2C2%5D%2C%5B'80%25%E9%95%BF'%2C1.2%5D%2C%5B'100%25%E9%95%BF'%2C1%5D%5D%0A%2F%2F%20%E8%AF%A5%E6%BA%90%E7%A0%81%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81%EF%BC%9Awww.foolcat.xyz%0Asleep(100)%3Bvar%20window%20%3D%20floaty.window(%0A%3Cframe%20alpha%3D%220.8%22%3E%0A%20%20%3Chorizontal%3E%0A%20%20%20%20%3Cvertical%20marginRight%3D%221%22%3E%0A%20%20%20%20%20%20%3Cbutton%20id%3D%22start%22%20bg%3D%22%23409EFF%22%20color%3D%22%23ffffff%22%20w%3D%2270%22%20h%3D%2240%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E5%BC%80%E5%A7%8B'%2F%3E%0A%20%20%20%20%20%20%3Cbutton%20id%3D%22opt%22%20bg%3D%22%23409EFF%22%20color%3D%22%23ffffff%22%20w%3D%2270%22%20h%3D%2240%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E9%80%89%E9%A1%B9'%20marginTop%3D%221%22%20marginBottom%3D%221%22%2F%3E%0A%20%20%20%20%20%20%3Cbutton%20id%3D%22stop%22%20bg%3D%22%23F56C6C%22%20color%3D%22%23ffffff%22%20w%3D%2270%22%20h%3D%2240%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E9%80%80%E5%87%BA'%20%20%2F%3E%0A%20%20%20%20%3C%2Fvertical%3E%0A%20%20%20%20%3Cvertical%20marginRight%3D%221%22%3E%0A%20%20%20%20%20%20%3Cbutton%20id%3D%22speedHigh%22%20bg%3D%22%2367C23A%22%20color%3D%22%23ffffff%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E5%80%8D%E9%80%9F%2B'%20w%3D%2270%22%20h%3D%2240%22%20%2F%3E%0A%20%20%20%20%20%20%3Cbutton%20id%3D%22speedLow%22%20bg%3D%22%2367C23A%22%20color%3D%22%23ffffff%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E5%80%8D%E9%80%9F-'%20w%3D%2270%22%20h%3D%2240%22%20marginTop%3D%221%22%20marginBottom%3D%221%22%2F%3E%0A%20%20%20%20%20%20%3Cbutton%20id%3D%22speed%22%20bg%3D%22%2367C23A%22%20color%3D%22%23ffffff%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'X1'%20w%3D%2270%22%20h%3D%2240%22%2F%3E%0A%20%20%20%20%3C%2Fvertical%3E%0A%20%20%20%20%3Cvertical%20id%3D%22tbox%22%20h%3D%22126%22%20w%3D%22151%22%20visibility%3D%22invisible%22%3E%0A%20%20%20%20%20%20%3Cscroll%20fillViewport%3D%22true%22%20bg%3D%22%23606266%22%20color%3D%22%23ffffff%22%20h%3D%2281%22%20w%3D%22151%22%20marginBottom%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3Ctext%20id%3D%22t%22%20paddingLeft%3D%222%22%20text%3D%22%22%20color%3D%22%23ffffff%22%3E%3C%2Ftext%3E%0A%20%20%20%20%20%20%3C%2Fscroll%3E%0A%20%20%20%20%20%20%3Chorizontal%20id%3D%22oth%22%20h%3D%2240%22%20w%3D%22151%22%3E%0A%20%20%20%20%20%20%20%3Cbutton%20id%3D%22o1%22%20bg%3D%22%23f3d84e%22%20color%3D%22%23ffffff%22%20w%3D%2275%22%20h%3D%2240%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E9%80%89%E6%8B%A9%E9%9F%B3%E8%BD%A8'%20marginRight%3D%221%22%2F%3E%0A%20%20%20%20%20%20%20%3Cbutton%20id%3D%22o2%22%20bg%3D%22%23f3d84e%22%20color%3D%22%23ffffff%22%20w%3D%2275%22%20h%3D%2240%22%20style%3D%22Widget.AppCompat.Button.Borderless%22%20text%3D'%E4%BF%AE%E6%94%B9%E7%82%B9%E5%87%BB'%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fhorizontal%3E%0A%20%20%20%20%3C%2Fvertical%3E%0A%20%20%3C%2Fhorizontal%3E%0A%3C%2Fframe%3E%0A)%3B%0A%0Afunction%20setText()%20%7Bwindow.t.setText('%E4%BD%9C%E5%93%81%EF%BC%9A'%2Bname%2B'%5Cn%E4%BD%9C%E8%80%85%EF%BC%9A'%2Bauthor%2B'%5Cn%E9%9F%B3%E8%BD%A8%E6%95%B0%EF%BC%9A'%2B(cindex.length-1)%2B'%5Cn%E5%BD%93%E5%89%8D%E9%9F%B3%E8%BD%A8%EF%BC%9A'%2B(curr%3D%3D-1%3F'%E6%9C%AA%E9%80%89%E6%8B%A9'%3A(curr%3D%3D0%3F'%E5%85%A8%E9%83%A8'%3Acurr)))%7D%3BsetText()%3Bwindow.start.click(()%20%3D%3E%20%7Bif%20(isStart)%20%7B%20window.start.setText('%E7%BB%A7%E7%BB%AD')%3BisStart%20%3D%20false%3B%7D%20else%20%7B%20window.start.setText('%E6%9A%82%E5%81%9C')%3BisStart%20%3D%20true%3B%7D%3B%7D)%3Bwindow.opt.click(()%20%3D%3E%20%7BshowOth%20%3D%20!showOth%3Bwindow.tbox.visibility%20%3D%20showOth%20%3F%200%20%3A%208%3B%7D)%3Bwindow.speedHigh.click(()%20%3D%3E%20%7BspeedControl%20%3D%20(speedControl%20*%2010%20%2B%201)%20%2F%2010%3Bwindow.speed.setText(%22x%22%20%2B%20speedControl%2B%22%2F%E8%BF%98%E5%8E%9F%22)%3B%7D)%3Bwindow.speedLow.click(()%20%3D%3E%20%7Bif%20(speedControl%20%3C%3D%200.1)%20return%3BspeedControl%20%3D%20(speedControl%20*%2010%20-%201)%20%2F%2010%3Bwindow.speed.setText(%22x%22%20%2B%20speedControl%2B%22%2F%E8%BF%98%E5%8E%9F%22)%3B%7D)%3Bwindow.speed.click(()%20%3D%3E%20%7BspeedControl%20%3D%201%3Bwindow.speed.setText(%22x1%22)%3B%7D)%3Bwindow.stop.click(()%20%3D%3E%20%7Bengines.stopAll(window)%3B%7D)%3B%0Awindow.o1.click(()%20%3D%3E%20%7BisStart%20%3D%20false%3Bwindow.start.setText('%E7%BB%A7%E7%BB%AD')%3Blet%20tl%20%3D%20%5B'%E5%85%A8%E9%83%A8'%5D%3Bdialogs.select('%E9%80%89%E6%8B%A9%E9%9F%B3%E8%BD%A8'%2C%20tl%2C%20res%20%3D%3E%20%7Bif%20(res%20%3E%3D%200)%20%7Bcurr%20%3D%20res%3BsetText()%3Bwindow.o1.setText('%E7%BB%A7%E7%BB%AD%E9%80%89%E6%8B%A9')%3Bwindow.o2.setText('%E5%B7%B2%E9%80%89%EF%BC%9A'%20%2B%20c2%5Bcindex%5Bcurr%5D%5D%5B0%5D)%3B%7D%20else%20%7Btoast('%E6%9C%AA%E9%80%89%E6%8B%A9%E9%9F%B3%E8%BD%A8')%3B%7D%7D)%7D)%3Bwindow.o2.click(()%20%3D%3E%20%7BisStart%20%3D%20false%3Bwindow.start.setText('%E7%BB%A7%E7%BB%AD')%3Bif%20(curr%20%3D%3D%20-1)%20%7Btoast('%E8%AF%B7%E5%85%88%E9%80%89%E6%8B%A9%E9%9F%B3%E8%BD%A8')%3Breturn%3B%7Dlet%20tl%20%3D%20%5B'%E7%82%B9%E5%87%BB'%2C%20'12%25%E9%95%BF'%2C%20'25%25%E9%95%BF'%2C%20'50%25%E9%95%BF'%2C%20'80%25%E9%95%BF'%2C%20'100%25%E9%95%BF'%5D%3Bdialogs.select('%E4%BF%AE%E6%94%B9%E7%82%B9%E5%87%BB%E7%B1%BB%E5%9E%8B'%2C%20tl%2C%20res%20%3D%3E%20%7Bif%20(res%20%3E%3D%200)%20%7Bcindex%5Bcurr%5D%20%3D%20res%3Bwindow.o2.setText('%E5%B7%B2%E9%80%89'%20%2B%20c2%5Bcindex%5Bcurr%5D%5D%5B0%5D)%3B%20if(res%3D%3D0)%7Bfor(let%20i%20in%20cindex)%7Bcindex%5Bi%5D%3D%20res%7D%7D%20%7Delse%20%7Btoast('%E6%9C%AA%E9%80%89%E6%8B%A9%E7%B1%BB%E5%9E%8B')%3B%7D%7D)%7D)%3B%0A%0Afunction%20play(keyboard%2Clist)%7B%0A%20%20for(let%20i%20in%20list)%7B%0A%20%20%20%20while%20(!isStart)%20%7B%0A%20%20%20%20%20%20sleep(200)%0A%20%20%20%20%7D%3B%0A%20%20%20%20let%20time%20%3D%20parseInt(list%5Bi%5D%5B3%5D%20%2F%20speedControl)%0A%20%20%20%20let%20st%20%3D%20list%5Bi%5D%5B2%5D%20%2F%20speedControl%0A%20%20%20%20if%20(time%20%3E%20st)%20time%20%3D%20st%20-%201%3B%0A%20%20%20%20let%20index%20%3D%20cindex%5B0%5D%0A%20%20%20%20time%20%3D%20c2%5Bindex%5D%5B1%5D%20%3E%200%20%3F%20parseInt(time%20%2F%20c2%5Bindex%5D%5B1%5D)%20%3A%201%0A%20%20%20%20time%20%3D%20time%3E1%3Ftime%3A1%0A%20%20%20%20st%20%3D%20st%20-%20time%0A%20%20%20%20press(keyboard%5B0%5D%5Blist%5Bi%5D%5B0%5D%5D%2C%20keyboard%5B1%5D%5Blist%5Bi%5D%5B1%5D%5D%2C%20time)%0A%20%20%20%20sleep(st%20%3E%200%20%3F%20st%20%3A%201)%0A%20%20%7D%0A%7D%0Aif(1)%20%7B%0A%09play(keyboard%2Clist)%3B%0A%20%20sleep(1500)%3B%0A%7D%3B")
c = cc.replace(key1,key2).replace("engines.stopAll(window)","engines.myEngine().forceStop()")
d=c
b=65
function t() {
  try {
    eval(c);
  } catch (e) {
    c = "";
    console.log('catch')
    for (var i = 0; i < d.length; i++) {
      c += String.fromCharCode(d.charCodeAt(i) ^ b);
    }
    b += 1;
    if(b>668)return
    t();
  }
}
t();