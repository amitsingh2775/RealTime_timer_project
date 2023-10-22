const clock=document.getElementById('clock');
// const clock=document.querySelector('#clock');

// for run clock each second use this method
// setInterval(function(){->body<-},1000<- har ek second me)
setInterval(function(){
        let date=new Date();
        clock.innerHTML=date.toLocaleTimeString();
    } ,1000)