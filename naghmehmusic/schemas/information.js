export default {
  name: "information",
  title: "Information (edit documents only)",
  type: "document",
  fields: [
    {
      name: "language",
      title: "Language",
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
    },
    {
      name: "callToAction",
      title: "Call to Action",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "homepageButton",
      title: "Homepage Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string"
        },
        {
          name: "target",
          title: "Target Page",
          type: "string"
        }
      ]
    },
    {
      name: "bioImages",
      title: "Bio Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "photo",
          title: "Photo",

          fields: [
            {
              name: "imageName",
              title: "Image Name",
              type: "object",

              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string"
                }
              ]
            },

            {
              name: "image",
              title: "Image",
              type: "image"
            }
          ],
          preview: {
            select: {
              title: "imageName",
              media: "image"
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title.name,
                media: media
              };
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "language"
    },
    prepare(selection) {
      return { title: "Edit This Document (" + selection.title + ")" };
    }
  }
};
