document.addEventListener("DOMContentLoaded", () => {

    var date = new Date();

    const time = Intl.DateTimeFormat("ru",{
        "hour":"numeric",
        "minute":"numeric",
        "second":"numeric"
    }).format(date);

    date = Intl.DateTimeFormat("ru",{
        "day":"numeric",
        "month":"numeric"
    }).format(date);

    if (date=="28.02"){
        document.querySelector("#background > img").src="1.png";
    }
    
});
