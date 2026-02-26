/* ── GROQ queries for Sanity CMS ──────────────────────────────── */

/** Fetch every category (title, slug, description). */
export const getCategoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  icon {
    asset->{
      url
    }
  }
}`;

/** Fetch every product with its category dereferenced. */
export const getProductsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  price,
  image,
  fullDescription,
  versions,
  category-> {
    _id,
    title,
    slug,
    description
  }
}`;

/** Fetch a single product by slug. */
export const getProductBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  price,
  image,
  fullDescription,
  versions,
  category-> {
    _id,
    title,
    slug,
    description
  }
}`;

/** Fetch products belonging to a specific category slug. */
export const getProductsByCategoryQuery = `*[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
  _id,
  title,
  slug,
  price,
  image,
  fullDescription,
  versions,
  category-> {
    _id,
    title,
    slug,
    description
  }
}`;
