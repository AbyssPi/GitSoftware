# Database Contract

> Defines structural guarantees for database schema and access patterns.

## Rules

1. All tables must have `id`, `created_at`, and `updated_at` columns
2. All foreign keys must have corresponding indexes
3. Soft deletes preferred over hard deletes (`deleted_at` column)
4. All schema changes must go through migrations in `runtime/migrations/`
5. Seed data must be idempotent and placed in `runtime/seeds/`

## Naming

- **Tables**: `snake_case`, plural (e.g. `users`, `order_items`)
- **Columns**: `snake_case` (e.g. `created_at`, `user_id`)
- **Indexes**: `idx_{table}_{column(s)}`
- **Foreign keys**: `fk_{table}_{ref_table}`
