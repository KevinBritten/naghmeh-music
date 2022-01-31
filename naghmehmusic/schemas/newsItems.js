export default {
  name: "newsItems",
  title: "News Items",
  type: "document",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string"
    },
    {
      name: "publication",
      title: "Publication",
      type: "string"
    },
    {
      name: "publishDate",
      title: "Publish Date",
      type: "date"
    },
    {
      name: "logo",
      title: "Publication Logo",
      type: "image"
    },
    { name: "link", title: "Link", type: "url" }
  ]
};
