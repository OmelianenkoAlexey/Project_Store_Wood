export const rulesText = {
  required: (field) => `Треба ввести ${field}.`,
};
export const addFormRulesImage = {
  required: (field) => `Треба додати ${field}.`,
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
  mail: {
    required: { value: true, message: rulesText.required('E-mail') },
  },
  number: {
    required: { value: true, message: addFormRulesImage.required('Номер телефону') },
  },
  coment: {
    required: { value: true, message: addFormRulesImage.required('Ваш коментар') },
  },
  department: {
    required: { value: true, message: addFormRulesImage.required('Відділення') },
  },
};
