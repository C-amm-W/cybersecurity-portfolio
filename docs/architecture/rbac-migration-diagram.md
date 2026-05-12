# Fence Wizard RBAC Migration Architecture

## Objective

Document the transition from legacy single-role and per-user permission management to a centralized RBAC-first security model.

## Security Goal

Move from:

```text
Manual per-user permissions + role assumptions
```

To:

```text
Centralized RBAC + effective permissions + audited exceptions
```

---

# Legacy Architecture (Before)

```mermaid
flowchart TD
    A[User] --> B[Single Role Field]
    A --> C[Manual Permission Toggles]
    C --> D[Per-User Exceptions]
    D --> E[Route Access]

    style C fill:#ffdddd
    style D fill:#ffdddd
```

## Legacy Risks

| Risk | Description |
|---|---|
| Permission drift | Every user becomes unique |
| Hidden privilege escalation | Overrides accumulate silently |
| Poor auditability | Difficult to explain effective access |
| UI inconsistency | Single-role assumptions |
| Security gaps | Mixed auth patterns |

---

# Target RBAC Architecture (After)

```mermaid
flowchart TD
    A[User Account]
    B[Platform Access]
    C[Assigned RBAC Roles]
    D[Overrides - Exception Only]
    E[Effective Permissions Resolver]
    F[authorize helper]
    G[Protected API Route]
    H[Audit Logging]

    A --> B
    A --> C
    D --> E
    C --> E
    E --> F
    F --> G
    G --> H

    style D fill:#fff2cc
    style H fill:#d9ead3
```

---

# RBAC UI Architecture

## Primary Navigation

```text
Accounts | Org Structure | Role Policies | Overrides | Audit Log
```

## Separation of Concerns

| Area | Responsibility |
|---|---|
| Platform Access | Login/admin tier |
| Assigned Roles | Business permissions |
| Org Structure | Reporting hierarchy |
| Overrides | Exception-only controls |
| Audit Log | Security traceability |

---

# Effective Permissions Flow

```mermaid
sequenceDiagram
    participant Admin
    participant UI
    participant API
    participant Resolver
    participant Audit

    Admin->>UI: Assign Role
    UI->>API: Request Role Change
    API->>Resolver: authorize(manageRoles)
    Resolver-->>API: allowed
    API->>Audit: logPermissionEvent()
    API-->>UI: Success Response
```

---

# Override Governance Model

## Correct Override Usage

Overrides should:

- be temporary,
- require a reason,
- be logged,
- and remain secondary to roles.

## Incorrect Usage

Overrides must not become:

- custom user roles,
- silent privilege escalation,
- permanent entitlement shortcuts.

---

# PM Assignment Capacity Integration

## Migration Goal

Fold legacy PM profile management into the RBAC-first admin experience without changing the assignment engine.

## Constraints

- Keep existing PMProfile schema
- Keep assignmentEngine.ts behavior stable
- Do not auto-create PM profiles
- Preserve current assignment failure behavior

---

# Authorization Enforcement Strategy

## Standard Pattern

```ts
await authorize(userId, 'permission_key')
```

## Security Requirements

- Deny by default
- Fail closed
- No client-only authorization assumptions
- Log sensitive mutations

---

# Migration Phases

| Phase | Focus | Status |
|---|---|---|
| Phase 1 | RBAC foundation and resolver | Complete/In Progress |
| Phase 2 | Enforcement and audit hardening | Active |
| Phase 3 | Detection and SOC integration | Planned |
| Phase 4 | Offensive validation and testing | Planned |
| Phase 5 | Governance and architecture maturity | Planned |

---

# High-Risk Migration Areas

| Area | Risk |
|---|---|
| Legacy User.role dependencies | Inconsistent authorization |
| Email-based bypasses | Hidden escalation |
| Missing route enforcement | Access bypass |
| Unlogged overrides | Insider-risk blind spots |
| Client-side permission assumptions | Security inconsistency |

---

# Final Target State

```mermaid
flowchart LR
    A[RBAC Roles] --> B[Effective Permissions]
    C[Overrides] --> B
    B --> D[Protected APIs]
    D --> E[Audit Logs]
    E --> F[Detection and Monitoring]
```

## Desired Outcomes

- Consistent access control
- Reduced permission drift
- Centralized authorization
- Strong auditability
- Cleaner admin workflows
- Easier incident investigation
