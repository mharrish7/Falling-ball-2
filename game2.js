

var platlist = [];

var ball = document.querySelector('.ball');

var plat = document.createElement('div');
plat.style.width = "10rem";
plat.style.backgroundColor = "red";
plat.style.height = "2rem";
plat.style.left = "45rem";
plat.style.position = "absolute";
plat.style.top =  "15rem";
document.querySelector("body").appendChild(plat);

platlist.push(plat);

for(var i = 1; i < 6; i++){
    var plat = document.createElement('div');
    var ran = Math.floor(Math.random() * 7)
    plat.style.width = "10rem";
    plat.style.backgroundColor = "red";
    plat.style.height = "2rem";
    plat.style.left = (ran + 1) * 10 + "rem";
    plat.style.position = "absolute";
    plat.style.top =  (i+1) * 15 + "rem";
    document.querySelector("body").appendChild(plat);
    platlist.push(plat);

}


function moveleft(){
    var left = parseInt(window.getComputedStyle(ball).getPropertyValue('left'))
    ball.style.left = left - 10 + "px";
}


function moveright(){
    var left = parseInt(window.getComputedStyle(ball).getPropertyValue('left'))
    ball.style.left = left + 10 + "px";
}
var interval;

document.addEventListener('keypress',function(e){
    if(e.key == 'a'){
        moveleft();
    }
    if(e.key == 'd'){
        moveright();
    }
    checkc();
})



document.addEventListener('keyup',function(){
    clearInterval(interval);
})

function checkc(){
    for(p of platlist){
        console.log(parseInt(window.getComputedStyle(ball).getPropertyValue('top')),parseInt(window.getComputedStyle(ball).getPropertyValue('left')),parseInt(window.getComputedStyle(p).getPropertyValue('top')),parseInt(window.getComputedStyle(p).getPropertyValue('left')));
        if(parseInt(window.getComputedStyle(ball).getPropertyValue('top')) + 80 >= parseInt(window.getComputedStyle(p).getPropertyValue('top')) &&
        parseInt(window.getComputedStyle(ball).getPropertyValue('top')) + 80 <= parseInt(window.getComputedStyle(p).getPropertyValue('top')) + 32 &&
        parseInt(window.getComputedStyle(ball).getPropertyValue('left')) + 80 >= parseInt(window.getComputedStyle(p).getPropertyValue('left')) &&
        parseInt(window.getComputedStyle(ball).getPropertyValue('left')) + 80 <= parseInt(window.getComputedStyle(p).getPropertyValue('left')) + 160
        ){
            console.log('bound');
            sgrav(1);
        }
        else{
            sgrav(0);
        }
    }
}

var grav;

function sgrav(c){
    if(c==0){
        grav = setInterval(gravity,100);
    }
    else{
        clearInterval(grav);
    }
}

function gravity(){
    var top2 = parseInt(window.getComputedStyle(ball).getPropertyValue('top'));
    ball.style.top = top2 + 2 + "px";
}

var heart = document.createElement('img');
heart.setAttribute('src','heart.png');
document.querySelector('body').appendChild(heart);