import dayjs from 'dayjs';
import { ObjectLiteralType } from '@/types/global.types';
import relativeTime from 'dayjs/plugin/relativeTime';
import screeningResultTypes from '@/utils/data/static/screeningResultTypes.json';

dayjs.extend(relativeTime);

export const dateTimeFormatter = (
  date: string,
  includeYear: boolean = false,
) => {
  if (includeYear) {
    return dayjs(date).format('DD MMM, YYYY, hh:mm A');
  }
  return dayjs(date).format('DD MMM, hh:mm A');
};

export const dateFormatter = (date: string) => {
  return dayjs(date).format('MMM DD, YYYY');
};

export const isWithinLastThreeDays = (createdAt: string) => {
  const threeDaysAgo = dayjs().subtract(3, 'day'); // Get the date and time for 3 days ago
  return dayjs(createdAt).isAfter(threeDaysAgo); // Check if createdAt is after this date
};

export const calculateExpertExperience = (startYear: number): number => {
  const now: Date = new Date();
  const start: Date = new Date(startYear, 0); // Assuming startYear is in YYYY format

  const diffInMilliseconds: number = now.getTime() - start.getTime();
  const millisecondsInYear: number = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years

  return Math.floor(diffInMilliseconds / millisecondsInYear);
};

export const removeTags = (str: string) => {
  if (str === null || str === '') return str;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, '');
};

export const concatSpecialties = (specialties: any) => {
  return specialties.map((specialty: any, index: number) => {
    return specialty.name + (index === specialties.length - 1 ? '' : ', ');
  });
};

export const lowerCaseStringAndRemoveSpaces = (string: string) => {
  return string.toLowerCase().replaceAll(' ', '_');
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isNumber = function isNumber(value: any) {
  return typeof value === 'number' && isFinite(value);
};

export const limitToTwoDecimals = (inputValue: string) => {
  // Remove any non-numeric characters except for the decimal point
  inputValue = String(inputValue).replace(/[^0-9.]/g, '');

  // Split the value by the decimal point
  const parts = inputValue.split('.');

  // Ensure there are at most two parts (before and after the decimal point)
  if (parts.length > 2) {
    parts.pop(); // Remove extra parts
  }

  // If there's a second part (after the decimal point), limit it to two digits
  if (parts[1] && parts[1].length > 2) {
    parts[1] = parts[1].slice(0, 2);
  }

  // Reconstruct the input value with at most two decimal places
  inputValue = parts.join('.');

  // Update the input element's value
  return inputValue === null || inputValue === ''
    ? inputValue
    : Number(inputValue);
};

type AgeType = 'years' | 'months';

export const getAgeAbbreviation = (ageType: AgeType): string => {
  switch (ageType) {
    case 'years':
      return 'y.o.';
    case 'months':
      return 'm.o.';
    default:
      throw new Error(`Unknown age type: ${ageType}`);
  }
};

export const getColorFromRange = (range: string) => {
  if (range === 'high') {
    return '#E95D53';
  } else if (range === 'moderate') {
    return '#F19A48';
  } else {
    return '#1A847C';
  }
};

export const getColorFromDirection = (direction: string | null) => {
  if (direction === 'normal') {
    return '#1A847C';
  }
  return '#F19A48';
};

export const getBiomarkerColor = (normal: boolean) => {
  if (normal) {
    return '#1A847C';
  }
  return '#F19A48';
};

export const getDotColor = (inside: boolean) => {
  if (inside) {
    return '#1A847C';
  }
  return '#F19A48';
};

export const getColorFromPercent = (percent: number) => {
  if (percent > 70) {
    return '#1A847C';
  } else if (percent > 40) {
    return '#F19A48';
  } else if (percent <= 40) {
    return '#E95D53';
  }

  return '#1A847C';
};

export const getDefinitionFromRange = (
  range: string,
  direction: string,
): string => {
  let definition: string = '';

  if (range === 'high') {
    definition += 'Significantly';
  } else if (range === 'normal') {
    definition += 'Normal';
  }

  if (direction === 'down') {
    definition += ' Low';
  } else if (direction === 'up') {
    definition += ' High';
  }

  return definition;
};

export const getDefinitionFromRangeV2 = (
  range: [number, number],
  value: number,
): string => {
  const [low, high] = range;

  if (value < low) {
    return 'Low';
  } else if (value > high) {
    return 'High';
  } else {
    return 'Normal';
  }
};

export function getFileExtension(filename: string | null | undefined) {
  if (!filename) {
    return null;
  }
  return filename.split('.').pop();
}

export const invokeFieldsValuesFromStepOptions = (
  stepOptions: ObjectLiteralType[],
): string[] => {
  return stepOptions.map((ethnicity) => ethnicity.value);
};

const notificationModelsRoutePrefix: { [key: string]: string } = {
  TestResult: '/test-results/',
};

export const generateNotificationRoute = (
  model: string,
  modelId: string,
): string => {
  const routePrefix = notificationModelsRoutePrefix[model];

  if (!routePrefix) {
    throw new Error(`Route prefix for model "${model}" not found`);
  }

  if (modelId) {
    return '/dashboard' + routePrefix + modelId;
  }

  return '/dashboard' + routePrefix;
};

export function getArrayLastValueByKey<T>(array: T[], key: keyof T): any {
  if (array.length === 0) {
    return null;
  }
  const lastItem = array[array.length - 1];
  return lastItem[key];
}

export function getArrayFirstValueByKey<T>(array: T[], key: keyof T): any {
  if (array.length === 0) {
    return null;
  }
  const firstItem = array[0];
  return firstItem[key];
}

export function getArrayMaxValueByKey<T>(
  array: T[],
  key: keyof T,
): number | null {
  if (array.length === 0) {
    return null;
  }
  return Math.max(...array.map((item) => item[key] as unknown as number));
}

export function getArrayMinValueByKey<T>(
  array: T[],
  key: keyof T,
): number | null {
  if (array.length === 0) {
    return null;
  }
  return Math.min(...array.map((item) => item[key] as unknown as number));
}

export function isNumberPair(array: any) {
  return (
    Array.isArray(array) &&
    array.length === 2 &&
    typeof array[0] === 'number' &&
    typeof array[1] === 'number'
  );
}

export const isNumberInRange = (
  num: number,
  range: [number, number],
): boolean => {
  const [min, max] = range;
  return num >= min && num <= max;
};

export const getScreeningResultTitleByType = (
  type: string,
): string | undefined => {
  return (screeningResultTypes as Record<string, string>)[type];
};
