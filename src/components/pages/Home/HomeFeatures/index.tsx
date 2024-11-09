'use client';
import React from 'react';
import { StickyScroll } from '@/components/ui/reveal-scroll';

const content = [
  {
    title: 'Մոդուլային Ստելաժներ',
    description:
      'AMBA Group-ը առաջարկում է մոդուլային ստելաժներ, որոնք հարմարեցվում են ցանկացած պահեստի կարիքներին՝ ապահովելով հեշտացված կազմակերպում և տարածքի օպտիմալ օգտագործում: Մեր ստելաժները դիզայնով ամուր և հուսալի են, նախատեսված մեծ ծանրաբեռնվածությամբ աշխատանքի համար:',
    content: (
      <div className="h-full w-full bg-gray-900 flex items-center justify-center text-white text-center p-6">
        Մոդուլային Ստելաժներ
      </div>
    ),
  },
  {
    title: 'Խիստ Հսկողություն և Ապահովություն',
    description:
      'AMBA Group-ի կողմից առաջարկվող պահեստավորման համակարգերը նախատեսված են առավելագույն ապահովության համար: Մենք տրամադրում ենք հսկողության լուծումներ, որոնք ապահովում են ապրանքների անվտանգ պահպանումը և կազմակերպվածությունը:',
    content: (
      <div className="h-full w-full bg-gray-900 flex items-center justify-center text-white text-center p-6">
        Խիստ Հսկողություն և Ապահովություն
      </div>
    ),
  },
  {
    title: 'Ջերմաստիճանի Կառավարման Լուծումներ',
    description:
      'AMBA Group-ը մասնագիտացած է սառնարանային պահեստների նախագծման և ջերմաստիճանի կառավարման լուծումների մեջ: Մեր սառնարանները նախատեսված են սննդի և այլ ապրանքների անվտանգ պահպանումը ապահովելու համար, որոնք պահանջում են խիստ պայմանավորվածություն:',
    content: (
      <div className="h-full w-full bg-gray-900 flex items-center justify-center text-white text-center  p-6">
        Ջերմաստիճանի Կառավարման Լուծումներ
      </div>
    ),
  },
  {
    title: 'Պրոֆեսիոնալ Աքսեսուարներ',
    description:
      'AMBA Group-ի աքսեսուարները ավելացնում են ձեր պահեստի կազմակերպման հարմարավետությունը՝ ներառելով տարբեր տեսակի բեռնափոխադրման և պահպանման լուծումներ: Դրանք նախատեսված են աշխատանքը հեշտացնելու և արդյունավետությունը բարձրացնելու համար:',
    content: (
      <div className="h-full w-full bg-gray-900 flex items-center justify-center text-white text-center p-6">
        Պրոֆեսիոնալ Աքսեսուարներ
      </div>
    ),
  },
  {
    title: 'Ճկուն Բեռնափոխադրման Սայլակներ',
    description:
      'Մենք առաջարկում ենք ճկուն և հարմար սայլակներ՝ բեռների հեշտ տեղափոխման համար: AMBA Group-ի սայլակները ապահովում են արագ և անվտանգ բեռնափոխադրում՝ հատկապես նախատեսված ծանրաբեռնված պահեստային տարածքների համար:',
    content: (
      <div className="h-full w-full bg-gray-900 text-center flex items-center justify-center text-white p-6">
        Ճկուն Բեռնափոխադրման Սայլակներ
      </div>
    ),
  },
];

export function HomeFeatures() {
  return (
    <div className="p-10 overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}
