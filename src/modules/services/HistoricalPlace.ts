const mockDataHistorical = [
  {
    id: 1,
    name: "Diyarbakır Surları",
    type: "Kale",
    description:
      "Diyarbakır Surları, UNESCO Dünya Mirası listesinde yer alan, 5.5 km uzunluğundaki tarihi bir yapıdır. Çin Seddi’nden sonra en uzun surlardan biri olup, bazalt taşından yapılmıştır.",
    image: "../tarihi/sur.jpg",
    address: "Sur, 21000 Diyarbakır, Türkiye",
    location: {
      latitude: 37.9144,
      longitude: 40.2306,
    },
  },
  {
    id: 2,
    name: "Hevsel Bahçeleri",
    type: "Bahçe",
    description:
      "Dicle Nehri kıyısında yer alan bu bahçeler, 8 bin yıllık bir tarım kültürünün mirasını taşır. Doğal güzellikleriyle tanınır.",
    image: "../tarihi/hevsel.jpg",
    address: "Hevsel Bahçeleri, Sur, 21000 Diyarbakır, Türkiye",
    location: {
      latitude: 37.9121,
      longitude: 40.2392,
    },
  },
  {
    id: 3,
    name: "Diyarbakır Ulu Camii",
    type: "Camii",
    image: "../tarihi/ulu.jpg",
    address:
      "Ulu Cami Mahallesi, 5. Sokak No:10, Sur, 21000 Diyarbakır, Türkiye",
    description:
      "Diyarbakır Ulu Camii, 639 yılında inşa edilmiş ve bir kiliseden camiye dönüştürülmüştür. İslam mimarisinin önemli örneklerinden biridir.",
    location: {
      latitude: 37.9148,
      longitude: 40.2252,
    },
  },
  {
    id: 4,
    name: "Hasan Paşa Hanı",
    type: "Hanlar",
    description:
      "Hasanpaşa Hanı, 16. yüzyılda inşa edilmiş bir Osmanlı kervansaraydır. Diyarbakır'da ticaret amacıyla kullanılan tarihi bir yapıdır.",
    image: "../tarihi/hasan.jpg",
    address:
      " Hasanpaşa Mahallesi, Şeyh Sinan Caddesi, Sur, 21000 Diyarbakır, Türkiye",
    location: {
      latitude: 37.9143,
      longitude: 40.2261,
    },
  },
  {
    id: 5,
    name: "Dört Ayaklı Minare",
    type: "Camii",
    description:
      "Dört Ayaklı Minare, Diyarbakır'da bulunan, 11. yüzyıldan kalma tarihi bir minaredir. Minare, 4 sütun üzerine inşa edilmiştir ve Selçuklu mimarisinin izlerini taşır.",
    image: "../tarihi/dört-ayaklı.jpg",
    address: "Savaş, Yenikapı Sk. No:25, 21200 Sur/Diyarbakır",
    location: {
      latitude: 37.9105,
      longitude: 40.2274,
    },
  },
  {
    id: 6,
    name: "Deliler hanı",
    type: "Hanlar",
    description:
      "Deliller Hanı, Diyarbakır'ın Sur ilçesinde bulunan, 16. yüzyıldan kalma bir Osmanlı kervansarayıdır. Tarihi yapıda, hanın adı verilen delik'ler, yapının savunma amaçlı özelliklerinden biridir.",
    image: "../tarihi/deliller.jpg",
    address: "Cemal Yılmaz, 21200 Sur/Diyarbakır",
    location: {
      latitude: 37.9121,
      longitude: 40.2257,
    },
  },
  {
    id: 7,
    name: "Ziya Gökalp Evi",
    type: "Müze",
    description:
      "Ziya Gökalp Evi, Türk sosyolog Ziya Gökalp’in doğduğu evi temsil eder. Diyarbakır’da yer alır.",
    image: "../tarihi/ziya.jpg",
    address: "Merkez, Ziya Gökalp Mh., 21300 Diyarbakır",
    location: {
      latitude: 37.912,
      longitude: 40.2253,
    },
  },
  {
    id: 8,
    name: "Saint George (Mar Toma) Kilisesi",
    type: "Kiliseler",
    description:
      "Saint George Kilisesi (Mar Toma), Diyarbakır'daki en eski Süryani kiliselerinden biridir. 16. yüzyılda inşa edilen kilise, Süryani Ortodoks cemaatinin ibadet yeridir.",
    image: "../tarihi/saint.webp",
    address: "Cevat Paşa, 21200 Sur/Diyarbakır",
    location: {
      latitude: 37.9134,
      longitude: 40.2255,
    },
  },
  {
    id: 9,
    name: " Cemil Paşa Konağı",
    type: "Konak",
    description:
      "Diyarbakır'ın geleneksel konut mimarisini yansıtan Cemil Paşa Konağı, günümüzde Diyarbakır Kent Müzesi olarak kullanılmaktadır.",
    image: "../tarihi/cemil.jpg",
    address: "Ali Paşa, Binici Sk., 21300 Sur/Diyarbakır",
    location: {
      latitude: 37.9136,
      longitude: 40.227,
    },
  },
  {
    id: 10,
    name: "İç Kale",
    type: "Kaleler",
    description:
      "İç Kale, Diyarbakır'ın en eski yerleşim alanlarından biridir. İçerisinde Artuklu Sarayı kalıntıları ve Arkeoloji Müzesi bulunmaktadır.",
    image: "../tarihi/ickale.jpg",
    address: " Cevat Paşa, 21300 Sur/Diyarbakır",
    location: {
      latitude: 37.9124,
      longitude: 40.2269,
    },
  },
  {
    id: 11,
    name: "On Gözlü Köprü (Dicle Köprüsü)",
    type: "Köprüler",
    description:
      "Dicle Nehri üzerindeki bu köprü, 11. yüzyılda inşa edilmiştir ve Diyarbakır'ın sembollerinden biridir.",
    image: "../tarihi/ongozlu.jpg",
    address: "Bağıvar, 21200 Sur/Diyarbakır",
    location: {
      latitude: 37.9129,
      longitude: 40.2399,
    },
  },
  {
    id: 12,
    name: "Surp Giragos Ermeni Kilisesi",
    type: "Kiliseler",
    image: "../tarihi/surp.jpg",
    description:
      "Diyarbakır’daki en büyük Ermeni kilisesidir. 1376 yılında inşa edilen kilise, 2011 yılında restore edilerek tekrar ibadete açılmıştır. Hem Ermeni hem de Diyarbakır kültürü için önemli bir yapıdır.",
    address: "Savaş, Göçmen Sk. No:17, 21200 Sur/Diyarbakır",
    location: {
      latitude: 37.9113,
      longitude: 40.2274,
    },
  },
  {
    id: 13,
    name: "Meryem Ana Kilisesi",
    type: "Kiliseler",
    description:
      "Diyarbakır’daki bir diğer tarihi Süryani kilisesidir. Meryem Ana Kilisesi, 3. yüzyıldan kalma bir yapıdır ve Süryani Ortodoks topluluğunun ibadet yeridir.",
    image: "../tarihi/meryem.jpg",
    address: "Lalebey, Uçak Sk. No:10, 21300 Sur/Diyarbakır",
    location: {
      latitude: 37.9117,
      longitude: 40.2303,
    },
  },
  {
    id: 14,
    name: "Behram Paşa Camii",
    type: "Camii",
    description:
      "Diyarbakır'da 16. yüzyılda inşa edilmiş olan bu cami, Osmanlı mimarisinin izlerini taşır ve şehrin önemli dini yapılarından biridir.",
    image: "../tarihi/Behrampasa.jpg",
    address: "Abdaldede, Bayrampaşa Sk. No:33, 21300 Sur/Diyarbakır",
    location: {
      latitude: 37.9126,
      longitude: 40.2271,
    },
  },
  {
    id: 16,
    name: "Hz. Süleyman Camii",
    type: "Camii",
    description:
      "Diyarbakır’ın merkezine yakın olan ve Osmanlı döneminde inşa edilen tarihi bir camidir. Camii, ihtişamlı mimarisi ve iç dekorasyonuyla dikkat çeker.",
    image: "../tarihi/süleyman.jpg",
    address: "Cevat Paşa, 21200 Sur/Diyarbakır",
    location: {
      latitude: 37.9229,
      longitude: 40.213,
    },
  },
  {
    id: 17,
    name: "Zerzevan Kalesi",
    type: "Kaleler",
    description:
      " Roma dönemine ait bir kale olup, Zerdüşt tapınağıyla ünlüdür. Diyarbakır’ın Çınar ilçesinde yer alır.",
    image: "../tarihi/zerzevan.jpg",
    address: "Demirölçek, 21010 Çınar/Diyarbakır",
    location: {
      latitude: 37.9843,
      longitude: 40.2195,
    },
  },
  {
    id: 18,
    name: "Malabadi Köprüsü",
    type: "Köprüler",
    description:
      "12. yüzyılda Artuklu dönemi sırasında inşa edilmiştir ve dünyadaki en büyük taş köprülerden biridir. Diyarbakır'ın Silvan ilçesinde yer alır ve tarihi mimarisiyle dikkat çeker.",
    image: "../tarihi/malabadi.jpg",
    address: "Malabadi, 21640 Silvan/Diyarbakır",
    location: {
      latitude: 37.8306,
      longitude: 41.5406,
    },
  },
  {
    id: 19,
    name: "İskender Paşa Konağı",
    type: "Konaklar",
    description:
      "Geleneksel Diyarbakır taş işçiliğini sergileyen bu konak, avlulu yapısı ve taş işçiliği detaylarıyla dikkat çeker.",
    image: "../tarihi/iskender.jpg",
    address: "İskender Paşa Mah., Sur/Diyarbakır",
    location: {
      latitude: 37.909,
      longitude: 40.2208,
    },
  },
];
export default mockDataHistorical;
