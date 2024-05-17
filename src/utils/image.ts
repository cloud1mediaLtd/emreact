import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2023-02-08",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}

export function videoUrl(assetRef?: string): string {
  if (!assetRef) {
    console.error("Invalid or missing assetRef:", assetRef);
    return ""; // Return a default fallback URL or an empty string
  }

  // Extract the asset ID and file extension from the asset reference
  const match = assetRef.match(/file-(.*?)-(mp4|mov)$/);
  if (!match) {
    console.error("Invalid assetRef format:", assetRef);
    return ""; // Return a default fallback URL or an empty string if the format does not match
  }

  const [_, assetId, extension] = match;
  return `https://cdn.sanity.io/files/${
    import.meta.env.PUBLIC_SANITY_PROJECT_ID
  }/${import.meta.env.PUBLIC_SANITY_DATASET}/${assetId}.${extension}`;
}
