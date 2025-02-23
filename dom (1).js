function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const dayOfMonth = String(now.getDate()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, '0'); 

    document.getElementById('dayOfMonth').textContent = dayOfMonth;
    document.getElementById('hours').textContent = hours ;
    document.getElementById('minutes').textContent = minutes ;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock, 1000);
