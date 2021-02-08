// بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ

setInterval(() => {
date=new Date();
hours=date.getHours();
minutes=date.getMinutes();
seconds=date.getSeconds();
millisecond=date.getMilliseconds();

hourAngle=hours*30+minutes/2;
minuteAngle=minutes*6+seconds/6;
secondAngle=seconds*6;
// here all hour second minute are id in html 
hour.style.transform=`rotate(${hourAngle}deg)`;
minute.style.transform=`rotate(${minuteAngle}deg)`;
second.style.transform=`rotate(${secondAngle}deg)`;
//  console.log(minuteAngle);
 

},1000)

