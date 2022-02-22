import { orderRankField } from "@sanity/orderable-document-list";

export default {
  name: "newsItems",
  title: "News Items",
  type: "document",
  fields: [
    orderRankField({ type: "newsItems" }),

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
  ],
  preview: {
    select: {
      title: "headline",
      media: "logo"
    }
  }
};
