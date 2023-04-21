let workTittle = document.getElementById('foco');
let breakTittle = document.getElementById('pausa');
let workTime = 25;
let breakTime = 5;
let seconds = "00"


window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}


function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    workMinutes = breakMinutes;
                    breakCount++

                    // change the painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    // continue work
                    workMinutes = workTime;
                    breakCount++

                    // change the painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    setInterval(timerFunction, 1000); // 1000 = 1s 
}
