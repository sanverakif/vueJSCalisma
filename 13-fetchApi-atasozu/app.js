/*
function verileriYukle(){
  fetch("https://sozluk.gov.tr/atasozu")
  .then((gelen) => gelen.json())
  .then((veri) => console.log(veri))
}
*/
const sonuc = document.getElementById("sonuc");
const aramaListesi = document.getElementById("aramaListesi");
const aramaKutusu = document.getElementById("aramaKutusu");
const anahtarKelimeler = [];
const sozler = [];

verileriYukle();

async function verileriYukle() {
    //veri çekildi
    const gelen = await fetch("https://sozluk.gov.tr/atasozu");
    //jsona dönüştürüldü
    let veri = await gelen.json();
    //consola yazdırıldı
    console.log(veri);

    veri.forEach(eleman => {
        //verileri objeleri dönüştürdük. obje içerisindeki string anahtar değerini diziye attık.
        anahtarKelimeler.push(eleman.anahtar);
        sozler.push(eleman.sozum);
    })

    //tekrarlayan verileri yazmıyor??? ---
    const birlesmisKelimeler = [...new Set(anahtarKelimeler)];
    console.log(birlesmisKelimeler);

    let sayac = 0;
    //kalan degerleri rastgele sıralayıp listeliyoruz
    birlesmisKelimeler.sort(() => Math.random() - 0.5);
    //5 tane değer listelenir.
    birlesmisKelimeler.forEach(kelime => {
        if (sayac < 5) {
            //option elementi oluşturulur
            const yeni = document.createElement("option");
            //datalist elementimize option eklenir
            aramaListesi.appendChild(yeni);
            //option içindeki değerlere parametremiz atanır
            yeni.value = kelime;
        }
        sayac++;
    })
}

//input içine kelime yazılır  sonucları ara fonksiyonunda dönen işlemlerin sonucunu parametreye gelir
aramaKutusu.addEventListener("input", (e) => sonuclariAra(e.target.value));

function sonuclariAra(arananKelime) {
    sonuc.innerHTML = "";
    //regex ekledik büyük küçük harfe izin verir
    let aramaKurali = new RegExp(arananKelime, 'gi');
    //listelenicek sozler fieldında içindeki değerlere göre filtreleme yapılır
    let eslesenler = sozler.filter(soz => aramaKurali.test(soz));

    //klavyeden girilen değer minimum 4 olmalı 3 olursa filtreleme yapmaz
    if (arananKelime.length < 3) {
        eslesenler = [];
    }

    eslesenler.forEach(es => {
        //yeni element yaratır
        const siradakiSonuc = document.createElement("li");
        //ul elementine ekler
        sonuc.appendChild(siradakiSonuc);
        //elemente listelenen verileri ekler
        siradakiSonuc.innerHTML = es;

    })
}