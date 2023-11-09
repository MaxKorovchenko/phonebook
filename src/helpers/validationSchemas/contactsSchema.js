import * as Yup from 'yup';

const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const phoneError =
  'Valid phone numbers may consist of digits, spaces, dashes, parentheses, and may start with a plus sign';

export const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please, enter contact name'),
  number: Yup.string()
    .matches(phoneRegex, phoneError)
    .required('Please, enter phone number'),
});
