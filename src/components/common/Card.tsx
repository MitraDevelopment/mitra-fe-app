"use client";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  promoted?: boolean;
  category?: string;
  onClick: () => void;
}
const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  promoted = false,
  category,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] 
                   bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Promosyon Etiketi */}
      {promoted && (
        <div className="absolute top-3 left-0 z-10">
          <div
            className="bg-yellow-400 text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-r-full shadow-sm 
                          transform -skew-x-6"
          >
            Sponsorlu
          </div>
        </div>
      )}

      {/* Resim Alanı */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {category && (
          <span className="absolute top-2 right-2 px-2 py-1 bg-gray-900/75 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* İçerik Alanı */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default Card;
