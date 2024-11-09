'use client';

import { useRouter } from 'next/navigation';
import { faSparkles } from '@awesome.me/kit-cd4b61b612/icons/classic/solid';
import { Analytics } from '@/libs/GoogleAnalytics';
import StyledMainUpgradePlanButton from '@/components/common/Buttons/MainUpgradePlanButton/style';
import { staticRoutes } from '@/utils/router/staticRoutes';

const MainUpgradePlanButton = () => {
  const router = useRouter();
  const redirectToPricing = () => {
    Analytics.sendCheckoutBeginEventToGA();
    router.push(staticRoutes.pricing);
  };

  return (
    <StyledMainUpgradePlanButton
      icon={faSparkles}
      iconFontSize={14}
      className={`orange text-white`}
      fontWeight={'semibold'}
      onClick={redirectToPricing}
    >
      Upgrade
    </StyledMainUpgradePlanButton>
  );
};

export default MainUpgradePlanButton;
