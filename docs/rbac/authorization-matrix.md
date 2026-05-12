# Fence Wizard RBAC Authorization Matrix

## Phase Mapping

**Current Phase:** Phase 2 – Security Hardening

## What Are We Doing?

This document defines the role-to-permission authorization matrix for Fence Wizard. It separates platform access, assigned RBAC roles, organizational hierarchy, and override exceptions so access control can be implemented consistently across the UI, API, and audit layer.

## Why It Matters

A written authorization matrix prevents permission drift, reduces accidental over-permissioning, and gives admins a defensible access-control baseline. It also supports audit readiness by documenting which roles should be able to perform sensitive actions.

## Access Model

```text
User Account
  -> Platform Access
  -> Assigned RBAC Roles
  -> Effective Permissions Resolver
  -> authorize(userId, permission)
  -> Protected Action
```

## Role Catalog

| Role | Purpose | Risk Level | Notes |
|---|---|---:|---|
| platform_admins | Full administrative management | Critical | Assign only to trusted system admins |
| general_manager | Business-level oversight and approvals | High | Should view audit and role policies |
| project_managers | Takeoff and project ownership workflows | Medium | May require PM capacity profile |
| pma | Proposal / PM assistant workflows | Medium | Often paired with operator in limited cases |
| operator | Scheduling and dispatch workflows | Medium | Dispatch permissions should be enforced server-side |
| inventory | Inventory visibility and updates | Medium | Inventory adjustments require audit logging |
| purchasing | Purchasing and vendor-related workflows | High | Can affect financial or operational exposure |
| safety | Safety/compliance reporting workflows | Medium | Should not imply admin privileges |
| read_only | View-only access for limited users | Low | Default low-risk baseline |

## Permission Matrix

| Permission Key | platform_admins | general_manager | project_managers | pma | operator | inventory | purchasing | safety | read_only |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| viewDispatch | Yes | Yes | Yes | Yes | Yes | No | No | No | Yes |
| manageSchedule | Yes | Yes | Limited | No | Yes | No | No | No | No |
| dispatchAssign | Yes | Yes | Limited | No | Yes | No | No | No | No |
| viewProposals | Yes | Yes | Yes | Yes | No | No | No | No | Yes |
| editProposal | Yes | Yes | Yes | Yes | No | No | No | No | No |
| lockProposal | Yes | Yes | Yes | Limited | No | No | No | No | No |
| markSold | Yes | Yes | Yes | No | No | No | No | No | No |
| viewInventory | Yes | Yes | No | No | No | Yes | Yes | No | Yes |
| manageInventory | Yes | Yes | No | No | No | Yes | Limited | No | No |
| approveInventoryAdjustment | Yes | Yes | No | No | No | Limited | No | No | No |
| postInventoryCorrection | Yes | Yes | No | No | No | Limited | No | No | No |
| managePMProfiles | Yes | Yes | No | No | No | No | No | No | No |
| overrideAssignment | Yes | Limited | No | No | No | No | No | No | No |
| editJobNumber | Yes | Yes | Limited | No | No | No | No | No | No |
| viewAuditLog | Yes | Yes | No | No | No | No | No | No | No |
| manageRoles | Yes | No | No | No | No | No | No | No | No |
| manageOverrides | Yes | Limited | No | No | No | No | No | No | No |
| approveAccessRequests | Yes | Yes | No | No | No | No | No | No | No |

## High-Risk Permission Rules

| Permission | Required Control |
|---|---|
| manageRoles | Admin-only, audit required |
| manageOverrides | Admin/GM only, reason required, audit required |
| overrideAssignment | Admin/GM only, reason required, expiration recommended |
| markSold | Server-side authorization and audit required |
| approveInventoryAdjustment | Server-side authorization and before/after logging required |
| postInventoryCorrection | Server-side authorization and before/after logging required |
| editJobNumber | Server-side authorization and entity-level audit required |

## Authorization Implementation Pattern

All sensitive mutations should use a server-side authorization helper.

```ts
await authorize(userId, 'manageInventory')
```

Expected behavior:

- Deny by default
- Fail closed on resolver/database errors
- Do not trust client-side role state
- Log sensitive mutations after authorization

## UI Permission Gates

| UI Area | View Gate | Mutation Gate |
|---|---|---|
| Accounts | admin baseline or viewDispatch | manageRoles / approveAccessRequests |
| Role Policies | platform_admins or general_manager | manageRoles |
| Overrides | platform_admins or general_manager | manageOverrides / overrideAssignment |
| Audit Log | viewAuditLog | Read-only |
| Assignment Capacity Profile | assignment-related role or admin | managePMProfiles |

## Security Notes

- A user may have multiple roles.
- Role permissions should be additive unless an explicit deny override exists.
- Overrides must not become custom per-user roles.
- Legacy `User.role` should be treated as migration context, not the final source of truth.

## GRC Alignment

| Framework Area | Alignment |
|---|---|
| NIST AC-2 | Account management |
| NIST AC-3 | Access enforcement |
| NIST AC-6 | Least privilege |
| NIST AU-2 | Auditable events |
| NIST AU-6 | Audit review |
