# File Rules

> Rules governing file creation, placement, and organization.

## Directory Ownership

| Directory       | Purpose                              | Editable By     |
|-----------------|--------------------------------------|-----------------|
| `system/`       | Architecture & policies              | Humans only     |
| `directives/`   | Feature specifications               | Humans only     |
| `contracts/`    | Structural guarantees                | Humans only     |
| `app/`          | Production application code          | Humans + AI     |
| `runtime/`      | Scripts, migrations, seeds           | Humans + AI     |
| `.generated/`   | Raw AI output                        | AI only         |
| `.staging/`     | Validated AI output                  | AI only         |
| `.snapshots/`   | Versioned generation states          | System          |
| `.tmp/`         | Disposable temporary files           | Anyone          |

## Rules

1. Never place application code outside `app/`
2. Never manually edit `.generated/` files
3. All code in `app/` must be validated and reviewed
4. `.tmp/` can be wiped at any time without consequence
