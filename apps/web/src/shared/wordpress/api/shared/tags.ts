export type Tag = {
  id: number;
};

export const getTagQuery = (tag?: Tag) => {
  if (!tag?.id) {
    return "";
  }
  return `&tags=${tag.id}`;
};
