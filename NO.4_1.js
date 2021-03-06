<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Task18</title>
    <style>
    input,
    button,
    .block {
        display: inline-block;
    }
    
    input {
        width: 200px;
    }
    
    #block-array {
        margin-top: 5px;
    }
    
    .block {
        width: 50px;
        /*height: 50px;*/
        line-height: 50px;
        margin-right: 5px;
        background-color: #f00;
        color: #fff;
        text-align: center;
        font-size: 2em;
    }
    
    #push {
        margin-right: 20px;
    }
    </style>
</head>

<body>
    <input id="number" type="number">
    <button class="btn" id="unshift">左侧入</button>
    <button class="btn" id="push">右侧入</button>
    <button class="btn" id="shift">左侧出</button>
    <button class="btn" id="pop">右侧出</button>
    <div id="block-array">
        <!--         <div class="block">11</div>
        <div class="block">20</div> -->
    </div>
    <script>
    var btns = $(".btn");
    var inputNumber = $("#number");
    var blkArray = $("#block-array");
    var array = [];
    function $(element) {
        if (typeof element != "string") return;
        if (element.indexOf("#") == 0) {
            return document.getElementById(element.substring(1));
        }
        if (element.indexOf(".") == 0) {
            return document.getElementsByClassName(element.substring(1));
        }
    }
    function processArray() {
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(e) {
                var number = inputNumber.value;
                if (isNaN(number)) {
                    alert("非法字符！请重新输入！");
                    return;
                }
                switch (e.target.id) {
                    case "unshift":
                        if (number == "") {
                            alert("输入不能为空");
                            return;
                        }
                        array.unshift(number);
                        console.log("unshift");
                        break;
                    case "shift":
                        array.shift();
                        console.log("shift");
                        break;
                    case "push":
                        if (number == "") {
                            alert("输入不能为空");
                            return;
                        }
                        array.push(number);
                        console.log("push");
                        break;
                    case "pop":
                        array.pop();
                        console.log("pop");
                        break;
                }
                createBlockArray();
            })
        }
    }
    function createBlockArray() {
        clearBlockArray();
        if (array.length == 0) {
            alert("数组队列为空");
            return;
        }
        array.forEach(function(item, index) {
            var blk = document.createElement("div");
            blk.className = "block";
            blk.innerHTML = item;
            blk.height = item + "0px";
            blkArray.appendChild(blk);
        })
    }
    function clearBlockArray() {
        blkArray.innerHTML = "";
    }
    window.onload = function() {
        processArray();
    };
    </script>
</body>

</html>
