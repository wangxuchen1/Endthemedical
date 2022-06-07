window.onload = function () {
    var month = document.getElementsByClassName("month")
    var rec = document.getElementsByClassName("rec")
    var sou = document.getElementsByClassName("sou")
    var res = document.getElementsByClassName("res")
    var wei = document.getElementsByClassName("wei")
    var left_1 = document.getElementsByClassName("left_1")
    var left_2 = document.getElementsByClassName("left_2")
    var left_3 = document.getElementsByClassName("left_3")
    var left_4 = document.getElementsByClassName("left_4")
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var bbox = document.getElementById("bbox")
    // var week = document.getElementsByClassName("week")
    // console.log(left_1)
    fun();

    function fun() {
        for (var i = 14; i < month.length; i++) {
            month[i].style.backgroundColor = 'rgb(249,249,249)'
            month[i].style.color = 'rgb(170,170,170)'
        }
        for (var i = 0; i < 7; i++) {
            month[i].style.backgroundColor = 'rgb(255,255,255)'
            month[i].style.color = 'rgb(151,196,255)'
        }

        for (var i = 0; i < 14; i++) {
            var num = 1;
            month[i].onclick = function () {
                num++;
                if (num % 2 == 0) {

                    this.style.backgroundColor = "rgb(0,110,255)"
                    this.style.color = "white"

                } else {
                    this.style.backgroundColor = ""
                    this.style.color = "rgb(0,110,255)"
                }
            }
        }
    }
    btn();

    function btn() {
        btn1.onclick = function () {
            btn2.innerHTML = "保存设置"
            btn2.onclick = function () {
                bbox.style.display = "none"
                window.location.href="Home-page.html" 
            }
            this.style.display = "none";
            for (var i = 0; i < 7; i++) {
                month[i].style.backgroundColor = "rgb(249,249,249)"

            }
            for (var j = 14; j < month.length; j++) {
                var num = 1;
                month[j].style.backgroundColor = "white"
                month[j].style.color = "rgb(0,110,255)"
                month[j].onclick = function () {
                    num++;
                    if (num % 2 == 0) {

                        this.style.backgroundColor = "rgb(0,110,255)"
                        this.style.color = "white"

                    } else {
                        this.style.backgroundColor = ""
                        this.style.color = "rgb(0,110,255)"
                    }
                }
            }

            for (var i = 0; i < wei.length; i++) {
                wei[i].onclick = function () {
                    for (let j = 0; j < wei.length; j++) {
                        wei[j].style.backgroundColor = "white"
                        wei[j].style.color = "rgb(0,110,255)"
                    }
                    this.style.backgroundColor = "rgb(0,110,255)"
                    this.style.color = "white"
                    left_2[0].style.zIndex = 700;
                    left_4[0].style.zIndex = 0;
                    left_3[0].style.zIndex = 0;
                    left_1[0].style.zIndex = 0;
                }

            }

         
        }



    }


    for (var i = 0; i < rec.length; i++) {
        rec[i].onclick = function () {
            for (let j = 0; j < week.length; j++) {
                rec[j].style.backgroundColor = "white"
                rec[j].style.color = "rgb(0,110,255)"
            }
            this.style.backgroundColor = "rgb(0,110,255)"
            this.style.color = "white"
            left_4[0].style.zIndex = 700;
            left_1[0].style.zIndex = 0;
            left_3[0].style.zIndex = 0;
            left_2[0].style.zIndex = 0;
        }

    }
    for (var i = 0; i < res.length; i++) {
        res[i].onclick = function () {
            for (let j = 0; j < week.length; j++) {
                res[j].style.backgroundColor = "white"
                res[j].style.color = "rgb(0,110,255)"
            }
            this.style.backgroundColor = "rgb(0,110,255)"
            this.style.color = "white"
            left_4[0].style.zIndex = 700;
            left_1[0].style.zIndex = 0;
            left_3[0].style.zIndex = 0;
            left_2[0].style.zIndex = 0;
        }

    }
    for (var i = 0; i < sou.length; i++) {
        sou[i].onclick = function () {
            for (let j = 0; j < sou.length; j++) {
                sou[j].style.backgroundColor = "white"
                sou[j].style.color = "rgb(0,110,255)"
            }
            this.style.backgroundColor = "rgb(0,110,255)"
            this.style.color = "white"
            left_3[0].style.zIndex = 700;
            left_4[0].style.zIndex = 0;
            left_1[0].style.zIndex = 0;
            left_2[0].style.zIndex = 0;
        }

    }



    var week = document.getElementsByClassName("week")
  



}