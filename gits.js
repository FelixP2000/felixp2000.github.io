document.querySelector('#github_but').addEventListener('click', () => {
    document.querySelector('#code_window_git').hidden=false;
});

document.querySelector('#linux_but').addEventListener('click', () => {
    document.querySelector('#code_window_linux').hidden=false;
});

document.querySelector('#code_window_linux #exit').addEventListener('click', () => {
    document.querySelector('#code_window_linux').hidden=true;
});

document.querySelector('#code_window_git #exit').addEventListener('click', () => {
    document.querySelector('#code_window_git').hidden=true;
});


function copyes(value){
    navigator.clipboard.writeText(value.previousElementSibling.valueOf().textContent);
    alert("Скопировано!");
};
