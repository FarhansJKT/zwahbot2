clear
echo "
===============================================
BANNER BY AMELIA ^-^
       ╔╗ ┌─┐┌┬┐       ╔═╗┌─┐┬  ┌─┐┌─┐
       ╠╩╗│ │ │   ───  ╠═╝│ ││  │ │└─┐
       ╚═╝└─┘ ┴        ╩  └─┘┴─┘└─┘└─┘

[   DILARANG KERAS MENGHAPUS NAMA AUTHOR   ]

===============================================
   LICENSEE : MIT | © FARHANJS - GABUTMENT
===============================================
"
read -p '[+] ENTER TO INSTALL : ' gas;
echo ""
pkg install wget -y
pkg install ffmpeg -y
pkg install nodejs -y
pkg install tesseract -y
npm i -g cwebp
npm i -g ytdl
npm i node-tesseract-ocr
npm i
npm i got
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm audit fix
echo ""
echo "
===============================================
   BERHASIL MENGINSTALL | ./node_modules
===============================================
"
echo "[+] SEDANG MEMBUKA SCRIPT BOTZ..."
sleep 1.59
clear
node index
