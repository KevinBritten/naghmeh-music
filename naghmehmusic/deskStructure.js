// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.documentTypeListItem("information"),
      S.documentTypeListItem("shows"),

      orderableDocumentListDeskItem({
        type: "photoAlbums",
        title: "Photo Albums"
      }),
      orderableDocumentListDeskItem({
        type: "newsItems",
        title: "News Items"
      }),
      orderableDocumentListDeskItem({
        type: "products",
        title: "Products"
      }),
      orderableDocumentListDeskItem({
        type: "videos",
        title: "Videos"
      }),
      orderableDocumentListDeskItem({
        type: "spotifyPlaylists",
        title: "Spotify Playlists"
      })
    ]);
