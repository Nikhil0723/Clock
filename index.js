setInterval(() => {
    d = new Date()
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

   hRotaion = 30*htime + mtime/2
   mRotaion = 6*mtime
   sRotaion = 6*stime

   hours.style.transform = `rotate(${hRotaion}deg)`
   min.style.transform = `rotate(${mRotaion}deg)`
   sec.style.transform = `rotate(${sRotaion}deg)`


}, 1000);


