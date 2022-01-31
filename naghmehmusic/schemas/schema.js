// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import videos from "./videos";
import photoAlbums from "./photoAlbums";
import spotifyPlaylists from "./spotifyPlaylists";
import products from "./products";
import information from "./information";
import shows from "./shows";
import newsItems from "./newsItems";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    videos,
    photoAlbums,
    spotifyPlaylists,
    products,
    information,
    shows,
    newsItems
    /* Your types here! */
  ])
});
