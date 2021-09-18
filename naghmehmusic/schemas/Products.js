export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "details",
      title: "Details",
      type: "string"
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
  ]
};
