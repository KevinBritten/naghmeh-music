export default {
  name: "videos",
  title: "Youtube Videos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "subtitle",
      title: "Subtitle",
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
      name: "code",
      title: "Youtube Code",
      type: "string"
    }
  ]
};
