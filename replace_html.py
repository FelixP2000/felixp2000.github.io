import os


files = os.listdir()
files = [i for i in files if i.find(".html")>-1 and i!="index.html"]

def replace_html(x,y):
    for j in files:
        with open(j, "r", encoding="utf-8") as f:
            rslt = f.read()
            f.close()

        rslt = rslt.replace(x, y)

        with open(j, "w", encoding="utf-8") as f:
            f.write(rslt)
            f.close()





replace_html("""&"+location.pathname""","""&html="+location.pathname""")
