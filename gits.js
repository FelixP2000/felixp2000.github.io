document.querySelector('#github_but').addEventListener('click', () => {
    document.querySelector('#code_window_git').hidden=false;
});

document.querySelector('#exit').addEventListener('click', () => {
    document.querySelector('#code_window_git').hidden=true;
});


function copyes(value){
    navigator.clipboard.writeText(value.previousElementSibling.valueOf().textContent);
    alert("Скопировано!");
};
