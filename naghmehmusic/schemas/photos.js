export default {
  name: "photos",
  title: "Photos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
    }
    // prepare(selection) {
    //   const { title, media } = selection;
    //   return {
    //     title: title.name,
    //     media: media
    //   };
    // }
  }
};
