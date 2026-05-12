# Role Permission Simulation Lab

## Lab Overview

This lab simulates a role-based access control system using a multi-role permission resolver model.

The objective is to demonstrate:

- Multi-role authorization
- Effective permission calculation
- Override handling
- Deny-by-default behavior
- Fail-closed authorization
- Auditable administrative actions

## Security Objective

Traditional per-user permission systems often lead to:

- permission drift,
- hidden escalation,
- inconsistent access,
- and poor auditability.

This simulation demonstrates how RBAC reduces those risks.

## Simulated Roles

| Role | Purpose |
|---|---|
| platform_admins | Administrative access |
| project_managers | Proposal/project management |
| pma | Proposal assistant workflows |
| operator | Dispatch and scheduling |
| inventory | Inventory operations |
| read_only | View-only access |

## Simulated Permissions

| Permission | Description |
|---|---|
| manageSchedule | Modify schedules |
| dispatchAssign | Assign dispatch work |
| editProposal | Edit proposals |
| markSold | Mark proposals sold |
| manageInventory | Modify inventory |
| manageRoles | Assign/remove RBAC roles |
| manageOverrides | Create/remove overrides |
| viewAuditLog | View security audit logs |

## Effective Permission Model

```text
Roles + Overrides = Effective Permissions
```

### Example

```text
User Roles:
- PMA
- Operator

Effective Permissions:
- editProposal
- manageSchedule
- dispatchAssign
```

## Override Example

```text
Override:
DENY manageSchedule
```

Effective result:

```text
manageSchedule = denied
```

## Recommended Folder Expansion

Add later:

```text
labs/role-permission-simulation/
├── resolver-example.ts
├── sample-users.json
├── override-scenarios.md
├── authorization-tests.md
└── audit-log-examples.json
```

## Example Resolver Pseudocode

```ts
function getEffectivePermissions(user) {
  const rolePermissions = unionPermissions(user.roles)

  return applyOverrides(rolePermissions, user.overrides)
}
```

## Example Authorization Pattern

```ts
await authorize(userId, 'manageInventory')
```

## Expected Security Behaviors

| Behavior | Requirement |
|---|---|
| Deny by default | Mandatory |
| Fail closed | Mandatory |
| Multi-role support | Mandatory |
| Audit sensitive actions | Mandatory |
| Prevent client-only authorization | Mandatory |

## Attack Scenarios To Test

### 1. Privilege Escalation Attempt

Scenario:

- User attempts admin-only action without required role.

Expected:

- Authorization denied
- Audit event logged

---

### 2. Override Abuse

Scenario:

- Admin repeatedly grants manual overrides.

Expected:

- Override activity visible
- Audit review detects excessive exceptions

---

### 3. Missing Authorization Coverage

Scenario:

- Route lacks authorize() helper.

Expected:

- Security review identifies route gap
- Enforcement backlog updated

---

### 4. Client-Side Tampering

Scenario:

- User manipulates front-end role state.

Expected:

- Backend authorization still denies access

## SOC / Detection Opportunities

Potential detections:

- Excessive permission denied events
- Sudden admin role assignments
- Override spikes
- Inventory correction anomalies
- After-hours administrative actions

## GRC Alignment

| Control Area | Alignment |
|---|---|
| Access Control | NIST AC-2 / AC-3 / AC-6 |
| Auditability | NIST AU-2 / AU-6 |
| Least Privilege | NIST AC-6 |
| Monitoring | SOC-oriented logging practices |

## Portfolio Value

This lab demonstrates:

- Security architecture thinking
- RBAC design understanding
- Access-control governance
- Defensive security engineering
- Audit-aware system design
