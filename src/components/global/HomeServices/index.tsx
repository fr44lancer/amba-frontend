'use client';
import Image from 'next/image';
import React from 'react';
import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import img1 from '@/assets/img/hero/1.jpg';
import img2 from '@/assets/img/hero/2.jpg';
import img4 from '@/assets/img/hero/4.jpg';
import img5 from '@/assets/img/hero/5.jpg';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src={img1.src}
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: 'Պահեստի Կառուցում',
    title: 'Կատարում ենք պահեստների կառուցում հիմքից',
    src: img1.src,
    content: (
      <div>
        Անկախ տարածքի մեծության և բարդության՝ մեր մասնագետները կատարում են բոլոր
        տեսակի աշխատանքներ՝ ապահովելով որակյալ և հուսալի պահեստային տարածք։
      </div>
    ),
  },
  {
    category: 'Առևտրային Տարածքներ',
    title: 'Առևտրային դարակաշարեր ցանկացած մեծության տարածքների համար',
    src: img2.src,
    content: (
      <div>
        Մեր ընկերությունը տրամադրում է առևտրային տարածքի կահավորման համար
        անհրաժեշտ ամեն ինչ՝ դարակաշարեր, սառնարաններ, տեխնիկա և այլն։
      </div>
    ),
  },
  {
    category: 'Սուպերմարկետների Սարքավորումներ',
    title: 'Ամեն ինչ սուպերմարկետների համար 🥰',
    src: img4.src,
    content: (
      <div>
        Մեզ մոտ կգտնեք սուպերմարկետների համար նախատեսված ցանկացած ապրանք,
        ապահովելով արդյունավետություն և հարմարավետություն յուրաքանչյուր
        մանրամասում։
      </div>
    ),
  },
  {
    category: 'Առևտրային Դարակաշարեր',
    title: 'Առևտրային դարակաշարերի մեծ տեսականի',
    src: img5.src,
    content: (
      <div>
        Առաջարկում ենք առևտրային դարակաշարերի լայն ընտրություն՝ բարձր որակով և
        հարմարեցված ձեր բիզնեսի կարիքներին։
      </div>
    ),
  },
  {
    category: 'Շենքերի Նախագծում և Կառուցում',
    title: 'Սենդվիչ վահանակով շենքերի նախագծում և կառուցում',
    src: img1.src,
    content: (
      <div>
        Մենք մասնագիտացված ենք սենդվիչ վահանակով շենքերի նախագծման և կառուցման
        մեջ՝ առաջարկելով📌Նախագծում 📌Կառուցում՝ որակյալ արդյունք ապահովելու
        համար։
      </div>
    ),
  },
];
