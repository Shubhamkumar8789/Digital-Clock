 /* window kulte he load hoga ye function*/
 window.onload =() =>{
    //buildclock ek method ya function hai 
    function buildclock(){
    const date=new Date();
    console.log(date);
    let hours=date.getHours(); // 0-23 format
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    // jab 10 say kam hogaa stating may 0 zero lagee gaa 
    hours=hours<10 ? "0" + hours :hours;
    minutes=minutes<10 ? "0" + minutes :minutes;
    seconds=seconds<10 ? "0" + seconds :seconds;
    document.querySelector('#clock-hours').innerText=hours; // hours fetch hour current by id ke dowra
    document.querySelector('#clock-minutes').innerText=minutes;
    document.querySelector('#clock-seconds').innerText=seconds;
    //setTimeout ek predefined function hai 
    // jo build clock method ko har ek sec pay call karee gaa
    setTimeout(buildclock,1000);
    }
    buildclock();
}