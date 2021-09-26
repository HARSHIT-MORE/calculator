let screen = document.getElementById('output');
buttons = document.querySelectorAll('button');
let screenValue = '';
let input_text = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'back'){
            screenValue=""
            for(var i=0;i<screen.value.length-1;i++){
                  screenValue+=(screen.value[i])
            }

            screen.value=screenValue;
        }
      
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        // screen.value=input_text;
    })
}

