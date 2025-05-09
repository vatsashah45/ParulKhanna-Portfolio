"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Affiliates() {
  const links = [
    { img: "/brands/spotify.png", url: "https://spotify.com", title: "Spotify" },
    { img: "/brands/sephora.png", url: "https://sephora.com", title: "Sephora" },
    { img: "/brands/airbnb.png", url: "https://airbnb.com", title: "Airbnb" },
  ];
  return (
    <section id="affiliates" className="py-24">
      <h2 className="font-display text-3xl font-bold mb-10">Affiliate Links</h2>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.4}
        breakpoints={{ 640: { slidesPerView: 2.4 }, 1024: { slidesPerView: 3.4 } }}
      >
        {links.map(({ img, url, title }) => (
          <SwiperSlide key={title}>
            <a href={url} target="_blank" rel="noopener" className="block rounded-2xl overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={title} className="w-full h-40 object-cover" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}