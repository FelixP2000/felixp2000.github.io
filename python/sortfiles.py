import shutil
import os



files = os.listdir()


for i in range(len(files)):
    file, rashirenije = os.path.splitext(files[i])
    files[i] = rashirenije

files = [i for i in files if i!=""]
files = list(set(files))


for i in files:
    papka = i.replace(".", "").upper()
    papka+=" файлы"
    if os.path.exists(papka)==False:
        os.mkdir(papka)
    else:
        pass

    files_po_r = os.listdir()

    files_po_r = [k for k in files_po_r if k.find(i)!=-1]

    for file_f in files_po_r:
        if os.path.exists(f"./{papka}/{file_f}"):
            povtors = os.listdir(f"./{papka}")

            rslt_file = file_f
            while os.path.exists(f"./{papka}/{rslt_file}")!=False:
                
                one_rslt, two_rslt = os.path.splitext(rslt_file)

                rslt_file = f"{one_rslt} (COPY)"
                rslt_file+=two_rslt
                
                if os.path.exists(f"./{papka}/{rslt_file}")==False:
                    try:
                        shutil.move(file_f, f"./{papka}/{rslt_file}")
                    except:
                        pass
        else:
            shutil.move(file_f, f"./{papka}/{file_f}")