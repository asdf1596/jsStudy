function copy(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function create1() {
    let copyTxt = document.getElementById("copyTxt");

    let try1 = [
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        [97],
        [65],
        [64, 33, 35, 36, 38, 37],
    ];
    let try2 = [];
    let try3 = [];
    let try5 = [];
    let try6 = [];
    let a = document.getElementById("lenvalue").value;
    if (a < 5) {
        alert("길이는 5보다 커야 합니다.");
        console.log(5);
    } else if (a > 70) {
        alert("길이는 70보다 작아야 합니다.");
        console.log(70);
    } else {
        copyTxt.style.color = "black";
        for (let b = 1; b < 3; b++) {
            for (let c = 1; c <= 25; c++) {
                try1[b].push(try1[b][0] + c);
            }
        }
        let check1 = document.getElementById("check_btn1").checked;
        let check2 = document.getElementById("check_btn2").checked;
        let check3 = document.getElementById("check_btn3").checked;
        let check4 = document.getElementById("check_btn4").checked;
        try2 = [check1, check2, check3, check4];
        for (let b = 0; b < 4; b++) {
            if (try2[b]) {
                try3.push(try1[b]);
            }
        }

        let try4 = Math.floor(100 / try3.length);

        for (let c = 1; c <= try3.length; c++) {
            try5.push(try4 * c);
        }

        for (let b = 0; b < a; b++) {
            for (let c = 0; c < try3.length; c++) {
                if (Math.floor(Math.random() * 101) < try5[c]) {
                    console.log(try3[c]);
                    if (try3[c].length == 10) {
                        try6.push(
                            try3[c][
                                Math.floor(Math.random() * 101) % try3[c].length
                            ]
                        );
                    } else {
                        try6.push(
                            String.fromCharCode(
                                try3[c][
                                    Math.floor(Math.random() * 101) %
                                        try3[c].length
                                ]
                            )
                        );
                    }
                    break;
                }
            }
        }
        copyTxt.innerText = try6.join("");
    }
}
