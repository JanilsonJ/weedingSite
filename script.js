const target = new Date('2025-09-27T10:30:00');
const ids = ['days','hours','minutes','seconds'];
function tick(){
    const now = new Date(), diff = target - now;
    const d = Math.floor(diff/86400000), h = Math.floor(diff/3600000)%24;
    const m = Math.floor(diff/60000)%60, s = Math.floor(diff/1000)%60;
    [d,h,m,s].forEach((v,i)=>{
        const el = document.getElementById(ids[i]);
        const num = el.querySelector('.number');
        if (num.textContent != v) {
            num.textContent = v;
            el.classList.add('flip');
            setTimeout(()=> el.classList.remove('flip'), 700);
        }
    });
}
tick(); setInterval(tick, 1000);
