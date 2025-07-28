export const ValidateSlug = ({ data }: any) => {
  if (data?.title) {
    return {
      ...data,
      slug: data.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, ""),
    };
  }
  return data;
};
