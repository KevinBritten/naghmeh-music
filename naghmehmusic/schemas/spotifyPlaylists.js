export default {
  name: "spotifyPlaylists",
  title: "Spotify Playlists",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "url",
      title: "Spotify URL",
      type: "string"
    },
    {
      name: "section",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Album", value: "album" },
          { title: "Feature", value: "feature" }
        ],
        layout: "radio"
      }
    }
  ]
};
