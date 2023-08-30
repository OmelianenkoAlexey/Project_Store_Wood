export const rulesTextDe = {
  required: (field) => `Muss eingegeben werden ${field}.`,
};
export const rulesTextEn = {
  required: (field) => `Must be entered ${field}.`,
};
export const rulesTextPl = {
  required: (field) => `Należy wpisać ${field}.`,
};
export const addFormRulesImageDe = {
  required: (field) => `Es sollte hinzugefügt werden ${field}.`,
};
export const addFormRulesImageEn = {
  required: (field) => `It should be added ${field}.`,
};
export const addFormRulesImagePl = {
  required: (field) => `Należy to dodać ${field}.`,
};

export const adminRules = {
  login: {
    required: { value: true, message: rulesTextEn.required('login') },
  },
  password: {
    required: { value: true, message: rulesTextEn.required('password') },
  },
  agreement: {
    required: { value: true, message: rulesTextEn.required('happy for the processing of personal data') },
  },
};

export const addFormRules = {
  nameEn: {
    required: { value: true, message: rulesTextEn.required('Name') },
  },
  nameDe: {
    required: { value: true, message: rulesTextDe.required('Name') },
  },
  namePl: {
    required: { value: true, message: rulesTextPl.required('Nazwa') },
  },
  mailEn: {
    required: { value: true, message: rulesTextEn.required('E-mail') },
  },
  mailDe: {
    required: { value: true, message: rulesTextDe.required('E-mail') },
  },
  mailPl: {
    required: { value: true, message: rulesTextPl.required('E-mail') },
  },
  numberEn: {
    required: { value: true, message: addFormRulesImageEn.required('Phone number') },
  },
  numberDe: {
    required: { value: true, message: addFormRulesImageDe.required('Telefonnummer') },
  },
  numberPl: {
    required: { value: true, message: addFormRulesImagePl.required('Numer telefonu') },
  },
  comentEn: {
    required: { value: true, message: addFormRulesImageEn.required('Your comment') },
  },
  comentDe: {
    required: { value: true, message: addFormRulesImageDe.required('Dein Kommentar') },
  },
  comentPl: {
    required: { value: true, message: addFormRulesImagePl.required('Twój komentarz') },
  },
};
