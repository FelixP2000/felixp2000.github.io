import os


files = os.listdir()
files = [i for i in files if i.find(".html")>-1]

def replace_html(x,y):
    for j in files:
        with open(j, "r", encoding="utf-8") as f:
            rslt = f.read()
            f.close()

        rslt = rslt.replace(x, y,1)

        with open(j, "w", encoding="utf-8") as f:
            f.write(rslt)
            f.close()





replace_html("""                                <div id="statistica"><!--LiveInternet counter--><a href="https://www.liveinternet.ru/click"
                                    target="_blank"><img id="licntCF91" width="88" height="120" style="border:0" 
                                    title="LiveInternet: показано количество просмотров и посетителей"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
                                    alt=""/></a><script>(function(d,s){d.getElementById("licntCF91").src=
                                    "https://counter.yadro.ru/hit?t27.6;r"+escape(d.referrer)+
                                    ((typeof(s)=="undefined")?"":";s"+s.width+"*"+s.height+"*"+
                                    (s.colorDepth?s.colorDepth:s.pixelDepth))+";u"+escape(d.URL)+
                                    ";h"+escape(d.title.substring(0,150))+";"+Math.random()})
                                    (document,screen)</script><!--/LiveInternet-->
                                </div>""","")
