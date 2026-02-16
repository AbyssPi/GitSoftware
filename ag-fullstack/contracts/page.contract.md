# Page Contract

> Defines structural guarantees for pages/routes.

## Rules

1. Each page must have a unique route
2. Pages must handle SEO meta tags (title, description)
3. Pages must implement proper loading states
4. Pages must handle authentication requirements
5. Pages must use layouts from `layouts/`

## Structure

```
page-name/
├── page.tsx         # Page component
├── loader.ts        # Data loading logic
└── page.test.ts     # Page tests
```
