export default {
  name: "shows",
  title: "Shows",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "facebookUrl",
      title: "Facebook URL",
      type: "string"
    },
    {
      name: "ticketUrl",
      title: "Ticket URL",
      type: "string"
    },
    {
      name: "date",
      title: "Show Date",
      type: "datetime"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    }
  ]
};
