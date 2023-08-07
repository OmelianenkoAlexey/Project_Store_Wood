export const rulesText = {
  required: (field) => `Треба ввести ${field}.`,
};
export const rulesTextEn = {
  required: (field) => `Must be entered ${field}.`,
};
export const addFormRulesImage = {
  required: (field) => `Треба додати ${field}.`,
};
export const addFormRulesImageEn = {
  required: (field) => `It should be added ${field}.`,
};

export const adminRules = {
  login: {
    required: { value: true, message: rulesText.required('логін') },
  },
  password: {
    required: { value: true, message: rulesText.required('пароль') },
  },
  agreement: {
    required: { value: true, message: rulesText.required('погодження на обробку персональних даних') },
  },
};

export const addFormRules = {
  name: {
    required: { value: true, message: rulesText.required('Ім’я') },
  },
  nameEn: {
    required: { value: true, message: rulesTextEn.required('Name') },
  },
  mail: {
    required: { value: true, message: rulesText.required('E-mail') },
  },
  mailEn: {
    required: { value: true, message: rulesTextEn.required('E-mail') },
  },
  number: {
    required: { value: true, message: addFormRulesImage.required('Номер телефону') },
  },
  numberEn: {
    required: { value: true, message: addFormRulesImageEn.required('Phone number') },
  },
  coment: {
    required: { value: true, message: addFormRulesImage.required('Ваш коментар') },
  },
  comentEn: {
    required: { value: true, message: addFormRulesImageEn.required('Your comment') },
  },
  department: {
    required: { value: true, message: addFormRulesImage.required('Відділення') },
  },
};
