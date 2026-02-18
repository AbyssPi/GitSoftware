import createImageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

/**
 * Generate an image URL from a Sanity image record.
 * Usage: urlFor(product.image).width(600).url()
 */
export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}
