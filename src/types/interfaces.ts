import React from 'react';
import { FlagIconCode } from 'react-flag-kit';
import {
  AgeTypeOptionsType,
  AlcoholIntakeOptionsTypes,
  DietHabitsOptionsTypes,
  EthnicityOptionsType,
  MeasurementSystemType,
  MenstrualCycleRegularityOptionsType,
  PhysicalActivityOptionsType,
  PrimaryGoalTypes,
  SexOptionsType,
  SharedDocumentType,
  SleepPatternOptionsTypes,
  SmokingIntensityOptionsType,
  StressLevelOptionsTypes,
  SubscriptionDurationType,
} from '@/types/global.types';

export interface IRateLimit {
  message: number;
  report: number;
  validation: number;
  testResult: number;
}

export interface IUser {
  id: number;
  uuid: string;
  email: string;
  subscription_name: IUserRole;
  subscription_duration: SubscriptionDurationType;
  subscription_version: string | null;
  permissions: string[];
  limits: IRateLimit;
  usage: IRateLimit;
  nickname: string | null;
  primaryGoal: string | null;
  language: string | null;
  country: string | null;
  progress: IProfileProgress | null;
  onboarded: boolean;
}

export type IUserRole = 'Free' | 'Lite' | 'Pro' | 'Premium';

export type ChatRelatedModelType = 'message' | 'testResult' | 'biomarker';

export interface ChatData {
  _id: string;
  chatType: string;
  userId: number;
  messages: UiMessage[];
  conversationId: string;
  supportId: string;
  report: Report;
  reportStatus: string | null;
  reportInit: boolean;
  reportPath: string;
  reportRequestedAt: string;
  reportReview?: Review;
  validation: Validation;
  validationStatus: string;
  validationReview: Review;
  status: string;
  hasExperts: boolean;
  expertsIndex: number;
  expertsCompared: boolean;
  experts: SuggestedExpert[];
  createdAt: string;
  updatedAt: string;
  reported?: boolean;
  hasRelatedModel?: boolean;
  relatedModelType?: ChatRelatedModelType;
  relatedModelUid?: string;
  __v: number;
}

export interface SuggestedExpert {
  id: string;
}

export interface UiMessage {
  messageUid: string;
  role: 'AI' | 'system' | 'Human' | 'loading';
  text: string;
  reported?: boolean;
  visionFile?: VisionFile;
  createdAt?: string;
}

export type IMessageType =
  | 'message'
  | 'generated'
  | 'expert'
  | 'lab_test'
  | 'report'
  | 'compare'
  | 'expert_link'
  | 'external_link';

export interface VisionFile {
  filePath: string;
  fileExtractedText: string;
  fileName: string;
}

interface Report {
  id: string;
  object: string;
  created: number;
  model: string;
  content: string;
}

export interface Validation {
  expertName: string;
  expertLink: string;
  content: string;
  status: string;
}

export interface IFeedback {
  conversationId?: string;
}

export interface IFeedbackFormData {
  rating?: number;
  content?: string;
}

export interface Review {
  rating: number;
  content: string;
}

export interface IExpert {
  id: number;
  name: string;
  slug: string;
  surname: string;
  date_birth: string;
  avatar: string;
  experience_since: number;
  country: ICountry;
  specialties: ISpecialty[];
  subspecialties: ISubspecialty[];
  diseases: IDisease[];
}

export interface IExpertBio extends IExpert {
  subspecialties: ISubspecialty[] | [];
  diseases: IDisease[] | [];
  procedures: IProcedure[] | [];
  jobs: IJob[] | [];
  educations: IEducation[] | [];
  bio: string | null;
  affiliations: IAffiliation[] | [];
  awards: IAward[] | [];
  publication_description: string | null;
  publications: IPublication[] | [];
  written_rate: number;
  videocall_rate: number;
}

export interface ISubspecialty {
  id: number;
  name: string;
  description: string | null;
  expert_count: number;
}

export interface IDisease {
  id: number;
  name: string;
  description: string | null;
  expert_count: number;
}

export interface ISpecialty {
  id: number;
  name: string;
  description: string | null;
  expert_count: number;
  subspecialties: ISubspecialty[] | [];
  diseases: IDisease[] | [];
}

export interface ICountry {
  id: number;
  name: string;
  country_code: FlagIconCode;
}

export type IProcedure = {
  id: number;
  name: string;
  description: string | null;
};

export type IJob = {
  title: string;
  organization: string | null;
  location: string | null;
  start_year: string | null;
  end_year: string | null;
};

export type IEducation = {
  education_title: string;
  graduation_year: string | null;
};

export type IAffiliation = {
  title: string;
};

export type IAward = {
  title: string;
  year: string | null;
};

export type IPublication = {
  title: string;
  url: string | null;
};

export interface IBookConsultationForm {
  full_name?: string;
  phone: string;
  location?: string;
  diagnosis?: string;
  description?: string;
  expert_user_id: number;
}

export interface IPrimaryGoal {
  primaryGoal: PrimaryGoalTypes;
}

export interface OnBoardingStepItem {
  title: string;
  slug: string;
  children: { [key: number]: OnBoardingChildItem };
}

export interface OnBoardingChildItem {
  key?: string;
  subTitle: string;
  text?: string;
  parentIndex: number;
  Component?: React.ElementType;
}

export interface ProfileUpdateStep {
  key: string;
  group: string;
  type?: string;
  prevSlug: string | null;
  currentSlug: string;
  nextSlug: string | null;
  subTitle: string;
  text: string;
  Component: React.ComponentType<any>;
  final?: boolean;
}

export interface ProfileUpdateStepChildren {
  [key: number]: ProfileUpdateStep;
}

export interface ProfileUpdateStepItem {
  title: string;
  slug: string;
  children: ProfileUpdateStepChildren;
}

export type ProfileFormNavigation = {
  prevSlug: string | null;
  prevSlugGroup: string | null;
  nextSlug: string | null;
  nextSlugGroup: string | null;
};

export interface IProfile {
  age: number | null;
  ageType: string | null;
  height: number | null;
  heightType: string | null;
  weight: number | null;
  weightType: string | null;
  ethnicity: string | null;
  sex: string | null;
  pregnant: string | null;
  menstrualCycleRegular: string | null;
  conditions: string | null;
  allergy: string | null;
  surgeries: string | null;
  medications: string | null;
  smoking: string | null;
  alcohol: string | null;
  diet: string | null;
  activity: string | null;
}

export interface IOnboardingProfile {
  age: number | null;
  nickname: string;
  ageType: AgeTypeOptionsType | null;
  measurementSystem: MeasurementSystemType;
  height: number | null;
  heightInch: number | null;
  weight: number | null;
  ethnicity: EthnicityOptionsType | null;
  ethnicitySpec: string | null;
  sex: SexOptionsType | null;
  menstrualCycleRegular: MenstrualCycleRegularityOptionsType | null;
  conditions: string | null;
  healthConditionsItems: [];
  hasConditions: boolean;
  hasFamilyHistory: boolean;
  familyHistory: string | null;
  familyHistoryItems: [] | null;
  hasAllergy: boolean;
  allergy: string | null;
  allergyItems: [] | null;
  hasSurgeries: boolean;
  surgeries: string | null;
  hasMedications: boolean;
  medications: string | null;
  hasPrevMedications: boolean;
  prevMedications: string | null;
  smoking: SmokingIntensityOptionsType | null;
  alcohol: AlcoholIntakeOptionsTypes | null;
  hasDiet: DietHabitsOptionsTypes | null;
  diet: string | null;
  activity: PhysicalActivityOptionsType | null;
  sleepPattern: SleepPatternOptionsTypes | null;
  stress: StressLevelOptionsTypes | null;
  secondaryNickname?: string | null;
  lastSavedStep: string | null;
}

export type TestResultExtractionStatus =
  | 'started'
  | 'extracted'
  | 'completed'
  | 'failed';

export interface TestResultData {
  testResultUid: string;
  type: TestResultType;
  category: string;
  message: string;
  status: TestResultStatus;
  supportId: string;
  date: string;
  biomarkers: string | null;
  biomarkersList: IBiomarker[];
  biomarkersSet: IBiomarker[];
  report: string | null;
  inMemory?: boolean;
  visionFile?: VisionFile;
  createdAt: string;
  version: number;
  text?: string;
  reported?: boolean;
  source?: string;
  extractedDocument?: any;
  foundCount?: number;
  extractionStatus?: TestResultExtractionStatus;
}

export type TestResultType =
  | 'blood'
  | 'urine'
  | 'pap_smear'
  | 'semen_analysis'
  | 'stool'
  | 'swab'
  | 'checkup'
  | 'other';

export type TestResultStatus =
  | 'pending'
  | 'completed'
  | 'failed'
  | 'draft'
  | 'not_analyzed';

export interface ISupportTicketType {
  id: number;
  name: string;
}

export interface ISupportTicketStatus {
  id: number;
  name: string;
}

export interface ISupportTicketListItem {
  id: number;
  type: ISupportTicketType;
  status: ISupportTicketStatus;
  created_at: string;
}

export interface ISupportTicketCommentFile {
  id: number;
}

export interface ISupportTicketComment {
  id: number;
  description: string;
  files: ISupportTicketCommentFile[];
  created_by: number;
  created_at: string;
}

export interface ISupportTicket {
  id: number;
  type: ISupportTicketType;
  status: ISupportTicketStatus;
  comments: ISupportTicketComment[];
  created_at: string;
}

export interface SuggestedQuestion {
  id: number;
  question: string;
}

export interface INotification {
  _id: string;
  userId: number;
  userUuid: string;
  action?: string | null;
  description?: string | null;
  feature: string;
  model: string;
  modelId: string;
  status: string;
  isRead: boolean;
  meta?: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface IProfileProgress {
  profile: number;
  testResult: number;
  patient: number;
}

export interface IUserSettingUpdate {
  language?: string;
  country?: string;
  nickname?: string;
  progress?: IProfileProgress;
  firstVisitPurpose?: string;
  primaryGoal?: PrimaryGoalTypes;
  onboarded?: boolean;
  onboardingVersion?: number;
}

export interface IUserSetting {
  language: string;
  country: string;
  nickname: string;
  progress: IProfileProgress;
  firstVisitPurpose: string;
  primaryGoal: PrimaryGoalTypes;
  onboarded: boolean;
  onboardingVersion: number;
}

export interface IPatientListItem {
  patientUuid: string;
  nickname: string;
}

interface IMemoryHistoryData {
  content: string;
  additional_kwargs: Record<string, unknown>;
  response_metadata: Record<string, unknown>;
  type: string;
  name: string | null;
  id: string | null;
  example: boolean;
}

export interface IMemoryHistory {
  type: string;
  data: IMemoryHistoryData;
}

export interface IMemory {
  _id: string;
  SessionId: string;
  History: string;
  Memory: string;
  Type: string;
  ModelId: string;
  vectorised: boolean;
  inMemory: boolean;
  createdAt: string;
}

export interface ISharedUser {
  sharedDocumentUid: string;
  sharedWithEmail: string;
  createdAt: string;
}

export interface ISharedDocument {
  sharedDocumentUid: string;
  userId: number;
  userUuId: string;
  personalToken: string;
  userNickname: string;
  sharedWithId: number;
  sharedWithUuId: string;
  sharedWithEmail: string;
  generalInfo: IDocumentGeneralInfo;
  document: IDocument;
  createdAt: string;
}

export interface IDocument {
  id: string;
  uId: string;
  type: SharedDocumentType;
  title: string;
  report: string;
  description?: string;
  additionalInfo?: string;
  date: string;
}

export interface IDocumentGeneralInfo {
  age: number;
  ageType: string;
  height: number | null;
  heightInch: number | null;
  formattedHeight: string;
  measurementSystem: 'imperial' | 'metric' | null;
  weight: number | null;
  formattedWeight: string;
  ethnicity: string | null;
  ethnicitySpec: string | null;
  sex: string | null;
}

export interface IIssueCreated {
  issueUid: string;
  createdAt: string;
}

export interface IGlobalBiomarker {
  id: number;
  title: string;
  synonyms: Array<{
    title: string;
    language: string;
  }>;
  possibleValueMax: number;
  possibleValueMin: number;
  isAllowAutounit: boolean;
  biomaterialId: number;
  substanceId: number;
  displayCategoryId: number;
  pregnancyCorrelation: number;
  sortOrder: number;
  isPaid: boolean;
  articleId: number;
  unitsFactors: UnitWithCoefficient[];
  availableUnits: {
    [key: string]: {
      id: number;
      coefficient: number | string;
    };
  };
  units: IUnit[];
  unitIds: [number];
}

export interface IEditableBiomarker {
  biomarkerUid: string;
  globalBiomarker?: IGlobalBiomarker;
  name: string;
  unit: string;
  value: number | string | undefined;
  standard_unit_id: number;
  standard_id: number;
  standard_name: string;
}

interface BiomarkerStep {
  label: string;
  value: string;
}

export interface IBiomarker {
  type: string;
  valueType: string;
  biomarkerUid: string;
  globalBiomarker: IGlobalBiomarker;
  userId: number;
  testResultUid: string;
  visionId: number;
  testType: string;
  date: string;
  name: string;
  original_name: string;
  unit: string;
  original_unit: string;
  standard_unit_id: number;
  standard_unit: string;
  standard_id: number;
  standard_name: string;
  value: number | string | undefined;
  reference_range: any;
  reference_range_minimum: any;
  reference_range_maximum: any;
  reference_range_unit: string;
  explanation_out_of_range: string;
  explanation_general: string;
  out_of_range?: boolean;
  out_direction?: string;
  biomarkersDynamics: IBiomarker[];
  availableUnits?: {
    [key: string]: {
      id: number;
      coefficient: number | string;
    };
  };
  reported?: boolean;
  matched?: boolean;
  original_reference_range?: string;
  steps?: BiomarkerStep[];
  convertedValue?: number;
  convertedMinRange?: number;
  convertedMaxRange?: number;
  pureDate?: Date;
  sortDate?: number;
  hex_value?: string;
}

export interface ICheckupPlan {
  checkupPlanUid: string;
  title: string;
  updatedAt: string;
  recommendedScreenings: IScreening[];
  frequency: string;
  status: string;
}

export interface IScreening {
  name: string;
}

export interface IUnit {
  id: number;
  title: string;
  synonymsString?: string;
  valueType: number;
}

//Image annoatations

export interface BiomarkerBlockAnnotation {
  id: string;
  parentId: string;
  text: string;
  type: string;
  confidence: number;
  boundingBox: { x: number; y: number }[];
}

export type UnitWithCoefficient = [number, number];

// Define an interface for the outer array structure
export interface UnitsFactors {
  unitsWithFactors: UnitWithCoefficient[];
}
