export const createIdGenerator = (prefix: string = 'id') => {
  let i = 0;
  return () => `${prefix}-${i++}`;
};
