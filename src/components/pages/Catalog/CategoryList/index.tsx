import { HoverEffect } from '@/components/ui/hover-cards';
import img1 from '@/assets/img/catalog/cat1.jpg';
import img2 from '@/assets/img/catalog/cat2.jpg';
import img3 from '@/assets/img/catalog/cat3.jpg';
import img4 from '@/assets/img/catalog/cat4.jpg';
import img5 from '@/assets/img/catalog/cat5.jpg';
import img6 from '@/assets/img/catalog/cat6.jpg';

export function CategoryList() {
  return <HoverEffect items={services} />;
}
export const services = [
  {
    title: 'Ստելաժներ',
    description:
      'Ամուր և բազմաշերտ պահեստավորման լուծումներ մեծ ծավալի ապրանքների համար, ապահովելով առավելագույն արդյունավետություն և հուսալիություն պահեստավորման մեջ:',
    link: 'https://amba.am/stelajner',
    image: img1.src,
  },
  {
    title: 'Պահեստներ',
    description:
      'Բարձրակարգ պահեստավորման տարածքներ՝ նախատեսված ձեր բիզնեսի կարիքներին համապատասխան հարմարեցված լուծումներով:',
    link: 'https://amba.am/pahestner',
    image: img2.src,
  },
  {
    title: 'Սառնարաններ',
    description:
      'Ջերմաստիճանի կառավարման լուծումներ սննդի և այլ ապրանքների պահպանման համար, որոնք պահանջում են խիստ պայմանավորվածություն:',
    link: 'https://amba.am/sarnaraner',
    image: img3.src,
  },
  {
    title: 'Աքսեսուարներ',
    description:
      'Լրացուցիչ պահեստավորման սարքավորումներ և աքսեսուարներ, որոնք նպաստում են պահեստի կազմակերպմանն ու արդյունավետությանը:',
    link: 'https://amba.am/aksesuarner',
    image: img4.src,
  },
  {
    title: 'Սայլակներ',
    description:
      'Ճկուն և հարմար սայլակներ՝ բեռների տեղափոխման համար՝ հեշտացնելով և արագացնելով աշխատանքի գործընթացը պահեստում:',
    link: 'https://amba.am/saylaker',
    image: img5.src,
  },
  {
    title: 'Դրամարկղային սեղաններ',
    description:
      'Պրոֆեսիոնալ դրամարկղային սեղաններ՝ նախատեսված հարմարավետ և կազմակերպված առևտրի համար:',
    link: 'https://amba.am/dramarkghayin-seghaner',
    image: img6.src,
  },
];
