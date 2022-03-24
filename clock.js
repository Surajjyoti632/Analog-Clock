/*let today=new Date();
let time=today.getHours();
console.log(time);
*/
let clock=()=> {
      d =new Date();
      hrs=d.getHours();
      mins=d.getMinutes();
      secs=d.getSeconds();
      hrotation=30*hrs +mins/2;
      mrotation=6*mins;
      srotation=6*secs;

      hour.style.transform=`rotate(${hrotation}deg)`;
      minute.style.transform=`rotate(${mrotation}deg)`;
      second.style.transform=`rotate(${srotation}deg)`;

}
setInterval(clock,1000);

        
