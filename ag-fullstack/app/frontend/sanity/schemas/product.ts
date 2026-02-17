import { defineField, defineType } from "sanity";

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "fullDescription",
            title: "Full Description",
            type: "text",
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "string",
            description: 'Product price including currency symbol, e.g. "$24" or "Free"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "versions",
            title: "Versions",
            type: "array",
            of: [{ type: "string" }],
            description: 'Available versions/tiers, e.g. "Basic Pack", "Premium Pack"',
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "price",
            media: "image",
        },
    },
});
