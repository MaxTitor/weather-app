(()=>{let e=document.querySelector("body > div.center > form > input"),t=document.querySelector("body > div.center > form > select");const n=document.querySelector("body > div.center > form > button");let a=document.getElementById("weather-img"),o=document.getElementById("weather"),r=document.getElementById("weather-desc"),c=document.getElementById("temperature");async function d(e,t){let n="";n="http:"===location.protocol?await fetch("http://api.openweathermap.org/data/2.5/weather?q="+e+"&units="+t+"&appid=41821696537e54c713cabebb762dddad",{mode:"cors"}):await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units="+t+"&appid=41821696537e54c713cabebb762dddad",{mode:"cors"});const d=await n.json(),i=d.weather[0].icon;a.src="https://openweathermap.org/img/w/"+i+".png",o.innerHTML=d.weather[0].main,r.innerHTML=d.weather[0].description,c.innerHTML=d.main.temp}n.addEventListener("click",(function(){d(e.value,t.value)})),d("tokyo","imperial")})();