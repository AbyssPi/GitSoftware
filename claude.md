ag-fullstack/
│
├── system/                     # The brain (never touched by features)
│   ├── architecture.md
│   ├── stack.md
│   ├── conventions.md
│   ├── file-rules.md
│   └── generation-policy.md
│
├── directives/                 # WHAT to build
│   ├── 001-auth.md
│   ├── 002-products.md
│   ├── 003-checkout.md
│   └── 004-admin.md
│
├── contracts/                  # Structural guarantees
│   ├── api.contract.md
│   ├── component.contract.md
│   ├── page.contract.md
│   └── db.contract.md
│
├── app/                        # The real application (only valid code lives here)
│   │
│   ├── frontend/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── layouts/
│   │   ├── styles/
│   │   └── public/
│   │
│   ├── backend/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   └── users/
│   │   │
│   │   ├── core/
│   │   ├── middleware/
│   │   └── server.ts
│   │
│   └── shared/
│       ├── types/
│       ├── utils/
│       └── constants/
│
├── runtime/                    # Deterministic execution layer
│   ├── scripts/
│   ├── migrations/
│   └── seeds/
│
├── .generated/                 # Raw AI output (never trusted)
├── .staging/                   # Cleaned + validated
├── .snapshots/                 # Versioned generation states
├── .tmp/                       # Disposable
│
├── logs/
├── .env.example
└── README.md
