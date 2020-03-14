let options = document.getElementsByClassName('options');
let contentOp = document.getElementsByClassName('contentOp');
let option = document.getElementsByClassName('option') 

function showContent(content){
    document.getElementById('content1').style.display = "none";
    for (const key in contentOp) {
        if (contentOp.hasOwnProperty(key)) {
            contentOp[key].style.display = "none";
        }
    }
    setTimeout(()=>{
        document.getElementById('content1').style.display = "flex";
        document.getElementById(content).style.display = "block";
    },500);
}

function animSelected(selected){
    for (const key in option) {
        if (option.hasOwnProperty(key)) {
            option[key].style.transform = "scale(0.8)";
        }
    }
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            options[key].style.backgroundColor = "transparent";
            options[key].style.border = "none";
        }
    }
    document.getElementsByClassName(selected)[0].style.transform = "scale(1.4)";
    document.getElementById(selected).style.backgroundColor = "lightgreen";
    document.getElementById(selected).style.border = "3px solid white";
}

for (let x = 0; x < options.length; x++) {
    options[x].addEventListener('click', () => {
        switch (options[x].id) {
            case 'op1':
                document.getElementById('container').style.transform = "rotate(135deg)";
                animSelected('op1');
                for (const key in options) {
                    if (options.hasOwnProperty(key)) {
                        options[key].style.transform = "rotate(-135deg)";
                        
                        showContent('cnt1');
                    }
                }
                break;
            case 'op2':
                document.getElementById('container').style.transform = "rotate(45deg)";
                animSelected('op2');
                for (const key in options) {
                    if (options.hasOwnProperty(key)) {
                        options[key].style.transform = "rotate(-45deg)";
                        showContent('cnt2');
                    }
                }
                break;
            case 'op3':
                document.getElementById('container').style.transform = "rotate(225deg)";
                animSelected('op3');
                for (const key in options) {
                    if (options.hasOwnProperty(key)) {
                        options[key].style.transform = "rotate(-225deg)";
                        showContent('cnt3');
                    }
                }
                break;
            case 'op4':
                document.getElementById('container').style.transform = "rotate(315deg)";
                animSelected('op4');
                for (const key in options) {
                    if (options.hasOwnProperty(key)) {
                        options[key].style.transform = "rotate(-315deg)";
                        showContent('cnt4');
                    }
                }
                break;
        }
    })
}