try {
    // toast通知代替函数
    function toasts(text, time) {
        text = text || null;
        time = time || 5000;
        if (isNaN(time)) return;
        let arr = engines.all(),
            run = false;
        for (i in arr) {
            if (files.getName(arr[i].getSource()) == "toast.js") {
                run = true;
                break;
            }
        }
        if (!run) {
            let tex = "var t = toasts();\nevents.broadcast.on(\"toast\", (arr) => {\nif (arr.length != 2) return;\nlet time = new Number(arr[1][1]),text = arr[1][0];\nif(isNaN(time)) time = 5000;\nif(!text) return;\nt(text, time);});\nsetInterval(() => {}, 10000);\nfunction toasts() {\nvar th = \"\",Y = device.width / 4,X = Y,x = Y * 2;\nvar flo = floaty.rawWindow(\n<frame gravity=\"center\" bg=\"#00000000\">\n<text id=\"message\"  bg=\"#70000000\" textColor=\"#ffffff\" textSize=\"15sp\" gravity=\"center\" w=\"auto\" padding=\"1\"/>\n</frame>);\nflo.setTouchable(false);\nflo.setSize(0, 0);\nreturn doflo;\nfunction doflo(mes, time) {\nmes = \" \" + mes.toString().split(\"\\n\").join(\" \\n \") + \" \";\nif (th != \"\") {\nth.interrupt();\nth = \"\";}\nui.run(function() {\nflo.message.setText(mes);});\nflo.setPosition(X, Y);\nflo.setSize(x, -2);\nth = threads.start(function() {\nsleep(time);\nui.run(function() {\nflo.message.setText(\"\");});\nflo.setSize(0, 0);\nth = \"\";});}}";
            engines.execScript("toast", tex);
            sleep(500);
        }
        // log(text);
        events.broadcast.emit("toast", [
            [engines.myEngine(), [text, time]]
        ]);
    }
    toasts("按音量下键开始获取坐标；按音量上键停止脚本！注意，请从低音到高音依次按压（从左下角琴键开始开始，从左到右按完再按上一行的）", -1)
    //toasts("按下 音量- 可以切换");
    events.observeKey();
    events.on("key", function(k, e) {
        let ek = k * 10 + e.getAction();
        //toasts(ek)
        switch (ek) {
            case 241:
                //log("volume_up up");
                toasts("已停止")
                engines.stopAll();
                break
            case 251:
                //log("volume_down down");
                event.emit("touchable");
                break
        }
        ek = 0;
    });

    var event = events.emitter();
    event.on("touchable", function() {
        touchable_state = !touchable_state;
        x.setTouchable(touchable_state);
        if (touchable_state) {
            toasts("现在请开始按压左下角第1个键", -1)
        } else {
            toasts("暂停获取", -1);
        }
    });
    var num = 1
    var zuobiao = []
    let path = "/sdcard/脚本/zuobiao21.txt"
    var x = floaty.rawWindow(
            <frame id="but" bg="#00000000"/>
        ),
        touchable_state = false;
    x.setSize(-1, -1);
    x.setTouchable(touchable_state);
    x.but.setOnTouchListener(function(v, e) {
        switch (e.getAction()) {
            case e.ACTION_DOWN:
                toasts(e.getRawX().toFixed(0) + " , " + e.getRawY().toFixed(0));
                zuobiao[num - 1] = [e.getRawX().toFixed(0), e.getRawY().toFixed(0)]
                num = num + 1
                break
            case e.ACTION_MOVE:
                toasts(e.getRawX().toFixed(0) + " , " + e.getRawY().toFixed(0));
                break
            case e.ACTION_UP:
                if (num < 22) {
                    toasts("现在请按压第" + num + "个按键")
                    // toasts(e.getRawX().toFixed(0) + " , " + e.getRawY().toFixed(0));
                } else {
                    toasts("坐标获取完毕！")
                    files.createWithDirs(path)
                    files.write(path, "xy=[" + zuobiao + "];");
                    engines.stopAll();
                }
        }
        return true;
    });

} catch (e) {
    confirm("运行出错，请与开发者联系，以下是相关信息：\n" + e, "", function(a) {
        if (a) setClip(e);
        app.startActivity(app.intent({
            action: "VIEW",
            data: "mqqwpa://im/chat?chat_type=wpa&uin=257325554"
        }));
    });
}