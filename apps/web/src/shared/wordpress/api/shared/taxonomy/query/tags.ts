export type TagQueryArgs = {
  id: number;
};

export const getTagQuery = (args?: TagQueryArgs) => {
  if (!args?.id) {
    return "";
  }
  return `&tags=${args.id}`;
};
