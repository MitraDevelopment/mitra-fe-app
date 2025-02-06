export interface IReview {
  id: string;
  name: string;
  stars: number;
  comment: string;
  date: string;
}

const reviews: IReview[] = [
  {
    id: "1",
    name: "Ahmet Y.",
    stars: 5,
    comment:
      "Harika bir atmosfer ve müthiş lezzetler. Kesinlikle tekrar geleceğim!",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Ayşe K.",
    stars: 4,
    comment:
      "Çok güzel bir mekan, servis biraz yavaştı ama yemekler harikaydı.",
    date: "2024-01-10",
  },
  {
    id: "3",
    name: "Mehmet S.",
    stars: 5,
    comment:
      "Fiyat/performans açısından çok başarılı. Özellikle tatlıları muhteşem.",
    date: "2024-01-05",
  },
];

export default reviews;
