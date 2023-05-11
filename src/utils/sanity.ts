import { createClient } from "@sanity/client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

if (
  !import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  !import.meta.env.PUBLIC_SANITY_DATASET
) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
});

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
  categories: Array<string>;
  readTime: string;
}

export async function getServices(): Promise<Service[]> {
  return await client.fetch(
    groq`*[_type == "services" && defined(slug.current)] | order(order asc)`
  );
}

export async function getService(slug: string): Promise<Service> {
  return await client.fetch(
    groq`*[_type == "services" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getHero(): Promise<Hero> {
  return await client.fetch(groq`*[_type == "hero"][0]`);
}

export async function getAbout(): Promise<About> {
  return await client.fetch(groq`*[_type == "about"][0]`);
}

export async function getContact(): Promise<Contact> {
  return await client.fetch(groq`*[_type == "contact"][0]`);
}

export interface Service {
  _type: "service";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
  categories: Array<string>;
  readTime: string;
  alt: string;
}

export interface Hero {
  _type: "hero";
  title?: string;
  mainImage?: ImageAsset;
  paragraph?: string;
  linkA?: string;
  linkB?: string;
}

export interface About {
  _type: "about";
  titlePart1?: string;
  titlePart2?: string;
  subTitle?: string;
  excerpt?: string;
  mainImage?: ImageAsset;
  alt: string;
  order: number;
  aboutBody: string;
  methodBody: string;
  environmentBody: string;
}

export interface Contact {
  _type: "contact";
  line1?: string;
  line2?: string;
  line3?: string;
  email?: string;
  address?: string;
}
