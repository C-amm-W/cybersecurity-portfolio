# Fence Wizard Audit Event Schema

> **Document status:** Sanitized reference design; implementation coverage is governed by [Current Control Status](../current-control-status.md).
> **As of:** 2026-08-04
> Examples are synthetic and not production exports.


## Objective

Define a centralized audit event schema for RBAC-sensitive actions inside Fence Wizard.

This schema supports:

- Incident response
- Administrative traceability
- RBAC change auditing
- Insider-threat investigations
- Compliance readiness

## Security Impact

Without centralized audit logging:

- RBAC changes become non-traceable
- Override misuse is difficult to investigate
- Sensitive admin actions cannot be reconstructed
- Incident response timelines become incomplete

Audit logging expectations and implementation state are maintained in [Current Control Status](../current-control-status.md).

## Event Categories

| Category | Examples |
|---|---|
| Authentication | login, logout, failed_login |
| Authorization | permission_denied, privilege_escalation_attempt |
| RBAC | role_assigned, role_removed |
| Overrides | override_created, override_removed |
| PM Profile | pm_profile_created, pm_profile_updated |
| Inventory | inventory_adjustment, inventory_correction |
| Proposal | proposal_locked, proposal_marked_sold |
| Dispatch | dispatch_assignment_changed |
| Admin | access_request_approved |

## Minimum Event Schema

```ts
interface AuditEvent {
  eventId: string
  timestamp: string
  actorUserId: string
  actorEmail?: string
  targetUserId?: string
  permissionUsed?: string
  eventType: string
  entityType?: string
  entityId?: string
  route?: string
  requestMethod?: string
  ipAddress?: string
  userAgent?: string
  success: boolean
  reason?: string
  before?: unknown
  after?: unknown
}
```

## Required Fields

| Field | Description |
|---|---|
| eventId | Unique audit event ID |
| timestamp | UTC timestamp |
| actorUserId | User performing action |
| permissionUsed | Permission required for action |
| eventType | Canonical event type |
| success | Whether action succeeded |

## Recommended Additional Fields

| Field | Purpose |
|---|---|
| targetUserId | User affected by change |
| entityType | Type of modified object |
| entityId | Identifier of modified object |
| before | Previous state |
| after | New state |
| ipAddress | Incident investigation |
| userAgent | Session analysis |
| reason | Override justification |

## High-Risk Events (Mandatory Logging)

| Event | Mandatory |
|---|---|
| role_assigned | Yes |
| role_removed | Yes |
| override_created | Yes |
| override_removed | Yes |
| permission_denied | Yes |
| approveInventoryAdjustment | Yes |
| postInventoryCorrection | Yes |
| proposal_marked_sold | Yes |
| editJobNumber | Yes |
| manageRoles | Yes |

## Synthetic Example Event

```json
{
  "eventId": "evt_001",
  "timestamp": "2026-05-12T18:00:00Z",
  "actorUserId": "usr_admin_01",
  "targetUserId": "usr_pm_04",
  "permissionUsed": "manageRoles",
  "eventType": "role_assigned",
  "entityType": "UserRoleAssignment",
  "entityId": "ura_001",
  "success": true,
  "before": {
    "roles": ["pma"]
  },
  "after": {
    "roles": ["pma", "operator"]
  }
}
```

## Logging Wrapper Pattern

```ts
await logPermissionEvent({
  actorUserId,
  targetUserId,
  permissionUsed: 'manageRoles',
  eventType: 'role_assigned',
  entityType: 'UserRoleAssignment',
  entityId: assignmentId,
  before,
  after,
  success: true,
})
```

## Synthetic Prisma Model Example

```prisma
model AuditEvent {
  id               String   @id @default(cuid())
  timestamp        DateTime @default(now())
  actorUserId      String
  targetUserId     String?
  permissionUsed   String?
  eventType        String
  entityType       String?
  entityId         String?
  route            String?
  requestMethod    String?
  ipAddress        String?
  userAgent        String?
  success          Boolean
  reason           String?
  beforeState      Json?
  afterState       Json?
}
```

## Audit Review Recommendations

| Frequency | Action |
|---|---|
| Daily | Review failed authorization attempts |
| Weekly | Review override activity |
| Weekly | Review admin role assignments |
| Monthly | Review stale overrides |
| Quarterly | Conduct RBAC entitlement review |

## Detection Opportunities

Potential SOC detections:

- Excessive override creation
- Repeated permission denied events
- After-hours admin actions
- High-risk role assignment spikes
- Inventory correction anomalies
- Sudden privilege escalation patterns

## Illustrative Retention Planning Guidance

| Event Type | Illustrative Planning Range |
|---|---|
| Admin RBAC events | 1–3 years |
| Authentication failures | 90–180 days |
| High-risk financial/inventory events | 1–3 years |
| General low-risk events | 90 days |

## Security Rules

- Audit logs must be append-only.
- Admins must not silently delete audit events.
- Sensitive logs should be access-controlled.
- Production and development logs should remain separated.
- Logging failures should never silently grant access.
