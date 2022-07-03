function d(el){
    return document.getElementById(el);
}
ifvisible.setIdleDuration(6);

ifvisible.on('statusChanged', function(e){
    d("result").innerHTML += (e.status+"<br>");
});

ifvisible.idle(function(){
    d("result2").innerHTML = "(-_-) Good bye. ZzzZZzz...";
    document.body.style.opacity = 0.5;
});
ifvisible.blur(function() {
    d("result2").innerHTML = "(-_o) Where did you go?";
    document.body.style.opacity = 0.5;
});
ifvisible.wakeup(function(){
    d("result2").innerHTML = "(O_o) Hey!, you woke me up.";
    document.body.style.opacity = 1;
});

ifvisible.onEvery(0.5, function(){
    // Clock, as simple as it gets
    var h = (new Date()).getHours();
    var m = (new Date()).getMinutes();
    var s = (new Date()).getSeconds();
    h = h < 10? "0"+h : h;
    m = m < 10? "0"+m : m;
    s = s < 10? "0"+s : s;
    // Update clock
    d("result3").innerHTML = (h+':'+m+':'+s);
});

setInterval(function(){
    var info = ifvisible.getIdleInfo();
    // Give 3% margin to stabilaze user output
    if(info.timeLeftPer < 3){
        info.timeLeftPer = 0;
        info.timeLeft = ifvisible.getIdleDuration();
    }
    d("seconds").innerHTML = parseInt(info.timeLeft / 1000), 10;
    d("idlebar").style.width = info.timeLeftPer+'%';
}, 100);