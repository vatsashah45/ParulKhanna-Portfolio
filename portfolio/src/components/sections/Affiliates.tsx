'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

export default function Affiliates() {
  const links = [
    { img: '/Headshot.jpeg', url: 'https://neofinancial.com', title: 'Neo Financial' },
    { img: '/brands/wealthsimple.png', url: 'https://wealthsimple.com', title: 'Wealthsimple' },
    { img: '/Headshot.jpeg', url: 'https://taxes.com', title: 'Taxes' },
  ];

  return (
    <section id="affiliates" className="py-16 md:py-20 scroll-mt-24">
      <h2 className="font-display text-3xl font-bold mb-10 text-center">Brands you should check out</h2>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.4}
        breakpoints={{ 640: { slidesPerView: 2.4 }, 1024: { slidesPerView: 3.4 } }}
      >
        {links.map(({ img, url, title }) => (
          <SwiperSlide key={title}>
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4"
              whileHover={{ scale: 1.05, rotateX: 1.5, rotateY: 1.5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-40 object-contain p-6 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
