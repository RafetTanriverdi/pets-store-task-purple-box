# Cute Pets Store

[Projenin canlı Hali](https://cute-pets-rft.netlify.app)

Projemizi çalıştırmadan önce nodejs kontrol edelim node_modules klasörü mevcut değilse komutu çalıştıralım 

### `npm install`

Projeyi de Başlatalım 

### `npm start`

Kullanıcı bilgileri localde saklanmaktadır daha önceden üyelik bulunmadığı kontrolü yapıldığı için ilk olarak register sayfasına yönlendirilirsiniz.Üye olduktan sonra ister kullanıcı adı ister mail kullanarak giriş yaparsınız.

![Untitled](/src/Img/1.gif)

### `Login`,`Register`

Bu Componentlerde local strogede verinin varlığı ve doğruluğu kontrolleri yapılarak giriş home sayfasına ulaşırsınız.
Login ve Register componentleri ve diğer tüm sayfalar App.js altında gerekli linklendirme işlemleri react-router-dom yapısı ile sağlandı.


![Untitled](/src/Img/2.gif)

### `Services`

Projede Services klasöründe  ProjectedRoutes.jsx ile kullanıcının durumu login mi yoksa logout mu bunun kontrolü yapılmakta.
Bu Servisin altında alt bir servis olarakta login se headerı aktif et değilde pasif konumda tut şeklinde bir servis daha bulunmakatadır.

### `Home`

Giriş yapıldıktan sonra Home sayfasında Pets sayfası karşınıza gelir bu sayfa home sayfası olarakta atanmıştır. Pets verileri localstrogede tutulmakta bu yüzden daha önceden pets verisi girilmemiş olarak görürsünüz. "Add a pet" butonuna tıkladığınızda pop-up yapısında olan bir form ile
karşılaşırsınız. Veri ekledikten sonra tablo gelir, bu tabloda verilerinizi güncelleye bilir veya silebilirsiniz tablonun sağ üstünde yer alan "add another pet " butonu ile yeniden veri eklersiniz bu buton ile hiç veri yokken karşılaştığınız buton "add a pet" aynı butondur sadece tabloda veri olmasına göre style özellikleri değişmektedir.Pets sayfası iki component halinde tasarlanmıştır verilerin girildiği pop-up ve verilerin listelendiği table.
 Not: Tablodaki verileri anlık olarak güncellemek için setinterval fonksiyonu kullandım. Verilerin anlık olarak iletilmesi işlemi için Context Kullanılabilir Çok daha büyük bir Projede Redux da kullanılabilir ben projenin boyutundan dolayı context yapısını denedim fakat veriler localde tutulduğu ve statelerin aldığı değerlerin karışması neticesinde context yapısını kullanmadan verilerin anlık güncellenmesini
setinterval ile hallettim.
![Untitled](/src/Img/3.gif)

### `Store Page`

Store sayfasında [pets store](https://petstore.swagger.io/#/) verilerini çekerek bir Listeleme yapıldı gelen apida pets verileri üç başlıkta alınabiliyordu "available" ,"pending", "sold" şeklinde alınabiliyordu,select ile çağrılan verileri değiştirmek ve çağrılan verileri favorilere eklenmesi yapsını kurgulmak istedim. Bu sebeple Context yapısını uyguladım. Veriler anlık olarak değişebilir, favorilere eklenip çıkarılabilir tarzda oldu favoriler pop-up yapısında gösterilmektedir. 
Not:Çağırılan Apide görsel olmaması veya eklenen urlenin bozuk olması gibi sebeplerden çağrılan apida url boşaltılıp yeni bir url atanmıştır.
![Untitled](/src/Img/4.gif)

### `Analysis Page`

Bu Sayfada Dinamik Grafikleri kullanarak bir dashboard Oluşturmak istedim kullandığım grafikler [Nivo Chord](https://nivo.rocks/chord/), [Nivo Pie](https://nivo.rocks/pie/), [Nive Geo](https://nivo.rocks/choropleth/), [Nivo Radial Bar](https://nivo.rocks/radial-bar/), [Nivo Area Bump](https://nivo.rocks/area-bump/) Şeklindedir.

### `Logout `

Logutla Çıkış yaptığınızda verileriniz kaybolmaz verileriniz ancak tarayıcınızın geçimişini temizlediğiniz kaybolur. 

![Untitled](/src/Img/6.gif)

### `Bu Case 8 Mart 2023 de Başlayıp 12 Mart 2023 de Tamamlanmıştır`
