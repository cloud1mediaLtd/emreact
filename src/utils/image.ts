import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}

export function videoUrl(assetRef?: string): string {
  if (!assetRef) {
    console.error("Invalid or missing assetRef:", assetRef);
    return ""; // Return a default fallback URL or an empty string
  }

  const assetId = assetRef.replace("file-", "").replace("-mp4", "");
  return `https://cdn.sanity.io/files/${
    import.meta.env.PUBLIC_SANITY_PROJECT_ID
  }/${import.meta.env.PUBLIC_SANITY_DATASET}/${assetId}.mp4`;
}
