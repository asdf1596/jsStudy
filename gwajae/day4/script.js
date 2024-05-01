var pro = document.getElementById("pro");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var next = document.getElementById("next");
var num1 = 0;
var num2 = 0;
var com1 = 0;
var com2 = 0;
var answer = 0;
var mainbox = document.getElementById("mainbox");
ans3.style.display = "none";
function day4() {
    next.innerText = "next";
    ans1.style.backgroundColor = "gray";
    ans2.style.backgroundColor = "gray";
    ans3.style.backgroundColor = "gray";
    next.style.display = "none";
    mainbox.style.backgroundColor = "gray";
    ans3.style.display = "none";
    com1 = Math.floor(Math.random() * 10);
    com2 = Math.floor(Math.random() * 10);
    pro.innerText = com1 + " + " + com2;
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    while (num1 == num2) {
        num2 = Math.floor(Math.random() * 10);
    }
    ans1.innerText = num1;
    ans2.innerText = num2;
    if (com1 + com2 != num1 && com1 + com2 != num2) {
        ans3.style.display = "flex";
        answer = 3;
    } else if (com1 + com2 == num1) {
        answer = 1;
    } else if (com1 + com2 == num2) {
        answer = 2;
    }
}
function check(ans) {
    if (answer == ans) {
        next.style.display = "flex";
        mainbox.style.backgroundColor = "green";
        switch (ans) {
            case 1:
                ans1.style.backgroundColor = "green";
                ans2.style.backgroundColor = "red";
                break;
            case 2:
                ans1.style.backgroundColor = "red";
                ans2.style.backgroundColor = "green";
            default:
                ans1.style.backgroundColor = "red";
                ans2.style.backgroundColor = "red";
                ans3.style.backgroundColor = "green";
                break;
        }
    } else {
        next.style.display = "flex";
        next.innerText = "retry";
        mainbox.style.backgroundColor = "red";
        switch (ans) {
            case 1:
                ans1.style.backgroundColor = "green";
                ans2.style.backgroundColor = "red";
                break;
            case 2:
                ans1.style.backgroundColor = "red";
                ans2.style.backgroundColor = "green";
            default:
                ans1.style.backgroundColor = "red";
                ans2.style.backgroundColor = "red";
                ans3.style.backgroundColor = "green";
                break;
        }
    }
}
day4();
next.addEventListener("click", function () {
    day4();
});
ans1.addEventListener("click", function () {
    check(1);
});
ans2.addEventListener("click", function () {
    check(2);
});
ans3.addEventListener("click", function () {
    check(3);
});
