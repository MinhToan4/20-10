import React, { useEffect, useRef } from 'react';
import PhotoGrid from './PhotoGrid';
import { FaMusic, FaHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface LetterSection {
  id: string;
  content: React.ReactNode;
  className?: string;
}

interface LetterProps {
  onToggleMusic: () => void;
}

export default function Letter({ onToggleMusic }: LetterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all sections and images
    const sections = container.querySelectorAll('.letter-section');
    const images = container.querySelectorAll('.photo-grid img');

    [...sections, ...images].forEach((element) => observer.observe(element));

    // Reveal the letter container with a slight delay
    const timer = setTimeout(() => {
      container.classList.add('visible');
    }, 200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const letterSections: LetterSection[] = [
    {
      id: 'hero',
      content: (
        <div className="text-center relative">
          {/* Decorative top border with flowers and hearts */}
          <div className="flex items-center justify-center mb-6 gap-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            <span className="text-pink-300 text-lg floating-decoration">🌸</span>
            <FaHeart className="text-pink-400 text-base animate-pulse" />
            <span className="text-pink-300 text-lg floating-decoration">🌸</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          <div className="letter-hero relative overflow-hidden">
            <img
              src="/photos/470913741_18028742276580477_5733146292963448823_n.jpg"
              alt="Khoảnh khắc lãng mạn bên nhau - kỷ niệm đẹp của chúng ta"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent"></div>
          </div>

          <h1 className="letter-title mt-8 mb-4 relative">
            <span className="relative inline-block">
              Chúc mừng ngày 20/10
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 rounded-full"></div>
            </span>
            <br />
            <span className="text-2xl font-light shimmer-text">Cô gái đặc biệt Hariii</span>
          </h1>

          <div className="date-line text-pink-600/80 mt-4 font-medium">
            20 tháng 10, 2025
          </div>

          {/* Decorative bottom border with flowers */}
          <div className="flex items-center justify-center mt-6 gap-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            <span className="text-pink-300 text-2xl floating-decoration">🌸</span>
            <span className="text-pink-400 text-xl floating-decoration">✨</span>
            <span className="text-pink-300 text-2xl floating-decoration">🌸</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>
        </div>
      ),
    },
    {
      id: 'message',
      className: 'mt-12',
      content: (
        <div className="space-y-8">
          {/* Opening quote */}
          <div className="text-center mb-8">
            <FaQuoteLeft className="text-pink-300 text-3xl mb-4 inline-block" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed text-gray-700 relative pl-8 border-l-4 border-pink-200">
              <span className="absolute -left-3 top-0 text-pink-400 text-4xl leading-none">❝</span>
              Gửi em, Hariii. Vậy là một mùa 20/10 nữa lại về, và đây là lần đầu tiên anh có một người đặc biệt như em để gửi những dòng chữ này. Anh vẫn nhớ ngày 10/3, ngày chúng ta tình cờ quen biết. Thời gian trôi nhanh thật, mới đó mà đã hơn 7 tháng. Anh chưa từng nghĩ rằng từ một cuộc gặp gỡ ngẫu nhiên, em lại bước vào cuộc sống của anh một cách nhẹ nhàng và mang đến nhiều niềm vui đến vậy. Cảm ơn em vì đã xuất hiện.
            </p>

            <div className="my-8 flex justify-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>

            <p className="text-base leading-relaxed text-gray-700 relative pl-8 border-l-4 border-pink-200">
              <span className="absolute -left-3 top-0 text-pink-400 text-4xl leading-none">❝</span>
              Mỗi khi nhắc đến Thanh Hải, hay cái tên thân thương Hariii mà anh hay gọi, anh lại bất giác mỉm cười. Ở em luôn có một nguồn năng lượng thật trong trẻo và tích cực. Anh thích cách em cười, cách em say sưa kể về những điều nhỏ nhặt trong cuộc sống và cả cách em quan tâm đến mọi người xung quanh một cách chân thành. Được ở bên cạnh, lắng nghe và chia sẻ cùng em là một trong những điều may mắn và đáng trân trọng nhất đối với anh trong năm nay.
            </p>

            <div className="my-8 flex justify-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>

            <p className="text-base leading-relaxed text-gray-700 relative pl-8 border-l-4 border-pink-200">
              <span className="absolute -left-3 top-0 text-pink-400 text-4xl leading-none">❝</span>
              Anh và em không gọi tên mối quan hệ này là gì, và anh nghĩ điều đó cũng không thực sự quan trọng. Anh chỉ biết rằng, có một người để mình tin tưởng, để thấy thoải mái khi ở bên, để cùng nhau đi qua những ngày vui hay cả những lúc chênh vênh, là một điều vô cùng quý giá. Mối duyên của chúng ta có lẽ là một món quà như thế, không cần định nghĩa, chỉ cần chúng ta cùng nhau gìn giữ.
            </p>

            <div className="my-8 flex justify-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            </div>

            <p className="text-base leading-relaxed text-gray-700 relative pl-8 border-l-4 border-pink-200">
              <span className="absolute -left-3 top-0 text-pink-400 text-4xl leading-none">❝</span>
              Nhân ngày Phụ nữ Việt Nam 20/10, anh không có gì hơn ngoài những lời chúc tốt đẹp và chân thành nhất gửi đến em. Chúc cho Hariii của anh sẽ luôn xinh đẹp, rạng rỡ như chính cái tên của mình. Mong em sẽ luôn tìm thấy niềm vui trong cuộc sống, mạnh mẽ bước qua mọi thử thách và luôn giữ được nụ cười tỏa nắng trên môi. Chúc cho mọi dự định của em đều thành công và mong rằng anh và em sẽ còn cùng nhau tạo nên nhiều kỷ niệm đẹp hơn nữa nhé.
            </p>
          </div>

          {/* Signature section */}
          <div className="text-center mt-12 relative">
            <div className="inline-block relative">
              <p className="text-lg font-semibold text-pink-700 mb-2">
                - Cảm ơn em -
              </p>
              <div className="flex items-center justify-center gap-2 signature-hearts">
                <FaHeart className="text-pink-400" />
                <FaHeart className="text-pink-500" />
                <FaHeart className="text-pink-400" />
              </div>
            </div>

            {/* Closing quote */}
            <div className="mt-6 floating-decoration">
              <FaQuoteRight className="text-pink-300 text-3xl" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'photos',
      className: 'mt-16',
      content: (
        <div className="relative">
          {/* Section divider with flowers and hearts */}
          <div className="flex items-center justify-center mb-8 gap-3">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
            <span className="text-pink-300 text-xl floating-decoration">🌸</span>
            <div className="text-pink-400 text-xl">💕</div>
            <span className="text-pink-300 text-xl floating-decoration">🌸</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pink-700 mb-4 relative inline-block">
              <span className="text-lg mr-2 floating-decoration">🌸</span>
              Những khoảnh khắc xinh gái
              <span className="text-lg ml-2 floating-decoration">🌸</span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
            </h2>
            <p className="text-pink-600/70 mt-4">Mỗi bức ảnh là một câu chuyện <span className="text-pink-400">💕</span></p>
          </div>

          <div className="relative">
            <PhotoGrid />
          </div>
        </div>
      ),
    },
    {
      id: 'final',
      className: 'mt-16 pb-12 text-center',
      content: (
        <div className="relative bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-8 border border-pink-200/50 animated-gradient">
          {/* Decorative background elements */}
          <div className="absolute top-4 left-4 text-pink-200 text-2xl floating-decoration">✨</div>
          <div className="absolute top-4 right-4 text-pink-200 text-xl floating-decoration">💕</div>
          <div className="absolute bottom-4 left-4 text-pink-200 text-xl floating-decoration">🌸</div>
          <div className="absolute bottom-4 right-4 text-pink-200 text-2xl floating-decoration">✨</div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-pink-700 mb-6 leading-tight">
              Hơn tất cả
              <br />
              <span className="text-lg font-medium">những gì lời nói có thể diễn tả</span>
            </h2>

            <div className="max-w-lg mx-auto mb-8">
              <p className="text-base text-pink-600/80 leading-relaxed">
                Nếu em muốn, hãy nhấn vào bên dưới để nghe
                — một lời hát nhỏ.
              </p>
            </div>

            <button
              onClick={onToggleMusic}
              className="cta-btn group relative overflow-hidden"
              aria-label="Nghe bài hát của chúng ta"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <FaMusic className="group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Nghe bài hát cùng anh</span>
              <div className="absolute inset-0 rounded-full border-2 border-pink-300/50 group-hover:border-pink-400/70 transition-colors duration-300"></div>
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main
      ref={containerRef}
      className="letter-main relative"
      role="main"
      aria-label="Lá thư tình"
    >
      {/* Particle effect on letter appearance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Floating hearts background */}
      <div className="floating-hearts"></div>

      {/* Content */}
      <div className="relative z-10">
        {letterSections.map((section, index) => (
          <section
            key={section.id}
            className={`letter-section ${section.className || ''}`}
            style={{ '--section-delay': index } as React.CSSProperties}
          >
            {section.content}
          </section>
        ))}
      </div>
    </main>
  );
}
