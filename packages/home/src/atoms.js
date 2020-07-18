import { atom } from 'recoil';

export const selectedItems = atom({
  key: 'selectedItems',
  default: [],
});
