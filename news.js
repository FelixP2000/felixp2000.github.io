news_items=[
    "13.03.2024 - добавлено меню новостей на главной странице сайта."
]
document.addEventListener('DOMContentLoaded', ()=>{
    
    
    function news_add(text) {
        var news_item = document.createElement('span');
        news_item.setAttribute('class','news_item')
        news_item.innerHTML=text;
        document.getElementById('news_form').appendChild(news_item);
    }

    for (i=0; i<news_items.length;i++){
        news_add(news_items[i]);
        news_add("----------------------------");
    }
});

