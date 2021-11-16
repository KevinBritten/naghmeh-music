export default {
  name: "information",
  title: "Information",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string"
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "name"
    },
    prepare(selection) {
      return { title: "Edit This Document" };
    }
  }
};