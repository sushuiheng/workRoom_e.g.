<!DOCTYPE>
<html>
<head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
</head>
<body>

<ul id="source">
    <li>北京空气质量：<b>90</b></li>
    <li>上海空气质量：<b>70</b></li>
    <li>天津空气质量：<b>80</b></li>
    <li>广州空气质量：<b>50</b></li>
    <li>深圳空气质量：<b>40</b></li>
    <li>福州空气质量：<b>32</b></li>
    <li>成都空气质量：<b>90</b></li>
</ul>

<ul id="resort">
    <!-- 
    <li>第一名：北京空气质量：<b>90</b></li>
    <li>第二名：北京空气质量：<b>90</b></li>
    <li>第三名：北京空气质量：<b>90</b></li>
     -->

</ul>

<button id="sort-btn">排序</button>

<script type="text/javascript">
    /**
     * getData方法
     * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
     * 返回一个数组，格式见函数中示例
     */
    function getData() {
        /*
         coding here
         */
        /*
         data = [
         ["北京", 90],
         ["北京", 90]
         ……
         ]
         */
        var li=document.getElementById("source").getElementsByTagName("li");
        var data=[].map.call(li,function(value){
            var index=value.innerText.indexOf("空气质量");
            var str1=value.innerText.slice(0,index);
            var str2=value.getElementsByTagName("b")[0].innerText;
            return [str1,str2];
        });
        return data;
    }
    getData();
    /**
     * sortAqiData
     * 按空气质量对data进行从小到大的排序
     * 返回一个排序后的数组
     */
    function sortAqiData(data) {
        return data.sort(function(a,b){
            return a[1]-b[1];
        });
    }
    /**
     * render
     * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
     * 格式见ul中的注释的部分
     */
    function render(data) {
        var pos=["一","二","三","四","五","六","七"];
        var str="";
        data.forEach(function(value,index){
            str+="<li>第"+pos[index]+"名："+value[0]+"空气质量：<b>"+value[1]+"</b></li>";
        });
        document.getElementById("resort").innerHTML=str;
    }
    function btnHandle() {
        var aqiData = getData();
        aqiData = sortAqiData(aqiData);
        render(aqiData);
    }
    function init() {
        // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
        document.getElementById("sort-btn").addEventListener("click",btnHandle);
    }
    init();
</script>
</body>
</html>
