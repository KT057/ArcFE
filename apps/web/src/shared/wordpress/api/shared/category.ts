export type Category = {
  id: number;
};

export const getCategoryQuery = (category?: Category) => {
  if (!category?.id) {
    return "";
  }
  return `&categories=${category.id}`;
};
