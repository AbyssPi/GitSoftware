// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = Record<string, any>;

/* ── Sanity document types ────────────────────────────────────── */

export interface SanityCategory {
    _id: string;
    _type: "category";
    title: string;
    slug: { current: string };
    description?: string;
}

export interface SanityProduct {
    _id: string;
    _type: "product";
    title: string;
    slug: { current: string };
    price: string;
    category: SanityCategory;          // dereferenced inline via GROQ
    image?: SanityImageSource;
    fullDescription?: string;
    versions?: string[];
}
