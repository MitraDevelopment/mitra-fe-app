import { ICafe } from "../types/ICafe";

const mockData: ICafe[] = [
  {
    id: 1,
    name: "Hasan Paşa Hanı",
    description:
      "Tarihi bir hanın avlusunda kahvaltı, Türk kahvesi ve yöresel tatlar sunar. Geleneksel mimarisiyle ünlüdür.",
    type: "Restorant",
    calismasaatleri: "08:00-22:00",
    image: "../../../public/mekanlar/hasan.jpg",

    address: "Gazi Cad. No:24, Sur, Diyarbakır",
    phone: "(0412) 224 12 13",
    instagram: "@hasanpasahani",
    stars: 4,
  },
  {
    id: 2,
    name: "Sülüklü Han",
    description:
      "17. yüzyıldan kalma bu tarihi han, kahve ve çay eşliğinde nostaljik bir atmosfer sunar.",
    type: "Kafe",
    image: "../mekanlar/suluklu-han.jpg",
    calismasaatleri: "10:00-22:00",

    address: "Melik Ahmet Cad. No:63, Sur, Diyarbakır",
    phone: "(0412) 224 35 76",
    instagram: "@sulukluhan",
    stars: 3,
  },
  {
    id: 3,
    name: "Ciğerci Xale Meheme",
    description:
      "Diyarbakır'da ciğer kebabı denince ilk akla gelen mekanlardan biridir. Geleneksel usullerle lezzet sunar.",
    type: "Restorant",
    calismasaatleri: "07:00-22:00",
    image: "../mekanlar/xale.jpg",

    address: "Kurt İsmail Paşa 2. Sk. No:12, Sur, Diyarbakır",
    phone: "(0412) 223 44 55",
    instagram: "@cigerxalemeheme",
    stars: 4,
  },
  {
    id: 4,
    name: "Yade Coffee and Design Shop",
    description:
      "Diyarbakır da kahve çay içilebilecek en iyi kafelerden biri. ",
    type: "Kafe",
    calismasaatleri: "07:00-22:00",
    image: "../mekanlar/Yade.jpg",

    address: "Diclekent Bulvarı No:87, Kayapınar, Diyarbakır",
    phone: "(0412) 237 89 90",
    instagram: "@yadecoffee",
    stars: 4,
  },
  {
    id: 5,
    name: "Kaburgacı Selim Amca",
    description:
      "Kaburga dolması ve tandır gibi yöresel yemeklerin en meşhur adreslerinden biri.",
    type: "Restorant",
    calismasaatleri: "07:00-22:00",
    image: "../mekanlar/selim.jpg",

    address: "Gazi Cad. No:156, Sur, Diyarbakır",
    phone: "(0412) 228 67 89",
    instagram: "@kaburgaciselimamca",
    stars: 2,
  },
  {
    id: 6,
    name: "Dağkapı Ciğercisi",
    description:
      "Şehir merkezinde yer alan bu restoran, taze ve lezzetli ciğer kebabı ile tanınır.",
    type: "Restorant",
    calismasaatleri: "09:00-22:00",
    image: "../mekanlar/dagkapı.jpg",

    address: "Dağkapı Meydanı No:45, Sur, Diyarbakır",
    phone: "(0412) 223 78 90",
    instagram: "@dagkapicigercisi",
    stars: 4,
  },
  {
    id: 7,
    name: "On Gözlü Kafe",
    description:
      "Dicle Nehri kıyısında yer alan bu mekan, manzarasıyla çay ve kahve keyfi için idealdir.",
    type: "Kafe",
    calismasaatleri: "09:00-22:00",
    image: "../mekanlar/ongozlu.jpg",

    address: "Ben û Sen Cad. No:23, Sur, Diyarbakır",
    phone: "(0412) 229 45 67",
    instagram: "@ongozlukafe",
    stars: 5,
  },
  {
    id: 8,
    name: "Shakespeare Coffee & Bistro (Diyarbakır)",
    description: "Diyarbakır'ın fark yaratan mekanı",
    type: "Kafe",
    calismasaatleri: "07:00-22:00",
    image: "../mekanlar/shakespeare.jpg",

    address: "75 Meter Cad. No:12, Kayapınar, Diyarbakır",
    phone: "(0412) 237 12 34",
    instagram: "@shakespearediyarbakir",
    stars: 4,
  },
  {
    id: 9,
    name: "Kadayıfçı Sıtkı Usta",
    description:
      "Diyarbakır'a özgü kadayıf tatlısının en ünlü adreslerinden biri.",
    type: "Tatlıcı",
    calismasaatleri: "07:00-22:00",
    image: "../mekanlar/sitki.webp",

    address: "Gazi Cad. No:178, Sur, Diyarbakır",
    phone: "(0412) 224 56 78",
    instagram: "@kadayifcistitki",
    stars: 4,
  },
  {
    id: 10,
    name: "Mona Kahve Evi",
    description:
      "Sanat ve kitaplarla iç içe, modern ve keyifli bir atmosfer sunan bir mekan.",
    type: "Kitap Kafe",
    image: "../mekanlar/mona.jpg",
    calismasaatleri: "09:00-00:00",
    address: "Ekinciler Cad. No:34, Yenişehir, Diyarbakır",
    phone: "(0412) 235 67 89",
    instagram: "@monakahveevi",
    stars: 4,
  },
  {
    id: 11,
    name: "Nevada Coffee",
    description: "Diyarbakır'ın en büyük kahve mekanı.",
    type: "Kafe",
    calismasaatleri: "09:00-00:00",
    image: "../mekanlar/nevada.jpg",

    address: "Park AVM No:123, Kayapınar, Diyarbakır",
    phone: "(0412) 238 90 12",
    instagram: "@nevadacoffee",
    stars: 3,
  },
  {
    id: 12,
    name: "Fırın-Ci",
    description:
      "Fırın-ci, geleneksel lezzetleri benzersiz sunum ve kaliteli bir ortamda deneyimlemeniz, tüm mutfak tecrübesini sofralara taşımak için yola çıktı",
    type: "Restorant",
    calismasaatleri: "09:00-00:00",
    image: "../mekanlar/firinci.jpg",

    address: "Urfa Bulvarı No:45, Kayapınar, Diyarbakır",
    phone: "(0412) 236 78 90",
    instagram: "@firinci.diyarbakir",
    stars: 4,
  },
  {
    id: 13,
    name: "Hancın Et Restorant",
    description:
      "Diyarbakır'ın zengin et kültürünün en meşhur restorantlarından biri. ",
    type: "Restorant",
    calismasaatleri: "09:00-00:00",
    image: "../mekanlar/hanci-et.jpg",

    address: "Mezopotamya Bulvarı No:67, Kayapınar, Diyarbakır",
    phone: "(0412) 239 12 34",
    instagram: "@hancinetrestorant",
    stars: 2,
  },
  {
    id: 14,
    name: "ValinorCoffee",
    description:
      "Diyarbakır da kahvenizi yudumlayacağınız en sıcak ortamlardan biri.",
    type: "Kafe",
    image: "../mekanlar/valinor.jpg",
    calismasaatleri: "09:00-00:00",
    address: "75 Meter Cad. No:89, Kayapınar, Diyarbakır",
    phone: "(0412) 237 45 67",
    instagram: "@valinorcoffee",
    stars: 4,
  },
  {
    id: 15,
    name: "Abbas Waffle-Kahvaltılık",
    description:
      "Şehrin tüm yöresel lezzetlerini bir arada bulabileceğiniz, geniş menülü bir mekan.",
    type: "Tatlıcı",
    calismasaatleri: "10:00-22:00",
    image: "../mekanlar/abbas.jpg",

    address: "75 Meter Cad. No:91, Kayapınar, Diyarbakır",
    phone: "(0412) 237 89 01",
    instagram: "@abbaswaffle",
    stars: 5,
  },
];

export default mockData;
