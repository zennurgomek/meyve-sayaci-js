 // meyve sayaci
 function meyveGirisi() {
   let meyveSayisi = prompt("kac adet meyve girmek istersiniz?");
   let meyveler = [];

   for (let i = 0; i < meyveSayisi; i++) {
     let meyve = prompt((i+1) + "meyyvenin ismini girin:");

     meyveler.push(meyve); 

   }
   console.log("girilen meyveler:", meyveler);
 }

 meyveGirisi();


//  Kullanıcıya kaç adet meyve girmek istediğini soralım.
//  Söylediği adet kadar meyve ismini prompt ile eklesin.
//  Yazılan her bir meyveyi diziye ekleyelim
//  Eklenen meyvelerin hepsini console'a yazdıralım. 

