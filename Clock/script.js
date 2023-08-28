setInterval(
    () =>{
        let hr=document.getElementById("hrs");
        let min=document.getElementById("mins");
        let sec=document.getElementById("sec");
        let curtime= new Date();
        hr.innerHTML=hours12(curtime)
        min.innerHTML=curtime.getMinutes();
        sec.innerHTML=curtime.getSeconds();

    }
    
,1000)
function hours12(date) { return (date.getHours() + 24) % 12 || 12; }