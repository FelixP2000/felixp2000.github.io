window.onload=()=>{

    send_msg_to_author.action = "";
};


function povtori(g) {
    var array = g.split("");
    var rslt = 0;
    for(i=0; i<array.length;i++){
        if (array[i]=="@"){
            rslt+=1;
        }
    }
    return rslt;
}
function probeli(g) {
    var array = g.split("");
    var rslt = 0;
    for(i=0; i<array.length;i++){
        if (array[i]==" "){
            rslt=1;
            break;
        }
    }
    return rslt;
}

window.addEventListener('submit', ()=>{
    let formdata = new FormData(send_msg_to_author);

    let mails = formdata.get('mail');
    let names = formdata.get('names');
    let msg = formdata.get('text_msg');

    var povtoris = povtori(mails);
    var probelis = probeli(mails);
    if (povtoris>1 || probelis>0){
        alert("Введите верный E-mail!");
        return;
    }
    else if (mails==""){
        alert("Введите E-mail!");
        return;
    }
    else{
        if (names==""){
            alert("Введите своё имя!");
            return;
        }
        else if (msg==""){
            alert("Введите сообщение!");
            return;
        }
        else{
            send_msg_to_author.action = "http://f0927537.xsph.ru/";
        }
        
    };
});