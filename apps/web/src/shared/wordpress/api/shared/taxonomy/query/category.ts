export type CategoryQueryArgs = {
  id: number;
};

export const getCategoryQuery = (args?: CategoryQueryArgs) => {
  if (!args?.id) {
    return "";
  }
  return `&categories=${args.id}`;
};
