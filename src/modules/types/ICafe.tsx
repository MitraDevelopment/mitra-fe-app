export interface ICafe {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  stars: number;
  calismasaatleri: string;
  address: string;
  phone: string;
  instagram?: string;
}

export interface ICafeTag {
  id: string;
  name: string;
  color?: string;
}

// Tag renkleri için sabit değerler
export const TAG_COLORS = {
  kahve: "bg-brown-100 text-brown-800",
  tatlı: "bg-pink-100 text-pink-800",
  kahvaltı: "bg-yellow-100 text-yellow-800",
  restoran: "bg-green-100 text-green-800",
  bar: "bg-purple-100 text-purple-800",
  "kitap kafe": "bg-blue-100 text-blue-800",
} as const;
