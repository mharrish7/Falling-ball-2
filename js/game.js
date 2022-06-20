
var ball = document.querySelector('.ball')

function lsmooth(){
    var left = parseInt(window.getComputedStyle(ball).getPropertyValue('left'));
    ball.style.left = left - 2 + 'px';
}

function rsmooth(){
    var left = parseInt(window.getComputedStyle(ball).getPropertyValue('left'));
    ball.style.left = left + 2 + 'px';
}

function moveleft(){
    for(var i = 0;i < 10;i++){
        setTimeout(lsmooth,10 * i);
    }
}

function moveright(){
    for(var i = 0;i < 10;i++){
        setTimeout(rsmooth,10 * i);
    }
}

document.addEventListener("keypress", function(e){
    if(e.key === 'a'){
        moveleft();
    }
    if(e.key === 'd'){
        moveright();
    }
})


document.addEventListener('keyup',function(){
    console.log('s');
})

var blockc = document.querySelector('.block');

function blockmov(){
    var top = parseInt(window.getComputedStyle(blockc).getPropertyValue('top'));
    blockc.style.top = top - 2 + 'px';

}
// main one
document.querySelector('.but').addEventListener("click",function(){
    // intblock = setInterval(blockmov,1);
    createplat();
    var collison = setInterval(checkcollision,1);
})


var platlist = [];

function createplat(){
    for(var i=0; i < 7; i++){
        var block1 = document.createElement('div');
        var ran = Math.floor(Math.random()*5);
        platlist.push(block1);
        block1.style.width = "200px";
        block1.style.height = "20px";
        block1.style.position = "absolute";
        block1.style.top = 90*(i+1) + "px";
        block1.style.left =  150*(ran+1) + "px";
        block1.style.backgroundColor = "red";
        document.querySelector("body").appendChild(block1);
    }
}





function checkcollision(){
    for(var p of platlist){
        if(parseInt(window.getComputedStyle(ball).getPropertyValue('left')) >= parseInt(window.getComputedStyle(p).getPropertyValue('left')) && 
        parseInt(window.getComputedStyle(ball).getPropertyValue('left')) <= parseInt(window.getComputedStyle(p).getPropertyValue('left')) + 200 &&
        parseInt(window.getComputedStyle(ball).getPropertyValue('top')) + 50 >= parseInt(window.getComputedStyle(p).getPropertyValue('top')) &&
        parseInt(window.getComputedStyle(ball).getPropertyValue('top')) + 50 <= parseInt(window.getComputedStyle(p).getPropertyValue('top')) + 20
        ){
            clearInterval(fall);
            var fall = setInterval(illuse,1);       
         }
        else{
            
        }
    }
}


function illuse(){
    for(var p of platlist){
        var top = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        p.style.top = top - 2 + 'px';
    }
}
