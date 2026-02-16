# Directive 001: Authentication

> Feature specification for the authentication module.

## Goal

Implement user authentication (sign up, sign in, sign out, password reset).

## Requirements

- [ ] User registration with email and password
- [ ] Login with email and password
- [ ] Session management (JWT or cookie-based)
- [ ] Password reset flow
- [ ] Route protection (authenticated vs. public)

## Scope

- **Frontend**: Login/Register pages, auth state management
- **Backend**: `modules/auth/` — routes, controllers, services
- **Shared**: Auth-related types and constants
