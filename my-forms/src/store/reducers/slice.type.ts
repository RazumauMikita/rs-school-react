import { countryList } from '../../utils/data/countryList';

export interface FormState {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  accept: boolean;
  gender: string;
  country: string;
  image: string;
}
export const initialState: FormState = {
  name: '',
  age: '',
  email: '',
  accept: false,
  password: '',
  confirmPassword: '',
  gender: '',
  country: '',
  image: '',
};
export interface AppDataState {
  countryList: string[];
  successfulSubmitRHForm: boolean;
  successfulSubmitUncontrolledForm: boolean;
}
export const initAppDataState: AppDataState = {
  countryList: countryList,
  successfulSubmitRHForm: false,
  successfulSubmitUncontrolledForm: false,
};
