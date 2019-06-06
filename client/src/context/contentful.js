import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "llsr7385zo1w",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "DvsZcYZ3hx8tfpPKs4vI4sTQm0jF-BT2-mTwpjc33xQ"
});
