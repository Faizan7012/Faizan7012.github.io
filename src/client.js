import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "06yd5fkd",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skYJdiclYFJ3qJnM3BrJLieJaBjp1SI8Qu1WzG1aS2jktxJXK83fow3bVqYz4fRfnelDCMJ9bxySrZpDcDhxv5unkIl01SKhAdM4E9N9e7z5ZVe75SH5JI5sayhlwXkeHRHZuK4ikuAKBH9VMPGscAks1y6KplOel1DK6MBnabI73KxcCqGS1x",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
