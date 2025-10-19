import React from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function PhotoGrid() {
  const photos: Photo[] = [
    {
      id: 1,
      src: '/photos/470913741_18028742276580477_5733146292963448823_n.jpg',
      alt: 'Khoảnh khắc lãng mạn bên nhau',
      width: 600,
      height: 400,
    },
    {
      id: 2,
      src: '/photos/470923418_18028742297580477_6360190947355383382_n.jpg',
      alt: 'Nụ cười hạnh phúc của em',
      width: 600,
      height: 600,
    },
    {
      id: 3,
      src: '/photos/unnamed (1).jpg',
      alt: 'Những khoảnh khắc đáng nhớ',
      width: 600,
      height: 500,
    },
    {
      id: 4,
      src: '/photos/unnamed.jpg',
      alt: 'Tình yêu của chúng ta',
      width: 600,
      height: 450,
    },
  ];

  return (
    <div className="photo-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}
