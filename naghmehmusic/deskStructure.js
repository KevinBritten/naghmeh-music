// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export default () =>
  S.list()
    .title("Base")
    .items([
      //   S.listItem("information"),
      //   S.documentList("information"),
      S.documentTypeListItem("information"),

      orderableDocumentListDeskItem({
        type: "photoAlbums",
        title: "Photo Albums"
      }),
      orderableDocumentListDeskItem({
        type: "newsItems",
        title: "News Items"
      })
    ]);
