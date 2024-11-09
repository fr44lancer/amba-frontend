const typeTemplate = '${errorKey} is not a valid';

const antdConfig = {
  apiPrefix: '',
  appPrefix: '',
  notification: false,
  defaultLanguage: 'en',
  languages: [],
  antd: {
    validateMessages: {
      default: 'Validation error on field ${errorKey}',
      required: '${errorKey} is required',
      enum: '${errorKey} must be one of [${enum}]',
      whitespace: '${errorKey} cannot be empty',
      date: {
        format: '${errorKey} is invalid for format date',
        parse: '${errorKey} could not be parsed as date',
        invalid: '${errorKey} is invalid date',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${errorKey} must be exactly ${len} characters',
        min: '${errorKey} must be at least ${min} characters',
        max: '${errorKey} cannot be longer than ${max} characters',
        range: '${errorKey} must be between ${min} and ${max} characters',
      },
      number: {
        len: '${errorKey} must equal ${len}',
        min: '${errorKey} cannot be less than ${min}',
        max: '${errorKey} cannot be greater than ${max}',
        range: 'Please enter a number between ${min}-${max}.',
      },
      array: {
        len: '${errorKey} must be exactly ${len} in length',
        min: '${errorKey} cannot be less than ${min} in length',
        max: '${errorKey} cannot be greater than ${max} in length',
        range: '${errorKey} must be between ${min} and ${max} in length',
      },
      pattern: {
        mismatch: '${errorKey} does not match pattern ${pattern}',
      },
    },
  },
};

export default antdConfig;
