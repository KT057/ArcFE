export const getPublicPath = (path: string) => {
  const base = process.env.STORYBOOK_BASE ?? "";

  return `${base}${path}`;
};
