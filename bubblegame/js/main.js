let start = document.getElementById('start-btn');
start.addEventListener('click', function () {
    setInterval(() => {
        let userScore=parseInt(document.getElementById('score').innerText);
        document.getElementById('score').innerText=userScore=userScore;
        let gamepad = document.getElementById('gamepad');
        let audio = document.getElementById('sound');
        let bubble = document.getElementById('bubble');
        let span = document.createElement('span');
        span.className="bubble";
        span.style.position='absolute'
        span.style.marginTop = `${randomPlaces(550)}px`;
        span.style.marginLeft = `${randomPlaces(680)}px`;
        gamepad.appendChild(span);
        span.addEventListener('click',function(e){
            e.target.remove();
            userScore+=1;
            document.getElementById('score').innerText=parseInt(userScore);
            audio.play();
        })
    }, 1000);
})

let randomPlaces = function(number){
    let num = Math.random();
    let converted = num*number;
    let roundedNum= Math.round(converted);
    return roundedNum;
}

