export const setItem = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error: any) {
    console.error(error.message);
  }
};

export const getItem = (key: string) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? typeof value === 'string' ? JSON.parse(value) : value : undefined;
  } catch (error: any) {
    console.error(error.message);
  }
};