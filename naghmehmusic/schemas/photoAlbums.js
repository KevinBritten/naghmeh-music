import { orderRankField } from "@sanity/orderable-document-list";

export default {
  name: "photoAlbums",
  title: "Photo Albums",
  type: "document",
  fields: [
    orderRankField({ type: "photoAlbums" }),

    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "images",
      title: "Images",
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
  ]
};
