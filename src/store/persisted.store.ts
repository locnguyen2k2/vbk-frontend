import { getItem } from '../utils/localStorage';

/* Use an IIFE to export the persisted state in a variable */
export const persistedState = (() => {
  try {
    const rawState = getItem('vbk_system');
    if (rawState === null) return undefined;
    return rawState;
  } catch (err) {
    return undefined;
  }
})();