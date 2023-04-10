
function allowDrop(e) {//içerisine sürüklenebilir
    e.preventDefault();
  }
  function surukle(e) {//sürüklemeye başladığında bilgisini çekiyor
    e.dataTransfer.setData("text", e.target.id);//bilgiyi gönderiyor
  }
  
  function birakA(e) {//bırakma
    e.preventDefault();
    var data = e.dataTransfer.getData("text");//bilgiyi çekiyor
    var suruklenenDiv = document.getElementById(data);
    var textIcerik = suruklenenDiv.textContent;//text özelliğini çekiyor
    if (textIcerik.trim().charAt(0) === 'a') {//text'in 1. karakteri "a" mı diye kontrol ediyor
      var aKabul = document.getElementById("aKabul");//nereye yerleştirilecekse onun id'si alınıyor
      aKabul.appendChild(suruklenenDiv);//id'si alınan div'in içerisine taşınan div ekleniyor
    } 
    else 
    {
      alert("Yanlış gruba koyamazsınız");
    }
  }

  function birakB(e) {//bırakma, b için
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var suruklenenDiv = document.getElementById(data);
    var textIcerik = suruklenenDiv.textContent;
  
    if (textIcerik.trim().charAt(0) === 'b') {
      var bKabul = document.getElementById("bKabul");
      bKabul.appendChild(suruklenenDiv);
    }
    else 
    {
      alert("Yanlış gruba koyamazsınız");
    }
  }
  
  function birakOrta(e) {//bırakma, orta kısım için
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var suruklenenDiv = document.getElementById(data);
      var ortaKabul = document.getElementById("ortaKabul");
      ortaKabul.appendChild(suruklenenDiv);
    
  }





  alert("Divlerin textindeki ilk harfine göre aitlik kontrol ediliyor.");



