'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

export default function Affiliates() {
  const links = [
    {
      img: '/unnamed.png',
      url: 'https://get.neofinancial.com/multi-card-influencers/?utm_source=ParulTV&utm_medium=influencer&utm_campaign=evergreen_credit&nf_cv=INF1U37S&nf_ac=2ZYC',
      title: 'Neo Financial',
      description: 'Get Canadas best Credit Card with me',
    },
    {
      img: '/Headshot.jpeg',
      url: 'https://www.parul.tv/immigration',
      title: 'Immigrate to Canada',
      description: 'Immigration Services',
    },
    {
      img: '/Headshot.jpeg',
      url: 'https://my.wealthsimple.com/app/public/trade-referral-signup?code=M0WDYW',
      title: 'Wealthsimple',
      description: 'Get up to $6000 on Wealthsimple for free.',
    },
    {
      img: '/Headshot.jpeg',
      url: 'https://calendly.com/parultv/appointment',
      title: 'Study in Canada',
      description: 'Unlock Your Path to Studying in Canada with Parul.',
    },
  ];

  return (
    <section id="affiliates" className="py-16 md:py-20 scroll-mt-24">
      <h2 className="font-display text-3xl font-bold mb-10 text-center">Brands you should check out</h2>

      <Swiper
        spaceBetween={24}
        slidesPerView={1.4}
        breakpoints={{ 640: { slidesPerView: 2.4 }, 1024: { slidesPerView: 3.4 } }}
      >
        {links.map(({ img, url, title, description }) => (
          <SwiperSlide key={title}>
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-zinc-800 p-6 flex flex-col h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-32 object-contain mb-4 grayscale hover:grayscale-0 transition-all"
                />
                <h3 className="font-display text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
