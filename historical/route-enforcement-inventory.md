# Fence Wizard Route Enforcement Inventory
> **Historical document**
> **Superseded:** 2026-08-04
> **Superseding document:** [Current Control Status](../docs/current-control-status.md)
> Status labels and roadmap phases below are preserved only to explain migration history. They are not current implementation claims.


## Purpose

This document inventories high-risk routes and workflows that require centralized RBAC enforcement and audit logging.

The goal is to eliminate inconsistent authorization patterns such as:

- Legacy `User.role` checks
- Email-based bypasses
- Client-side authorization assumptions
- Missing authorization coverage

## Security Objective

Every sensitive route should:

1. Use centralized authorization
2. Fail closed
3. Be audit logged
4. Avoid direct role-string comparisons where possible

## Standard Enforcement Pattern

```ts
await authorize(userId, 'permission_key')
```

## Priority Enforcement Areas

### 1. Proposal Management

| Route / Action | Required Permission | Risk |
|---|---|---|
| lockProposal | lockProposal | High |
| markSold | markSold | Critical |
| editProposal | editProposal | Medium |
| proposal status changes | editProposal | Medium |

### Proposal Security Controls

- Server-side permission validation
- Audit logging
- Entity-level before/after logging for major state changes

---

### 2. Inventory Management

| Route / Action | Required Permission | Risk |
|---|---|---|
| manageInventory | manageInventory | High |
| approveInventoryAdjustment | approveInventoryAdjustment | Critical |
| postInventoryCorrection | postInventoryCorrection | Critical |
| inventory edits | manageInventory | High |

### Inventory Security Controls

- Audit before/after values
- Prevent client-only authorization
- Review for financial impact

---

### 3. Scheduling / Dispatch

| Route / Action | Required Permission | Risk |
|---|---|---|
| manageSchedule | manageSchedule | High |
| dispatchAssign | dispatchAssign | High |
| dispatch reassignment | dispatchAssign | High |

### Dispatch Security Controls

- Log assignment changes
- Restrict override capability
- Verify dispatch actions are permission-gated

---

### 4. RBAC / Administrative Actions

| Route / Action | Required Permission | Risk |
|---|---|---|
| assign role | manageRoles | Critical |
| remove role | manageRoles | Critical |
| create override | manageOverrides | Critical |
| remove override | manageOverrides | Critical |
| approve access request | approveAccessRequests | High |
| edit PM profile | managePMProfiles | High |

### Administrative Security Controls

- Mandatory audit logging
- Admin-only restrictions
- Reason fields for overrides
- Prevent self-escalation where possible

---

## Legacy Risk Inventory

### Patterns To Remove

| Pattern | Risk |
|---|---|
| `if (user.role === 'ADMIN')` | Inconsistent RBAC enforcement |
| Email allowlists | Hidden privilege escalation |
| Client-side role checks | Bypass risk |
| Direct permission toggles | Permission drift |
| Missing authorization wrappers | Unauthorized access |

## Migration Rules

| Rule | Requirement |
|---|---|
| Keep compatibility bridge temporarily | Yes |
| Remove role-string assumptions over time | Yes |
| Keep deny-by-default behavior | Mandatory |
| Keep fail-closed behavior | Mandatory |
| Log authorization failures | Mandatory |

## Authorization Coverage Checklist

| Control | Status |
|---|---|
| Centralized permission registry | Planned/Implemented |
| Multi-role resolver | Planned/Implemented |
| authorize() helper | Required |
| Audit wrapper | Required |
| Override governance | Required |
| Effective permission UI | Required |
| Legacy role inventory | Required |
| Email bypass inventory | Required |

## Recommended Audit Event Mapping

| Action | Audit Event |
|---|---|
| Role assignment | role_assigned |
| Override created | override_created |
| Proposal locked | proposal_locked |
| Proposal sold | proposal_marked_sold |
| Inventory correction | inventory_correction |
| Dispatch reassignment | dispatch_assignment_changed |
| Permission denied | permission_denied |

## Environment Separation Requirements

| Environment | Rule |
|---|---|
| Development | Allow verbose logging and testing |
| Staging | Simulate production RBAC policies |
| Production | Strict audit and authorization enforcement |

## Final Security Guidance

RBAC is only effective if:

- routes are actually protected,
- authorization decisions are centralized,
- sensitive actions are logged,
- overrides remain exceptions,
- and the UI does not imply permissions the backend does not enforce.
