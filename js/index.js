/*
 * @Author: [JunJie-maker] [2573014631@qq.com]
 * @Date: 2022-09-05 13:47:54
 * @LastEditors: [JunJie-maker] [2573014631@qq.com]
 * @LastEditTime: 2022-09-06 00:17:19
 * @FilePath: \中秋节项目\js\index1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let btn1 = document.getElementById("button1")
let btn1_1 = document.getElementById("button1_1")
let vid = document.getElementById("video")
let left = document.getElementById("left")
let right = document.getElementById("right")
let pop = document.getElementById("pop")
let ribt = document.getElementById("ribt")
let username = document.getElementById("user_name")
let text = username.innerHTML
let userName = document.getElementById("username")
let nametext = 0
let sumbit = document.getElementById("sumbit")
let top1 = document.getElementById("top1")
let musicbtn = document.getElementById("musicbtn")
let music2 = document.getElementById("music2")
let music1 = document.getElementById("music1")
let music = document.getElementById("music")
let btn2 = document.getElementById("button2")
let tool = document.getElementById("tool")
let eat = document.getElementById("eat")
let count1 = false
let count2 = false
let count3 = false
const active = document.querySelector('.active')
active.addEventListener('mousedown', function (e) {
    const left = e.clientX - e.currentTarget.offsetLeft
    const top = e.clientY - e.currentTarget.offsetTop
    const rip = document.createElement('span')
    rip.style.left = left + 'px'
    rip.style.top = top + 'px'
    active.appendChild(rip)
    setTimeout(() => { rip.remove() }, 750)
})
ribt.onclick = function () {
    if (count1 === false) {
        pop.style.animation = "pop1 .5s ease-in-out forwards"
        count1 = true
    }
    else {
        pop.style.animation = "pop2 .5s ease-in-out forwards"
        count1 = false
    }
}
btn1.onclick = function () {
    vid.style.display = "none"
    text = text || 0
    if (text === 0 || text === "USERNAME") {
        pop.style.animation = "pop1 .5s ease-in-out forwards"
        setTimeout(function () {
            pop.style.transition = "none"
        }, 500)
        count2 = true
    }
    else {
        btn1.classList.remove("act")
        left.style.marginLeft = "-28vw"
        right.style.marginRight = "-28vw"
        right.style.transition = "all 3s"
        left.style.transition = "all 3s"
        ribt.style.left = "98%"
        ribt.style.transition = "all 3s"
        setTimeout(function () {
            left.style.transition = "none"
            right.style.transition = "none"
            ribt.style.transition = "none"
        }, 3500)
    }
}
function inInput(that) {
    userName.value = ""
    top1.style.boxShadow = "0 0 5px 0px #fcf1ba"
    userName.value = that.value
    nametext = userName.value
}
function outInput(that) {
    userName.value = that.value
    nametext = userName.value
    nametext = nametext || 0
    if (nametext !== 0) {
        if (String(nametext).length >= 1 && String(nametext).length <= 6) {
            top1.style.boxShadow = "0 0 5px 2px #03ac61"
        }
        else {
            userName.value = "请输入小于六位的大名"
            top1.style.boxShadow = "0 0 5px 2px #ad200f"
        }
    }
    else {
        userName.value = "阁下请输入4~12位的大名"
        top1.style.boxShadow = "0 0 5px 2px #ad200f"
    }
}

sumbit.onclick = function () {
    nametext = nametext || 0
    if (nametext !== 0) {
        if (String(nametext).length >= 1 && String(nametext).length <= 6) {
            userName.value = nametext
            text = nametext
            username.innerHTML = text
            pop.style.animation = "pop2 .5s ease-in-out forwards"
            setTimeout(function () {
                pop.style.transition = "none"
            }, 500)
            count1 = false;
        }
        else {
            userName.value = "请输入小于六位的大名"
        }
    }
    else {
        userName.value = "阁下请输入4~12位的大名"
    }
}
let ul1 = document.getElementById("ul1")
let oList1 = ul1.querySelectorAll("li")
let ul2 = document.getElementById("ul2")
let oList2 = ul2.querySelectorAll("li")
let ul3 = document.getElementById("ul3")
let oList3 = ul3.querySelectorAll("li")
let ul4 = document.getElementById("ul4")
let oList4 = ul4.querySelectorAll("li")
let ul5 = document.getElementById("ul5")
let oList5 = ul5.querySelectorAll("li")
let ul6 = document.getElementById("ul6")
let oList6 = ul6.querySelectorAll("li")
let ul7 = document.getElementById("ul7")
let oList7 = ul7.querySelectorAll("li")
let ul8 = document.getElementById("ul8")
let oList8 = ul8.querySelectorAll("li")
let ul9 = document.getElementById("ul9")
let oList9 = ul9.querySelectorAll("li")
let ul10 = document.getElementById("ul10")
let oList10 = ul10.querySelectorAll("li")
let ul11 = document.getElementById("ul11")
let oList11 = ul11.querySelectorAll("li")
let ul12 = document.getElementById("ul12")
let oList12 = ul12.querySelectorAll("li")
let ul13 = document.getElementById("ul13")
let oList13 = ul13.querySelectorAll("li")
let ratebg = document.getElementById("ratebg")
musicbtn.onclick = function () {
    if (count3 === false) {
        music2.classList.remove("act")
        music1.classList.add("act")
        musicbtn.style.animation = "music 3s linear infinite"
        count3 = true
        music.play()
        for (let i = 0; i < oList1.length; i++) {
            for (let j = 0; j < oList1.length; j++) {
                if (j === i) {
                    setTimeout(() => {
                        oList1[i].style.animation = "dancing1 .8s ease-in-out infinite"
                    }, 110 * j);
                    setTimeout(() => {
                        oList2[i].style.animation = "dancing2 .8s ease-in-out infinite"
                    }, 140 * j);
                    setTimeout(() => {
                        oList3[i].style.animation = "dancing3 .9s ease-in-out infinite"
                    }, 160 * j);
                    setTimeout(() => {
                        oList4[i].style.animation = "dancing4 .9s ease-in-out infinite"
                    }, 180 * j);
                    setTimeout(() => {
                        oList5[i].style.animation = "dancing5 1s ease-in-out infinite"
                    }, 200 * j);
                    setTimeout(() => {
                        oList6[i].style.animation = "dancing6 1s ease-in-out infinite"
                    }, 220 * j);
                    setTimeout(() => {
                        oList7[i].style.animation = "dancing7 1.2s ease-in-out infinite"
                    }, 240 * j);
                    setTimeout(() => {
                        oList8[i].style.animation = "dancing6 1s ease-in-out infinite"
                    }, 220 * j);
                    setTimeout(() => {
                        oList9[i].style.animation = "dancing5 1s ease-in-out infinite"
                    }, 200 * j);
                    setTimeout(() => {
                        oList10[i].style.animation = "dancing4 .9s ease-in-out infinite"
                    }, 180 * j);
                    setTimeout(() => {
                        oList11[i].style.animation = "dancing3 .9s ease-in-out infinite"
                    }, 160 * j);
                    setTimeout(() => {
                        oList12[i].style.animation = "dancing2 .8s ease-in-out infinite"
                    }, 140 * j);
                    setTimeout(() => {
                        oList13[i].style.animation = "dancing1 .8s ease-in-out infinite"
                    }, 120 * j)
                }
                else {
                    ratebg.style.bottom = "-8%"
                }
            }
        }
    }
    else {
        music2.classList.add("act")
        music1.classList.remove("act")
        musicbtn.style.animationPlayState = "paused"
        for (let i = 0; i < oList1.length; i++) {
            for (let j = 0; j < oList1.length; j++) {
                if (j === i) {
                    setTimeout(() => {
                        oList1[i].style.animationPlayState = "paused"
                    }, 110 * j)
                    setTimeout(() => {
                        oList2[i].style.animation = "paused"
                    }, 140 * j)
                    setTimeout(() => {
                        oList3[i].style.animation = "paused"
                    }, 160 * j)
                    setTimeout(() => {
                        oList4[i].style.animation = "paused"
                    }, 180 * j)
                    setTimeout(() => {
                        oList5[i].style.animation = "paused"
                    }, 200 * j)
                    setTimeout(() => {
                        oList6[i].style.animation = "paused"
                    }, 220 * j)
                    setTimeout(() => {
                        oList7[i].style.animation = "paused"
                    }, 240 * j)
                    setTimeout(() => {
                        oList8[i].style.animation = "paused"
                    }, 220 * j)
                    setTimeout(() => {
                        oList9[i].style.animation = "paused"
                    }, 200 * j)
                    setTimeout(() => {
                        oList10[i].style.animation = "paused"
                    }, 180 * j)
                    setTimeout(() => {
                        oList11[i].style.animation = "paused"
                    }, 160 * j)
                    setTimeout(() => {
                        oList12[i].style.animation = "paused"
                    }, 140 * j)
                    setTimeout(() => {
                        oList13[i].style.animation = "paused"
                    }, 120 * j)
                }
                else {
                    ratebg.style.bottom = "-100%"
                }
            }
        }
        count3 = false
        music.pause()
    }
}
btn2.onclick = function () {
    let colr1 = document.getElementById("btn2_bg")
    let colr2 = document.getElementById("btn4_bg")
    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")
    let img3 = document.getElementById("img3")
    let img4 = document.getElementById("img4")
    colr1.classList.add("button3")
    colr2.classList.add("button3")
    img1.classList.remove("act")
    img2.classList.add("act")
    img3.classList.add("act")
    img4.classList.add("act")
    tool.style.animation = "tool 4s .5s ease-in-out forwards"
    eat.style.animation = "eat 6s 4.5s ease-out forwards"
    setTimeout(function () {
        right.style.transition = "all 3s"
        left.style.marginLeft = "4vw"
        right.style.marginRight = "4vw"
        left.style.transition = "all 3s"
        ribt.style.left = "82%"
        ribt.style.transition = "all 3s"
    }, 11000)
    setTimeout(function () {
        left.style.transition = "none"
        right.style.transition = "none"
        ribt.style.transition = "none"
    }, 14500)
    setTimeout(function () {
        btn1_1.classList.add("act")
    }, 14000)
}
let logo = document.getElementById("logo")
let copyright = document.getElementById("copyright")
let count4 = false;
logo.onclick = function () {
    if (count4 === false) {
        copyright.style.top = "0.26vw"
        copyright.style.transition = "all 1s"
        count4 = true;
    }
    else {
        copyright.style.top = "-24vw"
        count4 = false;
    }
}