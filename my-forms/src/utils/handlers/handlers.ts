import { VALID_FILE_EXTENSIONS } from '../constants/constants';

export const isValidFileExtension = (fileName: string) => {
  const extension: string = fileName.split('/').reverse()[0];
  return VALID_FILE_EXTENSIONS.includes(extension);
};
