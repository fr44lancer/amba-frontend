import type { Dayjs } from 'dayjs';
// import { EventValue } from 'rc-picker/lib/interface';
import { LabeledValue } from 'antd/es/select';
import { IOptionItem } from '@/components/common/FormItems/Selects';
import { FormInstance } from 'rc-field-form/es/interface';
import { JSX, ReactNode } from 'react';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

declare type EventValue<DateType> = DateType | null;

export type Modify<T, R> = Omit<T, keyof R> & R;

type Generic = string;
type GenericFn = (value: Dayjs) => string;

export type FormatType = Generic | GenericFn | Array<Generic | GenericFn>;

export type RangeValue<DateType> =
  | [EventValue<DateType>, EventValue<DateType>]
  | null;

export type FilterChangeHandlerType = (
  value: string | number | LabeledValue,
  option: IOptionItem,
) => void;

export type DatePickerChangeHandlerType = (
  dates: (Dayjs | null)[] | null,
  dateStrings: string[],
) => void;

export type SubscriptionDurationType = 'Monthly' | 'Yearly';

export type PricingCardType = {
  name: string;
  durationType: SubscriptionDurationType;
  rank: number;
  Component: JSX.ElementType;
};

export type SubscriptionPlanType = {
  name: string;
  upgrade: BillingPlanType | null;
  durationType: SubscriptionDurationType;
  rank: number;
};

export type PricingCardFeatureType = {
  text: string | ReactNode;
  included: boolean;
};

export type PricingButtonType = 'Current' | 'Upgrade' | 'Downgrade';

type PlanPricing = {
  [key: string]: string;
};

type PlanDuration = {
  MONTHLY: PlanPricing;
  YEARLY: PlanPricing;
};

type Pricing = {
  [key: string]: PlanDuration;
};

export interface IRuleMethods extends FormInstance {}

export type PrimaryGoalTypes = 'personal' | 'professional';

export type ProfileFormTypes = 'general' | 'onboarding' | 'profile';

export type AgeTypeOptionsType = 'years' | 'months';

export type SexOptionsType = 'Male' | 'Female' | 'Other';

export type MenstrualCycleRegularityOptionsType =
  | 'Regular'
  | 'Irregular'
  | 'Paused due to breastfeeding'
  | 'Pregnant'
  | 'Menopause';

export type PhysicalActivityOptionsType =
  | 'Inactive'
  | 'Lightly active'
  | 'Moderately active'
  | 'Very active';

export type EthnicityOptionsType =
  | 'Black or African Descent'
  | 'White or European Descent'
  | 'Hispanic or Latino'
  | 'South Asian'
  | 'East Asian'
  | 'Middle Eastern'
  | 'Pacific Islander'
  | 'Multiracial or Other';

export type SmokingIntensityOptionsType =
  | 'Non-smoker'
  | '1-10 cigarettes'
  | 'About 1 pack'
  | 'More than 1 pack'
  | 'Electronic cigarettes/vaping';

export type AlcoholIntakeOptionsTypes =
  | 'Non-drinker'
  | '1-3 standard drinks'
  | '4-7 standard drinks'
  | '8-14 standard drinks'
  | '15+ standard drinks';

export type DietHabitsOptionsTypes =
  | 'Non-specific diet'
  | 'Balanced meals'
  | 'Frequent Fast Food'
  | 'Specific diet plan';

export type SleepPatternOptionsTypes =
  | '7-9 hours'
  | 'Less than 6 hours'
  | 'More than 9 hours'
  | 'Varies significantly or interrupted sleep';

export type StressLevelOptionsTypes =
  | 'Rarely stressed'
  | 'Manageable stress'
  | 'Regular (daily) stress'
  | 'Almost always stressed';

export type MeasurementSystemType = 'imperial' | 'metric';
export type ObjectLiteralType = {
  [key: string]: any;
};

export type MarkerConfig = {
  result: string;
  units: string;
  reference_range: string;
  explanation_out_of_range: string;
  explanation_general: string;
  out_of_range: boolean;
  out_direction: string;
};

export type BillingPlanType = 'free' | 'lite' | 'pro' | 'premium';
export type BillingPlanDuration = 'Monthly' | 'Yearly';

export type BillingPlanParams = {
  plan: BillingPlanType;
  duration: BillingPlanDuration;
};

export type DocusFeature =
  | 'Message limit reached.'
  | 'Lab test interpretation limit reached.'
  | 'Health report limit reached.';

export type SuggestedResourceType = {
  link_title: string;
  category: string;
  url: string;
};

export type SharedDocumentType = 'testResult' | 'conversationSummary';

export type IssueModelType =
  | 'general'
  | 'conversation'
  | 'message'
  | 'testResult'
  | 'biomarker'
  | 'healthReport';
