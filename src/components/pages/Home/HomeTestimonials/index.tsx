import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import testim1 from '@/assets/img/testim1.jpg';
import testim2 from '@/assets/img/testim2.jpg';
import testim3 from '@/assets/img/testim3.jpg';

export function HomeTestimonials() {
  const testimonials = [
    {
      quote:
        '«AMBA Group-ի լուծումների ներդրումը անխափան անցավ, և արդյունքները գերազանցեցին մեր սպասելիքները։ Պահեստավորման համակարգի ճկունությունը պարզապես զարմանալի է»։',
      name: 'Արման Մանուկյան',
      designation: 'Արկտիկա ՍՊԸ',
      src: testim1.src,
    },
    {
      quote:
        '«AMBA Group-ի կողմից առաջարկված լուծումները հիանալի աջակցեցին մեր պահեստային գործընթացներին։ Նրանց հետ աշխատելը հեշտ և արդյունավետ է»։',
      name: 'Աննա Սարգսյան',
      designation: 'Ֆրեշ Լոջիստիքս',
      src: testim2.src,
    },
    {
      quote:
        '«AMBA Group-ը մեզ օգնեց բարելավել մեր պահեստավորման արդյունավետությունը։ Նրանց մասնագիտական մոտեցումը և հուսալիությունը հիացնում են»։',
      name: 'Վահագն Հակոբյան',
      designation: 'Ֆուտուրա ՍՊԸ',
      src: testim3.src,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
