import { orderRankField } from "@sanity/orderable-document-list";

export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    orderRankField({ type: "products" }),

    {
      name: "name",
      title: "Name",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English Name",
          type: "string"
        },
        {
          name: "fr",
          title: "French Name",
          type: "string"
        }
      ]
    },
    {
      name: "details",
      title: "Details",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "string"
        },
        {
          name: "fr",
          title: "French",
          type: "string"
        }
      ]
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "url",
      title: "Bandcamp URL",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    }
  ],
  preview: {
    select: {
      title: "name"
    },
    prepare(selection) {
      return { title: selection.title.en };
    }
  }
};
