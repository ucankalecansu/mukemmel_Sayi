import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var toplam = 0;
  const [sayi, setSayi] = useState(0);
  var sonuc;

  const handleVeri = () => {    
    for (var i = 1; i < sayi; i++) {
      if (sayi % i == 0) {
        toplam = toplam + i;
      }
    }
    if (sayi == toplam) {
      sonuc=sayi + " sayısı mükemmel sayidir";
    } else {
      sonuc=sayi + " mükemmel sayı değildir";
    }
  };

  return (
    <div className="App">
      <input
        value={sayi}
        onChange={(val)=>setSayi(val.target.value)}
        type="number"
      ></input>
      <div onChange={handleVeri()}>{sonuc}</div>
    </div>
  );
}
