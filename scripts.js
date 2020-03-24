let options = document.getElementsByClassName('options');
let contentOp = document.getElementsByClassName('contentOp');
let option = document.getElementsByClassName('option');

for (const x in option) {
    if (option.hasOwnProperty(x)) {
        option[x].addEventListener('click', () => {
            // document.getElementById('container').style.animationName = "startPresentation";
            document.getElementById('container').style.animationPlayState = "running";
            setTimeout(() => {
                document.getElementById('content-container').style.display = "block";
                document.getElementsByClassName('container')[0].style.transform = "rotate(45deg) scale(0.75)"
                // document.getElementsByClassName('container')[0].style.transform = "27vw";
                // document.getElementsByClassName('container')[0].style.height = "27vw";
            }, 500);
        });
    }
}

for (const x in options) {
    if (options.hasOwnProperty(x)) {
        options[x].addEventListener('click', () => {
            for (const y in option) {
                if (options.hasOwnProperty(y)) {
                    option[y].style.backgroundColor = "#9b9b9b49";
                }
            }
            option[x].style.backgroundColor = "#920d4fcb"

            switch (options[x].id) {
                case 'op1':
                    hideContent();
                    document.getElementById('cnt1').style.display = "block";
                    break;
                case 'op2':
                    hideContent();
                    document.getElementById('cnt2').style.display = "block";
                    break;
                case 'op3':
                    hideContent();
                    document.getElementById('cnt3').style.display = "block";
                    break;
                case 'op4':
                    hideContent();
                    document.getElementById('cnt4').style.display = "block";
                    break;
    
                default:
                    break;
            }
        });
    }
}

function hideContent(){
    for (const key in contentOp) {
        if (contentOp.hasOwnProperty(key)) {
            contentOp[key].style.display = "none";
        }
    }
}