var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var select = 99;
var com = 0;
var rspbox = document.getElementById("rspbox");
var ending = document.getElementById("ending");
var end2 = document.getElementById("end2");
var trynum = document.getElementById("trynum");
var trycount = 10;
var retry = document.getElementById("retry");
var touch = document.getElementById("touch");
var gameend = document.getElementById("gameend");
const scissors = document.getElementById("scissors"); //-1
const rock = document.getElementById("rock"); //0
const paper = document.getElementById("paper"); //1
if (trycount == 10) {
    ending.style.display = "none";
}
retry.addEventListener("click", function () {
    trycount = 10;
    start();
});
scissors.addEventListener("click", function () {
    select = -1;
    end();
});
rock.addEventListener("click", function () {
    select = 0;
    end();
});
paper.addEventListener("click", function () {
    select = 1;
    end();
});
function start() {
    gameend.style.display = "none";
    ending.style.display = "";
    trynum.style.display = "";
    touch.style.display = "";
    end2.style.display = "none";
    retry.style.display = "none";
    rspbox.style.display = "";
    ending.style.display = "";
    p1.innerText = 0;
    p2.innerText = 0;
    ending.style.display = "none";
    trynum.innerText = "남은 횟수 : 10";
}
function end() {
    ending.style.display = "";
    com = Math.floor(Math.random() * 10);
    if (com <= 2) {
        com = -1;
    } else if (com >= 7) {
        com = 1;
    } else {
        com = 0;
    }
    if (select == com) {
        ending.innerText = "무승부";
    } else if (
        (select == -1 && com == 0) ||
        (select == 0 && com == -1) ||
        (select == 1 && com == -1)
    ) {
        ending.innerText = "컴퓨터 승리";
        p2.innerText = parseInt(p2.innerText) + 1;
    } else {
        ending.innerText = "플레이어 승리";
        p1.innerText = parseInt(p1.innerText) + 1;
    }
    trycount--;
    trynum.innerText = "남은 횟수 : " + trycount;
    if (trycount == 0) {
        if (parseInt(p2.innerText) > parseInt(p1.innerText)) {
            end2.innerText = "게임에서 졌습니다.";
        } else if (parseInt(p2.innerText) == parseInt(p1.innerText)) {
            end2.innerText = "무승부입니다.";
        } else {
            end2.innerText = "게임에서 이겼습니다.";
        }
        gameend.style.display = "flex";
        trynum.style.display = "none";
        touch.style.display = "none";
        end2.style.display = "flex";
        retry.style.display = "flex";
        rspbox.style.display = "none";
        ending.style.display = "none";
    }
}
